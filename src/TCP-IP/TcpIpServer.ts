import { createServer, Server, Socket } from "net";
import { GpsController } from "./Controllers/GpsController";

export class TcpIpServer {
	private static instance: TcpIpServer;
	public static readonly PORT: number = 8338;
	private app: (socket: Socket) => void;
	private server: Server;
	private port: string | number;

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
		// Set the port server
		this.port = process.env.PORT || TcpIpServer.PORT;
	}

	private createServer(): void {
		this.server = createServer(this.app);
	}

	private listen(): void {
		this.server.listen(this.port, () => {
			console.log(
				"   TCP-IP Server is running at http://localhost:%d",
				this.port
			);
			console.log("   Press CTRL-C to stop\n");
		});
	}
}