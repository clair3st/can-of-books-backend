const Book = require('../models/book.js')

async function getBooks(request, response) {

  try {
    const bks = await Book.find()
    response.send(bks)

  } catch (error) {
    console.error(error);
    response.status(400).send(error.message);
  }

}

module.exports = getBooks;