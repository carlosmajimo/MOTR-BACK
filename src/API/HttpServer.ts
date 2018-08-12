import express from "express";
import socketIo from "socket.io";
import compression from "compression";
import bodyParser from "body-parser";
import expressValidator from "express-validator";
import lusca from "lusca";
import path from "path";
import { createServer, Server } from "http";
import { ENVIRONMENT } from "./Utils/Secrets";

// Import Routers (route handlers)
import index from "./Routes/Views.routes";

export class HttpServer {

	private static instance: HttpServer;
	public static readonly PORT: number = 3000;
	private app: express.Application;
	private server: Server;
	private socket: socketIo.Server;
	private port: string | number;

	constructor() {

		// Create express Application
		this.createApp();

		// Configure Http Server
		this.config(ENVIRONMENT);

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

	private config(environment: any): void {

		// Set the port server
		this.port = process.env.PORT || HttpServer.PORT;

		// Add initial express configuration
		this.app.set("env", (environment === undefined ? "development" : "production"));
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
		this.app.use("/", index);
	}

	private createServer(): void {
		this.server = createServer(this.app);
	}

	private sockets(): void {
		this.socket = socketIo(this.server);
	}

	private configureSocket(): void {}

	private listen(): void {
		this.server.listen(this.port, () => {
			console.log(
				"   HttpServer is running at http://localhost:%d in %s mode",
				this.port,
				this.app.get("env")
			);
			console.log("   Press CTRL-C to stop\n");
		});
	}

	public getApp(): express.Application {
		return this.app;
	}
}