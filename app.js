import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
dotenv.config();

import { createDatabaseIfNotExists, getConnection } from "./db/db_connect.js";
import UserRoutes from "./routes/user.route.js";
import CategoriesRoutes from "./routes/categories.route.js";
import authMiddleware from "./middlewares/auth.middleware.js";

const app = express();
const PORT = 3020;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// creates the database if it does not exists
await createDatabaseIfNotExists();

app.get("/", async (req, res) => {
  res.send("Hello");
});

app.use("/api/user", UserRoutes);
app.use("/api/categories", authMiddleware, CategoriesRoutes);

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});

// const connection = await getConnection();
// const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
// connection.query(query, ["raj", "r@g.com", "123"], (err, results) => {
//   if (err) {
//     console.error("Error inserting data: " + err.stack);
//     return res.status(500).send("Database error");
//   }
//   if (results) res.status(201).send(`User added with ID: `);
// });
