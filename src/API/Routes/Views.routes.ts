import express from "express";
import { HomeController } from "../Controllers/ViewControllers/HomeController";

const router = express.Router();
const controller = new HomeController();

/* GET Home view. */
router.get("/", controller.get);

export default router;