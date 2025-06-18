import express from "express";

// ----- Database Connection Setup -----
// Replace this dummy connection with your actual database connection code
// Example using MongoDB:
// import mongoose from "mongoose";
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Database connection error:", err));

// For now we'll simulate a database with an array of books.
const books = [
  { id: 1, title: "Introduction to React" },
  { id: 2, title: "Learning TypeScript" },
  { id: 3, title: "Exploring Vite" },
  { id: 4, title: "Advanced Node.js" },
];

const app = express();
const port = process.env.PORT || 3000;

// Search endpoint
app.get("/search", (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: "Query parameter 'q' is required" });
  }
  const lowerQuery = query.toString().toLowerCase();
  const results = books.filter((book) =>
    book.title.toLowerCase().includes(lowerQuery)
  );
  res.json(results);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});