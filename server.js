'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getBooks = require('./handlers/getBooks.js')
const addBook = require('./handlers/addBook.js')
const deleteBook = require('./handlers/deleteBook.js')
const PORT = process.env.PORT || 3001;


async function main() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  await mongoose.connect(process.env.IS_DEV == 'true' ? process.env.MONGODB_URI_DEV : process.env.MONGODB_URI_PROD);

  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  mongoose.connection.once('open', function() {
    console.log('Mongoose is connected')
  });

  app.get('/books', getBooks)

  app.post('/books', addBook);

  app.delete('/books/:id', deleteBook);


  app.listen(PORT, () => console.log(`listening on ${PORT}`));



}

main()
