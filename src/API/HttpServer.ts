import express from "express";
import socketIo from "socket.io";
import compression from "compression";
import bodyParser from "body-parser";
import expressValidator from "express-validator";
import lusca from "lusca";
import path from "path";
import { createServer, Server } from "http";

// Import Routers (route handlers)
import index from "./Routes/Views.routes";
import auth from "./Routes/Authentication.routes";
import user from "./Routes/User.routes";

export class HttpServer {

	private static instance: HttpServer;
	public static readonly PORT: number = 3000;
	private app: express.Application;
	private server: Server;
	private socket: socketIo.Server;
	private options: {
		port: string | number,
		host: string,
		exclusive: boolean,
	};

	constructor() {

		// Create express Application
		this.createApp();

		// Configure Http Server
		this.config();

		// Configure express Routes
		this.configRoutes();

		// Create Http Server using the express application
		this.createServer();

		// Initialize Socket.io
		this.sockets();

		// Configure Sockets
		this.configureSocket();

		// Listen the Http Server
		this.listen();
	}

	static getInstance() {
		if (!HttpServer.instance) {
			HttpServer.instance = new HttpServer();
		}
		return HttpServer.instance;
	}

	private createApp(): void {
		this.app = express();
	}

	private config(): void {

		const options = {
			port: process.env.PORT || HttpServer.PORT,
			host: process.env.HOST || "localhost",
			exclusive: true
		};
		// Set Options server
		this.options = options;

		// Add initial express configuration
		this.app.set("env", (process.env.NODE_ENV === undefined ? "development" : "production"));
		this.app.set("Views", path.join(__dirname, "/views"));
		this.app.set("view engine", "pug");
		this.app.use(compression());
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: true }));
		this.app.use(expressValidator());
		this.app.use(lusca.xframe("SAMEORIGIN"));
		this.app.use(lusca.xssProtection(true));
	}

	private configRoutes(): void {

		const apiV1 = "/api/v1";

		this.app.use("/", index);
		this.app.use(apiV1, auth);
		this.app.use(apiV1 + "/user", user);
	}

	private createServer(): void {
		this.server = createServer(this.app);
	}

	private sockets(): void {
		this.socket = socketIo(this.server);
	}

	private configureSocket(): void {}

	private listen(): void {
		this.server.listen(this.options, () => {
			console.log(
				"   HttpServer is running at http://%s:%d in %s mode",
				this.options.host,
				this.options.port,
				this.app.get("env")
			);
			console.log("   Press CTRL-C to stop\n");
		});
	}

	public getApp(): express.Application {
		return this.app;
	}
}