import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  // Get token from headers (Authorization header)
  const token = req.headers["authorization"]?.split(" ")[1].trim(); // Assuming the format "Bearer <token>"

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided, authorization denied",
    });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // Replace with your JWT secret key

    // Attach the user info (if needed) to the request object
    req.user = decoded;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid token, authorization denied" });
  }
};
export default authMiddleware;
