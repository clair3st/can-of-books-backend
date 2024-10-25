//Prepopulating data
require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./book.js');
const books = [
	{
		title: 'The Fellowship of the Ring',
		description: 'Sauron has gathered to him all the Rings of Power, and intendes to use them to  rule Middle-earth. All he lacks is the One Ring - the ring that rules them all, which through a series of coincidences, has fallen into unlikely hands - those of elderly hobbit Bilbo Baggins, of the Shire. When Bilbo entrusts the Ring to the care of the young nephew, Frodo must leave his home and undertake a dangerous journey to the Cracks of Doom to destroy the Ring and prevent Sauron realising his terrible plans. In this story, Frodo joins forces with Gandalf the wizard and a host of other companions - including some of his young hobbit friends - to undertake the first part of the journey towards Mordor.',
		status: 'read'
	},
	{
		title: 'The Two Towers',
		description: 'Frodo and his Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in a battle in the Mines of Moria. And Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape, the rest of the company was attacked by Orcs. Now they continue the journey alone down the great River Anduin—alone, that is, save for the mysterious creeping figure that follows wherever they go.',
		status: 'read'
	},
		{
		title: 'The Return of the King',
		description: 'The Dark Lord has risen, and as he unleashes hordes of Orcs to conquer all Middle-earth, Frodo and Sam struggle deep into his realm in Mordor. To defeat Sauron, the One Ring must be destroyed in the fires of Mount Doom. But the way is impossibly hard, and Frodo is weakening. The Ring corrupts all who bear it and Frodo’s time is running out. Will Sam and Frodo succeed, or will the Dark Lord rule Middle-earth once more?',
		status: 'read'
	},

]

async function seed(){

	await mongoose.connect(process.env.MONGODB_URI);

	for (let b of books) {
		const newBook = new Book(b)
		await newBook.save();
	}
	
	console.log('Database seeded successfully');
	mongoose.disconnect();
}

seed();