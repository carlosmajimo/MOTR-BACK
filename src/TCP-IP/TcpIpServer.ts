import { createServer, Server, Socket } from "net";
import { GpsController } from "./Controllers/GpsController";

export class TcpIpServer {
	private static instance: TcpIpServer;
	public static readonly PORT: number = 8005;
	private app: (socket: Socket) => void;
	private server: Server;
	private options: {
		port: string | number,
		host: string,
		exclusive: boolean,
	};

	constructor() {

		// Create App Socket
		this.createApp();

		// Configure TCP-IP Server
		this.config();

		// Create TCP-IP Server using the express application
		this.createServer();

		// Listen the TCP-IP Server
		this.listen();
	}

	static getInstance() {
		if (!TcpIpServer.instance) {
			TcpIpServer.instance = new TcpIpServer();
		}
		return TcpIpServer.instance;
	}

	private createApp(): void {
		this.app = (c) => {
			// 'connection' listener
			console.log("GPS Conectado");

			// Socket Events
			c.on("data", GpsController.data);
			c.on("end", GpsController.disconnect);

			c.pipe(c);
		};
	}

	private config(): void {

		const options = {
			port: process.env.PORT || TcpIpServer.PORT,
			host: process.env.HOST || "localhost",
			exclusive: true
		};
		// Set Options server
		this.options = options;
	}

	private createServer(): void {
		this.server = createServer(this.app);
	}

	private listen(): void {

		this.server.listen(this.options, () => {
			console.log(
				"   TCP-IP Server is running at http://%s:%d",
				this.options.host,
				this.options.port
			);
			console.log("   Press CTRL-C to stop\n");
		});
	}
}