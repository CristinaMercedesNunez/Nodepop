'use strict';

const mongoose = require('mongoose');


//creamos los campos del esquema de los productos
const productSchema = mongoose.Schema({
  name: { type: String, unique: true},
  price: { type: Number, index: true},
  type: { type: String, index: true,},
  tag:{tag: String, index: true},
  status:{status: String, index: true}
  

});

productSchema.statics.lista = function(filters, skip, limit, fields, sort) {
  const query = product.find(filters); 
  query.skip(skip);
  query.limit(limit);
  query.select(fields);
  query.sort(sort);
  return query.exec() 
}

// creamos modelo
const product = mongoose.model('Product', productSchema);

// exportamos modelo
module.exports = product;