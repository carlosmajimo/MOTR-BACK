import express from "express";
import { AuthController } from "../Controllers/AuthController";

const router = express.Router();

router.get("/login", AuthController.logIn);

export default router;