import { getConnection } from "../db/db_connect.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// function checks if email already exists or not in database
const checkIfEmailExists = async (email) => {
  const connection = await getConnection();

  const query = `SELECT COUNT(*) AS count FROM users WHERE email = ?`;

  const [rows] = await connection.query(query, [email]);
  connection.end();

  if (rows[0]["count"] > 0) {
    return true;
  } else {
    return false;
  }
};

// function registers new user
const handleUserRegistration = async (user) => {
  const connection = await getConnection();

  const createTableQuery = `CREATE TABLE IF NOT EXISTS users(
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`;

  await connection.query(createTableQuery);

  const insertQuery = `INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`;
  const [result] = await connection.query(insertQuery, [
    user.first_name,
    user.last_name,
    user.email,
    user.password,
  ]);

  connection.end();
  return result;
};

// Encrypt password using bcrypt
const handlePasswordEncryption = async (password) => {
  try {
    const salt = 10; // Cost factor for hashing (higher = more secure but slower)
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("Encrypted Password:", hashedPassword);

    return hashedPassword;
  } catch (error) {
    console.error("Error encrypting password:", error);
    throw error;
  }
};

// get user password by email
const handleGetUserPasswordByEmail = async (email) => {
  const connection = await getConnection();

  const query = `SELECT password FROM users WHERE email = ?`;

  const [rows] = await connection.query(query, [email]);

  connection.end();

  return rows[0]["password"];
};

// matching plain password and hashed password using bcrypt
const handleMatchPassword = async (plainPassword, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    console.log("Password match:", isMatch);
    return isMatch;
  } catch (error) {
    console.error("Error comparing passwords:", error);
    throw error;
  }
};

// get user info
const handleGetUserInfoByEmail = async (email) => {
  const connection = await getConnection();
  const query = `SELECT id, first_name, last_name, email FROM users WHERE email = ?`;

  const [rows] = await connection.query(query, [email]);

  connection.end();

  return rows[0];
};

// generating JSON web token
const handleGenerateJsobWebToken = (user) => {
  const payload = { ...user }; // Payload for generating secret token
  const options = { expiresIn: "1h", issuer: "todo-app" }; // token lasts for 1 hour only

  // generate token
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, options);

  return token;
};
export {
  checkIfEmailExists,
  handleUserRegistration,
  handlePasswordEncryption,
  handleGetUserPasswordByEmail,
  handleMatchPassword,
  handleGetUserInfoByEmail,
  handleGenerateJsobWebToken,
};
