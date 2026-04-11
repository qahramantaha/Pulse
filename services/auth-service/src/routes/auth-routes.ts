import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
    res.status(200).json({
        message: "Register route placeholder"
    });
});

router.post("/login", (req, res) => {
    res.status(200).json({
        message: "Login route placeholder"
    });
});

export default router;