import { Connection, createConnection } from "typeorm";

export class MotrContext {
	private static instance: MotrContext;
	private connection: Promise<Connection>;

	constructor() {
		this.connection = createConnection();
	}

	static getInstance() {
		if (!MotrContext.instance) {
			MotrContext.instance = new MotrContext();
		}
		return MotrContext.instance;
	}

	getConnection(): Promise<Connection> {
		return this.connection;
	}
}