import { Request, Response } from 'express';


export const registerUser = (req: Request, res: Response) => {
    const { name, email } = req.body;

    res.status(200).json({
        message: 'Register request received',
        data: {
            name,
            email,
        }
    });
};

export const loginUser = (req: Request, res: Response) => {
    const { email } = req.body;

    res.status(200).json({
        message: 'Login request received',
        data: {
            email
        }
    });
};