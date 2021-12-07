const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/usuarios";

    // Middlewares
    this.middlewares();

    // lectura y parseo del body
    /* Esto intenta serializar la informacion recibida de los metodos HTTP a formato json*/
    this.app.use(express.json());

    // Rutas de mi aplicacion
    this.routes();
  }

  middlewares() {
    // cors
    this.app.use(cors());
    // directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPath, require("../routes/users"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Corriendo en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
