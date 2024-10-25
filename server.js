'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./book.js')
const PORT = process.env.PORT || 3001;


async function main() {
  const app = express();
  app.use(cors());

  await mongoose.connect(process.env.MONGODB_URI);

  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  mongoose.connection.once('open', function() {
    console.log('Mongoose is connected')
  });

  app.get('/books', getBooks)



  app.listen(PORT, () => console.log(`listening on ${PORT}`));

}

async function getBooks(request, response) {

  try {
    const bks = await Book.find()
    response.send(bks)

  } catch (error) {
    console.error(error);
    response.status(500).send(error.message);
  }

}

main()
