import { Sequelize } from "sequelize-typescript";

export class MotrContext {
	private static instance: MotrContext;
	private _sequelize: Sequelize;

	static getInstance() {
		if (!MotrContext.instance) {
			MotrContext.instance = new MotrContext();
		}
		return MotrContext.instance;
	}

	connect() {
		try {
			this._sequelize =  new Sequelize({
				database: process.env["DB_NAME"],
				dialect: process.env["DB_DIALECT"],
				username: process.env["DB_USERNAME"],
				password: process.env["DB_PASSWORD"],
				operatorsAliases: false,
				timezone: "-05:00"
			});
			this.authentication();
		} catch (e) {
			console.log("Error al conectar con MySql", e.message);
		}
	}

	sequelize(): Sequelize  {
		return this._sequelize;
	}

	authentication(): void {
		this._sequelize.authenticate()
			.then(() => {
				console.log("La conexión con MySQL se ha realizado con exito.");
			})
			.catch(err => {
				console.error("Error de conexión:", err);
			}
		);
	}
}