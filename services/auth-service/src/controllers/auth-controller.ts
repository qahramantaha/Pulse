import { Request, Response } from 'express';

export const registerUser = (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Register route placeholder'
    });
};

export const loginUser = (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Login route placeholder'
    });
};