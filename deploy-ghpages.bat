@echo off
echo -------------------------------------
echo 1. Entrando al proyecto
cd /d %~dp0

echo -------------------------------------
echo 2. Asegurando que es repositorio Git
IF NOT EXIST ".git" (
    git init
    git branch -m main
    git remote add origin https://github.com/IreneBS/science-hub-portal.git
)

echo -------------------------------------
echo 3. Agregando archivos y haciendo commit (si hace falta)
git add .
git commit -m "Deploy commit" || echo "No hay cambios nuevos para commit"

echo -------------------------------------
echo 4. Instalando dependencias
call npm install

echo -------------------------------------
echo 5. Ejecutando build de Vite
call npm run build

echo -------------------------------------
echo 6. Desplegando a GitHub Pages
call npx gh-pages -d dist --repo https://github.com/IreneBS/science-hub-portal.git

echo -------------------------------------
echo !Despliegue completado!
pause
