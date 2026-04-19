import { Request, Response } from "express";
import { validateLoginInput, validateRegisterInput } from "../utils/auth-validation";

export const registerUser = (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const validationError = validateRegisterInput(name, email, password);

  if (validationError) {
    return res.status(400).json({
      message: validationError
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

  const validationError = validateLoginInput(email, password);

  if (validationError) {
    return res.status(400).json({
      message: validationError
    });
  }

  res.status(200).json({
    message: "Login request received",
    data: {
      email
    }
  });
};