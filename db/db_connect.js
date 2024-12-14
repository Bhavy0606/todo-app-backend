import mysql from "mysql2/promise";

export const createDatabaseIfNotExists = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bhavy@1164",
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS todo_app_db`);
  console.log("Database checked/created.");
  connection.end();
};

export const getConnection = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bhavy@1164",
    database: "todo_app_db",
  });
  console.log("Connected to the database.");
  return connection;
};
