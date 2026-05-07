@echo off
setlocal

set "ROOT=%~dp0"
set "BACKEND_DIR=%ROOT%ml_backend"
set "ML_URL=http://127.0.0.1:8000"
set "FRONTEND_URL=http://localhost:3000"
set "BACKEND_DEPS_STAMP=.venv\requirements.installed"

if /i "%~1"=="backend" goto backend
if /i "%~1"=="frontend" goto frontend
goto main

:main
if not exist "%ROOT%package.json" (
  echo package.json was not found in %ROOT%
  pause
  exit /b 1
)

if not exist "%BACKEND_DIR%\app.py" (
  echo Backend app.py was not found in %BACKEND_DIR%
  pause
  exit /b 1
)

where npm >nul 2>&1
if errorlevel 1 (
  echo npm was not found. Install Node.js, then run this script again.
  pause
  exit /b 1
)

where python >nul 2>&1
if errorlevel 1 (
  where py >nul 2>&1
  if errorlevel 1 (
    echo Python was not found. Install Python 3, then run this script again.
    pause
    exit /b 1
  )
)

echo Starting ML backend at %ML_URL%
start "Solar Flare ML Backend" cmd /k call "%~f0" backend

echo Starting Next.js frontend at %FRONTEND_URL%
start "Solar Flare Frontend" cmd /k call "%~f0" frontend

echo.
echo Open %FRONTEND_URL% after both windows finish starting.
echo Backend health check: %ML_URL%/health
echo.
pause
exit /b 0

:backend
cd /d "%BACKEND_DIR%"
if errorlevel 1 (
  echo Could not open backend directory: %BACKEND_DIR%
  pause
  exit /b 1
)

where python >nul 2>&1
if not errorlevel 1 (
  set "PY_CMD=python"
) else (
  where py >nul 2>&1
  if errorlevel 1 (
    echo Python was not found. Install Python 3, then run this script again.
    pause
    exit /b 1
  )
  set "PY_CMD=py -3"
)

if not exist ".venv\Scripts\python.exe" (
  echo Creating backend virtual environment...
  %PY_CMD% -m venv .venv
  if errorlevel 1 (
    echo Failed to create backend virtual environment.
    pause
    exit /b 1
  )
)

set "NEED_BACKEND_DEPS=0"
if not exist "%BACKEND_DEPS_STAMP%" (
  set "NEED_BACKEND_DEPS=1"
) else (
  fc /b requirements.txt "%BACKEND_DEPS_STAMP%" >nul
  if errorlevel 1 set "NEED_BACKEND_DEPS=1"
)

if "%NEED_BACKEND_DEPS%"=="1" (
  echo Installing or updating backend dependencies...
  .venv\Scripts\python.exe -m pip install --upgrade pip
  if errorlevel 1 (
    echo Failed to upgrade pip.
    pause
    exit /b 1
  )

  .venv\Scripts\python.exe -m pip install -r requirements.txt
  if errorlevel 1 (
    echo Failed to install backend dependencies.
    pause
    exit /b 1
  )

  copy /y requirements.txt "%BACKEND_DEPS_STAMP%" >nul
  if errorlevel 1 (
    echo Failed to update backend dependency stamp.
    pause
    exit /b 1
  )
)

set "PYTHONIOENCODING=utf-8"
set "PYTHONUTF8=1"

echo Starting backend server on %ML_URL%
.venv\Scripts\python.exe app.py
pause
exit /b %errorlevel%

:frontend
cd /d "%ROOT%"
if errorlevel 1 (
  echo Could not open project directory: %ROOT%
  pause
  exit /b 1
)

where npm >nul 2>&1
if errorlevel 1 (
  echo npm was not found. Install Node.js, then run this script again.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo Installing frontend dependencies...
  npm install
  if errorlevel 1 (
    echo Failed to install frontend dependencies.
    pause
    exit /b 1
  )
)

set "ML_BACKEND_URL=%ML_URL%"
echo Starting frontend server on %FRONTEND_URL%
npm run dev
pause
exit /b %errorlevel%
