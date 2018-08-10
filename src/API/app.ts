import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import dotenv from "dotenv";
import expressValidator from "express-validator";
import lusca from "lusca";
import path from "path";
import { ENVIRONMENT } from "./Utils/secrets";

// Import Routers (route handlers)
import index from "./Routes/Views.routes";

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env" });
const environment = ENVIRONMENT;

// Create Express server
const app = express();

// Express configuration
app.set("env", (environment === undefined ? "development" : "production"));
app.set("port", process.env.PORT || 3000);
app.set("Views", path.join(__dirname, "/Views"));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

// API Controllers
app.use("/", index);

export default app;