# Week 1: MongoDB – Data Layer Fundamentals and Advanced Techniques

## Overview
This repository contains the solution for the Week 1 MongoDB assignment as part of the PLP Bookstore project. The focus of this assignment is to demonstrate proficiency in MongoDB fundamentals and advanced data handling techniques. You will create and manage a `plp_bookstore` database with a `books` collection by performing CRUD operations, executing advanced queries, building aggregation pipelines, and implementing indexing for performance optimization.

## Objectives
- **Setup MongoDB:** Configure a MongoDB environment either locally or using MongoDB Atlas.
- **Data Modeling:** Create and populate a `books` collection with sample data.
- **CRUD Operations:** Implement Create, Read, Update, and Delete operations.
- **Advanced Querying:** Utilize filtering, projection, sorting, and pagination in queries.
- **Aggregation Pipelines:** Build pipelines for data analysis (e.g., calculating averages, grouping documents).
- **Indexing:** Set up and evaluate indexes to enhance query performance.
- **Documentation & Submission:** Prepare comprehensive documentation and submit the solution via GitHub Classroom.

## Prerequisites
Before running the project, ensure you have the following installed:
- **MongoDB Community Edition** or a **MongoDB Atlas** account:
  - Download from the [MongoDB Download Center](https://www.mongodb.com/try/download/community).
  - For cloud-based setups, sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- **mongosh:** The MongoDB Shell used for executing scripts. (Bundled with MongoDB Community Edition or available separately.)
- **MongoDB Compass** (optional): For a GUI-based interface to visualize and interact with your data.
- **Git:** For cloning and managing the repository.
- A text editor such as **Visual Studio Code** for reviewing and editing code.

## Setup Instructions
Follow these steps to set up and run the project:

1. **Set Up MongoDB:**
   - **Local Installation:**
     - Install MongoDB Community Edition suitable for your operating system.
     - Start the MongoDB server by launching `mongod` in your terminal.
     - Verify that the server is running by opening a new terminal window and running:
       ```bash
       mongosh
       ```
   - **MongoDB Atlas:**
     - Create a free cluster on MongoDB Atlas and note the connection string provided.
     - Use this connection string in `mongosh` or MongoDB Compass to connect to your cluster.

2. **Clone the Repository:**
   - Accept the GitHub Classroom assignment invitation to create your personal repository.
   - Clone the repository to your local machine:
     ```bash
     git clone <repository-url>
     cd <repository-name>
     ```

3. **Create the Database and Collection:**
   - **Using mongosh:**  
     Open `mongosh` and create the database and collection by running:
     ```javascript
     use plp_bookstore
     db.createCollection("books")
     ```
   - **Note:**  
     The database and collection will also be automatically created by the script(s) when data is inserted if they do not already exist.

4. **Populate the Database:**

   I tested two alternative methods to insert sample book data into the `books` collection:

   - **Using mongosh to Run JavaScript Scripts:**
     - Execute the `insert_books.js` script with `mongosh` by running:
       ```bash
       mongosh < insert_books.js
       ```
     - This script connects to MongoDB, checks for an existing `books` collection (dropping it if found), and inserts documents containing fields such as `title`, `author`, `genre`, `published_year`, `price`, `in_stock`, `pages`, and `publisher`.

   - **Using Node.js:**
     - Ensure you have installed Node.js and the MongoDB Node.js driver by running:
       ```bash
       npm install mongodb
       ```
     - Run the script using Node.js:
       ```bash
       node inseert_books.js
       ```
     - **Note:**  
       Use the Node.js method if your script is designed to run as a standalone Node application (i.e., using `require('mongodb')` to connect to the MongoDB server).

   - **For MongoDB Atlas Users:**  
     Update the `uri` in `insert_books.js` with your connection string. For example:
     ```bash
     mongodb+srv://<username>:<password>@<cluster>.mongodb.net/plp_bookstore
     ```

5. **Execute the Queries and Operations:**
   
   Similar to data insertion, there are alternative methods to run the queries:

   - **Using mongosh:**
     - Run the `queries.js` script to perform CRUD operations, advanced queries, aggregation pipelines, and indexing tasks:
       ```bash
       mongosh < queries.js
       ```
     - You can also copy and paste individual queries into mongosh or MongoDB Compass for interactive testing. Ensure that mongosh is connected to the same MongoDB instance used by `insert_books.js`.

   - **Using Node.js (if applicable):**
     - If you have Node.js-based scripts for queries, install required packages and run:
       ```bash
       node queries.js
       ```

6. **Verify the Database:**
   - Open MongoDB Compass or use the MongoDB Atlas web interface to inspect the `plp_bookstore` database.
   - Confirm that the `books` collection is populated with the sample documents (expected: 10 or 12 documents, according to your script).
   - Validate that queries return the expected results (e.g., filtering books, calculating averages, etc.).

7. **Take a Screenshot:**
   - Use MongoDB Compass or your Atlas dashboard to capture a screenshot of the `books` collection displaying sample data.
   - Save the screenshot as `screenshot.png` in your repository.

8. **Submit the Assignment:**
   - Add all relevant files (`insert_books.js`, `queries.js`, `README.md`, `screenshot.png`) to your repository:
     ```bash
     git add .
     git commit -m "Completed Week 1 MongoDB Assignment"
     git push origin main
     ```
   - Confirm on GitHub that your latest changes are pushed correctly for autograding and instructor review.

## Repository Contents
- **`insert_books.js`**
  - A JavaScript script to insert sample book documents into the `books` collection.
  - Each document includes fields such as `title`, `author`, `genre`, `published_year`, `price`, `in_stock`, `pages`, and `publisher`.
- **`queries.js`**
  - Contains MongoDB operations covering:
    - **CRUD Operations:** Create, Read, Update, and Delete functions.
    - **Advanced Queries:** Filtering, projecting specific fields, sorting, and implementing pagination.
    - **Aggregation Pipelines:** Calculating average price per genre, identifying the most prolific author, and grouping books by publication decade.
    - **Indexing:** Creating indexes and analyzing query performance using the `explain()` method.
- **`README.md`**
  - This file that documents the project setup, usage instructions, and submission details.
- **`screenshot.png`**
  - An image file capturing MongoDB Compass or Atlas displaying the populated `books` collection.

## Running the Scripts

- **Using mongosh:**
  ```bash
  mongosh < insert_books.js
  mongosh < queries.js