import mysql from "mysql2/promise";

// const connection = await mysql.createConnection({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DB_NAME,
// });

const getConnection = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bhavy@1164",
    database: "todo_app_db",
  });
  console.log("Connected to the database.");
  return connection;
};

export default getConnection;
