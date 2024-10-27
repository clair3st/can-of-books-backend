const Book = require('../models/book.js')

async function addBook(request, response) {

    if(!request.query.title || !request.query.description){
        return response.status(400).send('Missing title or description');
    }

    try {
        const newRecord = {
            title: request.query.title,
            description: request.query.description,
            status: request.query.status
        }

        const newBook = new Book(newRecord);
        await newBook.save()

        response.status(200).send(newBook)

    } catch(error){
        
        response.status(400).send(error.message)
    }
}

module.exports = addBook