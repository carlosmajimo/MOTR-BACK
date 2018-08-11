import { Connection, createConnection } from "typeorm";

export class MotrContext {
	private static instance: MotrContext;
	private connection: Promise<Connection>;

	constructor() {
		this.CreateConnection();
	}

	static getInstance() {
		if (!MotrContext.instance) {
			MotrContext.instance = new MotrContext();
		}
		return MotrContext.instance;
	}

	private CreateConnection() {
		this.connection = createConnection();
	}

	getConnection(): Promise<Connection> {
		return this.connection;
	}
}