import express from "express";
import compression from "compression";  // compresses requests
import bodyParser from "body-parser";
import expressValidator from "express-validator";
import flash from "express-flash";
import lusca from "lusca";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

export default app;