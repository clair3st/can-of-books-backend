const Book = require('../models/book.js')

async function addBook(request, response) {
    // gets information from the BODY of the request object

    if(!request.query.title || !request.query.description){
        return response.status(400).send('Missing title or description');
    }

    try {
        const newRecord = {
            title: request.query.title,
            description: request.query.description,
            status: request.query.status
        }

        // const newBook = new Book(newRecord);
        // await newBook.save()

        response.status(200).send(newRecord)

    } catch(error){
        console.log(error)
        response.status(400).send(error.message)
    }
}

module.exports = addBook