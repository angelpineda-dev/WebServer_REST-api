// importation to get suggestions from vsCode
const { response } = require("express");

const usersGet = (req, res = response) => {
  // obtener los datos que vienen en la query
  const { q, nombre = "No name", apikey, page = 1, limit = 10 } = req.query;

  res.json({
    msg: "get API - controlador",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usersPost = (req, res) => {
  /* extraer el body */
  const { nombre, edad } = req.body;

  res.json({
    msg: "post API - controlador",
    nombre,
    edad,
  });
};

const usersPut = (req, res) => {
  const id = req.params.id;

  res.json({
    msg: "put API - controlador",
    id,
  });
};

const usersDelete = (req, res) => {
  res.json({
    msg: "delete API - controlador",
  });
};

module.exports = {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
};
