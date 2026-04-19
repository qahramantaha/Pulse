import { Request, Response } from "express";

export const registerUser = (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Name, email, and password are required"
    });
  }

  if (name.trim() === "") {
    return res.status(400).json({
      message: "Name cannot be empty"
    });
  }

  if (!email.includes("@")) {
    return res.status(400).json({
      message: "Invalid email format"
    });
  }

  if(password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters long"
    });
  }

  res.status(200).json({
    message: "Register request received",
    data: {
      name: name.trim(),
      email
    }
  });
};

export const loginUser = (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required"
    });
  }

  if (!email.includes("@")) {
    return res.status(400).json({
      message: "Invalid email format"
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters long"
    });
  }

  res.status(200).json({
    message: "Login request received",
    data: {
      email
    }
  });
};