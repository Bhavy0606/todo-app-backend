import {
  checkIfEmailExists,
  handleUserRegistration,
  handlePasswordEncryption,
  handleGetUserPasswordByEmail,
  handleMatchPassword,
  handleGetUserInfoByEmail,
  handleGenerateJsobWebToken,
} from "../services/user.service.js";

const createUserAccount = async (req, res) => {
  const { first_name, last_name, email, password, confirm_password } = req.body;

  //   checks if password and confirm password field match
  if (password.trim() !== confirm_password.trim()) {
    return res.status(400).json({
      success: false,
      message: "Passwords do not match. Please try again.",
    });
  }

  //   check if email is not empty
  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required. Please enter email.",
    });
  }

  // check if email already exists or not
  const isEmailExists = await checkIfEmailExists(email);

  //   if email is already registered
  if (isEmailExists) {
    return res.status(400).json({
      success: false,
      message: "Email already exists. Please login.",
    });
  }

  //   if email not registered
  if (!isEmailExists) {
    // encrypt password using bcrypt
    const hashedPassword = await handlePasswordEncryption(password);

    // user object
    const user = { first_name, last_name, email, password: hashedPassword };

    // saving user object data to database
    const result = await handleUserRegistration(user);

    // if unable to save data
    if (result.affectedRows === 0) {
      res.status(400).json({
        success: false,
        message: "Bad request",
      });
    }
    // if successfully saved data
    if (result.affectedRows > 0) {
      res.status(200).json({
        success: true,
        message: "user registered successfully",
      });
    }
  }
};

const loginIntoUserAccount = async (req, res) => {
  // email & password from request
  const { email, password } = req.body;

  // check if email exists or not
  const isEmailExists = await checkIfEmailExists(email);

  // if email does not exists
  if (!isEmailExists) {
    res.status(404).json({
      success: false,
      message: "Email does not exists.",
    });
  }
  // if email exists then proceed for user authentication
  if (isEmailExists) {
    // get user's password from db by email
    const hashedPassword = await handleGetUserPasswordByEmail(email);

    // comparing plain password from request and hashed password from db
    const isPasswordMatched = await handleMatchPassword(
      password,
      hashedPassword
    );

    // if passwords fail to match
    if (!isPasswordMatched) {
      res.status(401).json({
        success: false,
        message: "Invalid Credentials.",
      });
    }

    // if passwords matched then successfully authenticated -> generate jsobweb token
    if (isPasswordMatched) {
      // getting user info for generating jsow web token
      const user = await handleGetUserInfoByEmail(email);

      // generating json web token
      const token = handleGenerateJsobWebToken(user);

      res.status(200).json({
        success: true,
        message: "Authenticated successfully.",
        token,
      });
    }
  }
};

export { createUserAccount, loginIntoUserAccount };
