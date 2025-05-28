// Import MongoClient class from 'mongodb' package, which is used to connect to a MongoDB server.

const { MongoClient } = require('mongodb');

// The connection URI for the MongoDB server (using localhost and the default port 27017).
const uri = 'mongodb://localhost:27017';
 
// The database and collection names.
const dbName = 'plp_bookstore';
const collectionName = 'books';

// Sample book data to be inserted into the collection.
const books = [
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        genre: 'Fiction',
        published_year: 1960,
        price: 12.99,
        in_stock: true,
        pages: 336,
        publisher: 'J. B. Lippincott & Co.'
    },
    {
        title: '1984',
        author: 'George Orwell',
        genre: 'Dystopian',
        published_year: 1949,
        price: 10.99,
        in_stock: true,
        pages: 328,
        publisher: 'Secker & Warburg'
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Fiction',
        published_year: 1925,
        price: 9.99,
        in_stock: true,
        pages: 180,
        publisher: 'Charles Scribner\'s Sons'
    },
    {
        title: 'Brave New World',
        author: 'Aldous Huxley',
        genre: 'Dystopian',
        published_year: 1932,
        price: 11.50,
        in_stock: false,
        pages: 311,
        publisher: 'Chatto & Windus'
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasy',
        published_year: 1937,
        price: 14.99,
        in_stock: true,
        pages: 310,
        publisher: 'George Allen & Unwin'
    },
    {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.50,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Adventure',
    published_year: 1851,
    price: 12.50,
    in_stock: false,
    pages: 635,
    publisher: 'Harper & Brothers'
  },
  {
    title: 'The Martian',
    author: 'Andy Weir',
    genre: 'Science Fiction',
    published_year: 2014,
    price: 14.49,
    in_stock: true,
    pages: 369,
    publisher: 'Crown Publishing'
  }

];

// Asyncronous function to insert the book documents into the MongoDB collection.
async function insertBooks() {
    // Create a new MongoClient instance using specific URI
    const client = new MongoClient(uri);
    try {
        // Connect to MongoDB server.
        await client.connect();
        console.log('Connected to MongoDB server');

        // Access the specified database.
        const db = client.db(dbName);
        // Access the specified collection.
        const collection = db.collection(collectionName);

        // Check if the collection already contains any documents.
        const count = await collection.countDocuments();
        if (count > 0) {
            console.log(`Collection already contains ${count} documents. Dropping collection...`);
            await collection.drop();
        }

        // Insert the array of book documents into the collection.
        const result = await collection.insertMany(books);
        console.log(`${result.insertedCount} books were successfully inserted into the database`);

        // Retrieve all inserted book documents to verify the insertion.
        const insertedBooks = await collection.find({}).toArray();
        console.log('\nInserted books:');
         // Loop through the books and log basic details for each.
        insertedBooks.forEach((book, index) => {
        console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.published_year})`);
        });
    }
    
    catch (err) {
        console.error('Error occurred:', err);
    }

    finally {
        // Ensure the client is closed after operations are complete.
        await client.close();
        console.log('MongoDB connection closed');
    }
}

// Execute the insertBooks function and handle any errors.
insertBooks().catch(console.error);