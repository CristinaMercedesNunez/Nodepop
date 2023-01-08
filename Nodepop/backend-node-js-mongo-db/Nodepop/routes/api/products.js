'use strict';

const express = require('express');
const createError = require('http-errors');
const product = require('../../models/product');

const router = express.Router();


// GET /api/agentes
// Devuelve una lista de agentes
router.get('/', async (req, res, next) => {
  try {

    // filtros
    const name = req.query.name;
    const price = req.query.price;
    // paginación
    const skip = req.query.skip;
    const limit = req.query.limit;
    // selección de campos
    const fields = req.query.fields; // /api/agentes?fields=name -_id
    // ordenación
    const sort = req.query.sort; // /api/agentes?sort=age%20name

    const filtro = {};

    if (name) { // /api/agentes?name=Smith
      filtro.name = name;
    }

    if (price) { // /api/agentes?age=32
      filtro.age = age;
    }

    if (type) {
      filtro.type = type;

    }

    const products = await producto.lista(filtro, skip, limit, fields, sort);
    res.json({ results: productos });
  } catch(err) {
    next(err);
  }
});

// GET /api/agentes/(id)
// Devuelve un agente
router.get('/:id', async (req, res, next) => {
  try {

    const id = req.params.id;

    // buscar un agente en la BD
    const producto = await producto.findById(id);

    res.json({ result: producto });

  } catch (err) {
    next(err);
  }
});

// PUT /api/agentes/(id) (body=agenteData)
// Actualizar un agente
router.put('/:id', async (req, res, next) => {
  try {

    const id = req.params.id;
    const productData = req.body;

    const productUpdated = await product.findOneAndUpdate({ _id: id}, productData, {
      new: true // esto hace que nos devuelva el documento actualizado
    });

    res.json({ result: productUpdated });

  } catch (err) {
    next(err);
  }
});

// POST /api/agentes (body=agenteData)
// Crear un agente
router.post('/', async (req, res, next) => {
  try {

    const agenteData = req.body;

    // instanciar un nuevo agente en memoria
    const agente = new Agente(agenteData);

    // lo guardo en la base de datos
    const agenteGuardado = await agente.save();

    res.json({ result: agenteGuardado });

  } catch (err) {
    next(err);
  }
});

// DELETE /api/agentes/:id
// Eliminar un agente
router.delete('/:id', async (req, res, next) => {
  try {

    const id = req.params.id;

    const agente = await Agente.findById(id);

    if (!agente) {
      // const err = new Error('not found');
      // err.status = 404;
      return next(createError(404));
    }

    await Agente.deleteOne({ _id: id });

    res.json();

  } catch (err) {
    next(err);
  }
});

module.exports = router;
