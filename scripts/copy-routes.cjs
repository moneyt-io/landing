const fs = require('fs');
const path = require('path');

const routesConfig = {
  "version": 1,
  "include": ["/*"],
  "exclude": [
    "/_assets/*",
    "/*.ico",
    "/*.svg", 
    "/*.png",
    "/*.jpg",
    "/*.jpeg", 
    "/*.gif"
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
};

const buildDir = path.join(__dirname, '../build');
const routesPath = path.join(buildDir, '_routes.json');

// Asegurarse de que la carpeta build existe
if (!fs.existsSync(buildDir)) {
  console.error('¡La carpeta build no existe!');
  process.exit(1);
}

// Escribir el archivo _routes.json
fs.writeFileSync(
  routesPath,
  JSON.stringify(routesConfig, null, 2)
);

console.log('_routes.json generado correctamente en la carpeta build');
