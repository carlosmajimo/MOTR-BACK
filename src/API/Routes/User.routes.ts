import express from "express";
import { UserController } from "../Controllers/User.controller";

const router = express.Router();

router.post("/", UserController.create);

export default router;