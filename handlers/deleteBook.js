const Book = require('../models/book.js')


async function deleteBook(request, response) {

  try{
    const removeBook = await Book.findByIdAndDelete(request.params.id)

    if(removeBook){

      response.send({sucess:true});

    } else {
      response.send("Did not delete")
    }
  } catch(err) {
    response.status(400).send(err.message)
  }
 

}

module.exports = deleteBook