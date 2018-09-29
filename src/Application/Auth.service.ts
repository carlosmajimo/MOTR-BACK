import { MotrContext } from "../Infraestructure/MotrContext";
import { Service } from "./Abstract/Service";
import { Responses } from "../Domain/ValueObjects/Responses";

export class AuthService extends Service {

	constructor(context: MotrContext) {
		super(context);
	}

	signIn(request: any): Promise<Responses> {
		return new Promise(( resolve, reject ) => {
			this.context.getConnection()
				.then(async () => {

				})
				.catch((error) => {
					// Asignamos valores a la respuesta
					reject(new Responses(503, error.message));
				});
		});
	}
}