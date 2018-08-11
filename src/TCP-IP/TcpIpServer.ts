import { createServer, Server, Socket } from "net";

export class TcpIpServer {
	private static instance: TcpIpServer;
	public static readonly PORT: number = 8338;
	private app: (socket: Socket) => void;
	private server: Server;
	private port: string | number;

	constructor() {

		// Create server Application
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
			console.log("client connected");
			// console.log(c.eventNames());

			c.on("data", (data) => {
				console.log(data.toString());
			});

			c.on("end", () => {
				console.log("client disconnected");
			});

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