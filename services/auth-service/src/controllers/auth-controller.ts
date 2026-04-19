import { Request, Response } from "express";
import { validateLoginInput, validateRegisterInput } from "../utils/auth-validation";
import { createLoginResponse, createRegisterResponse } from "../services/auth-service";

export const registerUser = (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const validationError = validateRegisterInput(name, email, password);

  if (validationError) {
    return res.status(400).json({
      message: validationError
    });
  }

  const response = createRegisterResponse(name, email);

    return res.status(201).json(response);
};

export const loginUser = (req: Request, res: Response) => {
    const { email, password } = req.body;

    const validationError = validateLoginInput(email, password);

    if (validationError) {
        return res.status(400).json({
            message: validationError
        });
    }

    const response = createLoginResponse(email);

    return res.status(200).json(response);
};