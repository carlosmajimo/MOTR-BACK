import express from "express";
import { HomeController } from "../Controllers/ViewControllers/Home.controller";

const router = express.Router();

/* GET Home view. */
router.get("/", HomeController.get);

export default router;