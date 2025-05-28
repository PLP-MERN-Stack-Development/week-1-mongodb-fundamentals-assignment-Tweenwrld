// insert_books.js
use plp_bookstore
db.books.drop() // Clear existing data to prevent duplicates
db.books.insertMany([
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        published_year: 1925,
        price: 9.99,
        in_stock: true,
        pages: 180,
        publisher: "Scribner"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        published_year: 1960,
        price: 12.99,
        in_stock: true,
        pages: 281,
        publisher: "J.B. Lippincott"
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        published_year: 1949,
        price: 10.99,
        in_stock: false,
        pages: 328,
        publisher: "Secker & Warburg"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        published_year: 1813,
        price: 8.99,
        in_stock: true,
        pages: 432,
        publisher: "T. Egerton"
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        published_year: 1951,
        price: 11.99,
        in_stock: true,
        pages: 277,
        publisher: "Little, Brown"
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        genre: "Dystopian",
        published_year: 1932,
        price: 10.49,
        in_stock: true,
        pages: 268,
        publisher: "Chatto & Windus"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        published_year: 1937,
        price: 14.99,
        in_stock: true,
        pages: 310,
        publisher: "Allen & Unwin"
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        published_year: 1954,
        price: 19.99,
        in_stock: false,
        pages: 1178,
        publisher: "Allen & Unwin"
    },
    {
        title: "Dune",
        author: "Frank Herbert",
        genre: "Science Fiction",
        published_year: 1965,
        price: 15.99,
        in_stock: true,
        pages: 412,
        publisher: "Chilton Books"
    },
    {
        title: "Foundation",
        author: "Isaac Asimov",
        genre: "Science Fiction",
        published_year: 1951,
        price: 13.99,
        in_stock: true,
        pages: 255,
        publisher: "Gnome Press"
    },
    {
        title: "The Martian",
        author: "Andy Weir",
        genre: "Science Fiction",
        published_year: 2014,
        price: 14.49,
        in_stock: true,
        pages: 369,
        publisher: "Crown Publishing"
    }
])