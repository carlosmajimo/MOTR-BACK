# MOTR-BACK
El proposito de esta aplicación es ser el backend del sistema de monitoreo de rutas de transporte(MOTR), esta aplicación está
desarrollada en una arquitectura dirigida por dominio.

# Prerrequisitos
Para que esta aplicación sea ejecutada localmente necesitas de estas herramientas:
- Install [Node.js](https://nodejs.org/en/)
- Install [MySQL](https://dev.mysql.com/downloads/installer/)

# Comenzar
- Clona este repositorio
```
git clone https://github.com/carlosmjimenez/MOTR-BACK
```
- Instala las dependencias
```
cd MOTR-BACK
npm install
```

- Crear la base de datos
En una ventana de comandos de MySQL ejecuta:
```sql
CREATE SCHEMA `db_name` DEFAULT CHARACTER SET utf8 ;
```

- Configura las variables de entorno
Crea dos archivos de entorno con los siguientes nombres `.env` y `ormconfig.env`.

El archivo `.env` puedes dejarlo vacio, aqui van las variables de entorno que el sistema tomará para funcionar

En el archivo `ormconfig.env` van las configuraciones del TypeORM, estas son necesarias para el funcionamiento de la aplicación.
Aqui podemos ver un ejemplo de este archivo:

```env
TYPEORM_CONNECTION = mysql
TYPEORM_HOST = localhost
TYPEORM_PORT = 3306
TYPEORM_USERNAME = root
TYPEORM_PASSWORD = 123456
TYPEORM_DATABASE = db_name
TYPEORM_SYNCHRONIZE = true
TYPEORM_LOGGING = true
TYPEORM_ENTITIES = dist/Domain/*.js
TYPEORM_ENTITIES_DIR = dist/Domain
```

- Transpila y Ejecuta la aplicación
```
npm run build
npm start
```

## Estructura del proyecto

| Name                     | Description                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **dist**                 | Contiene el codigo compilado y es el que node va a ejecutar.                                  |
| **node_modules**         | Contiene las dependencias de NPM.                                                             |
| **src**                  | Contiene el codigo que se va a compilar.                                                      |
| **src/API**              | En esta carpeta se encuentra el servidor HTTP y sus configuraciones.                          |
| **src/Application**      | En esta carpeta se encuentran los servicios que alimentan a los servidores                    |
| **src/Domain**           | En el dominio se encuentran las entidades que de la base de datos y del software              |
| **src/Infraestructure**  | En la infraestructura está el contexto de la base de datos.                                   |
| **src/Public**           | Estan los recursos estaticos que los usuarios podran utilizar                                 |
| **src/TCP-IP**           | En esta carpeta se encuentra el servidor HTTP y sus configuraciones.                          |
| **src/types**            | Holds .d.ts files not found on DefinitelyTyped.                                               |
| **src**/index.ts         | Punto de entrada de la aplicación de Node                                                     |
| **views**                | views define las vistas que la aplicación renderiza. Pug es el motor de plantillas            |
| .env                     | API keys, tokens, passwords.                                                                  |
| ormconfig.env            | Contiene las configuraciones de la base de datos                                              |
| .copyStaticAssets.ts     | Copia los recursos estaticos al dist                                                          |
| package.json             | Contiene la configuracion de la aplicación de node y las dependencias a utilizar              |
| tsconfig.json            | Opciones de configuración del compilador de TypeScript a JavaScript                           |
| tslint.json              | Opciones de configuración de TS-Lint que ayuda a escribir un codigo entendible                |