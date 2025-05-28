// queries.js (Task 2: Basic CRUD Operations)
use plp_bookstore

// Function to find all books in a specific genre
print ("Task 2: Books published after 1950:")
db.books.find({ published_year: { $gt: 1950 } }).pretty()

// Function to find books by a specific author(J.R.R. Tolkien)
print ("Task 2: Books by J.R.R. Tolkien:")
db.books.find({ author: "J.R.R. Tolkien" }).pretty()

// Update the price of a specific book (The Great Gatsby)
print ("Task 2: Update price of 'The Great Gatsby' to 11.49:")
db.books.updateOne(
    { title: "The Great Gatsby" },
    { $set: { price: 11.49 } }
)
db.books.find({ title: "The Great Gatsby" }).pretty()

// Delete a book by title (Brave New World)
print ("Task 2: Delete 'Brave New World':")
db.books.deleteOne({ title: "Brave New World" })

// Task 3: Advanced Queries
// Find books that are in stock and published after 2010
print("Task 3: Books in stock and published after 2010:")
db.books.find({
    in_stock: true,
    published_year: { $gt: 2010 }
}).pretty()

// Sort books by price (ascending)
print("Task 3: Books sorted by price (ascending):")
db.books.find().sort({ price: 1 }).pretty()

// Sort books by price (descending)
print("Task 3: Books sorted by price (descending):")
db.books.find().sort({ price: -1 }).pretty()

// Pagination: 5 books per page, first page
print("Task 3: Pagination - First page (5 books):")
db.books.find().skip(0).limit(5).pretty()

// Pagination: 5 books per page, second page
print("Task 3: Pagination - Second page (5 books):")
db.books.find().skip(5).limit(5).pretty()

// Task 4: Aggregation Pipelines
// Average price of books by genre
print("Task 4: Average price by genre:")
db.books.aggregate([
    {
        $group: {
            _id: "$genre",
            avgPrice: { $avg: "$price" }
        }
    },
    {
        $sort: { _id: 1 } // Sort genres alphabetically
    }
]).pretty()

// Author with the most books
print("Task 4: Author with the most books:")
db.books.aggregate([
    {
        $group: {
            _id: "$author",
            bookCount: { $sum: 1 }
        }
    },
    {
        $sort: { bookCount: -1 } // Sort by book count descending
    },
    {
        $limit: 1 // Get the author with the most books
    }
]).pretty()

// Group books by publicayion decade
print("Task 4: Group books by publication decade:")
db.books.aggregate([
    {
        $bucket: {
            groupBy: "$published_year",
            boundaries: [1800, 1810, 1820, 1830, 1840, 1850, 1860, 1870, 1880, 1890, 1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020],
            default: "Other",
            output: {
                count: { $sum: 1 }
            }
        }
    }
]).pretty()

// Task 5: Indexing
// Create an index on the title field
print("Task 5: Creating index on title:")
db.books.createIndex({ title: 1 })

// Create a compound index on author and published_year
print("Task 5: Creating compound index on author and published_year:")
db.books.createIndex({ author: 1, published_year: 1 })

// Analyze query performance with explain()
print("Task 5: Performance analysis for title query:")
db.books.find({ title: "The Great Gatsby" }).explain("executionStats")

print("Task 5: Performance analysis for author and published_year query:")
db.books.find({ author: "J.R.R. Tolkien", published_year: { $gt: 1950 } }).explain("executionStats")