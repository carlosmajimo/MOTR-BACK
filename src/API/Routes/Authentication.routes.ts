import express from "express";
import { AuthController } from "../Controllers/Auth.controller";

const router = express.Router();

router.post("/signin", AuthController.SignIn);

export default router;