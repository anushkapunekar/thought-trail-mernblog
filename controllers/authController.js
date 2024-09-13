import User from "../models/usermodels.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res , next ) => {
  const { username, email, password } = req.body;

  // Check for missing fields
  if (!username || !email || !password || username === '' || password === '') {
    next(errorHandler(400, 'all fields are mandatory'));
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists with this email' });
    }

    // Hash password
    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save user to the database
    await newUser.save();
    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
};
};
