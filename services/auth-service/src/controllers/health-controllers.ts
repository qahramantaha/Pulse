import { Request, Response } from "express";

export const getHealth = (req: Request, res: Response) => {
    res.status(200).json({
        service: 'Auth Service',
        status: 'healthy',
        timestamp: new Date().toISOString()
    });
};