import { MotrContext } from "../Infraestructure/MotrContext";
import { Person } from "../Domain/Person";

export class PersonService {
	private context: MotrContext;

	constructor(context: MotrContext) {
		this.context = context;
	}

	save (person: Person) {
		this.context.getConnection()
			.then(async (connection) => {
				await connection.manager.save(person);
			})
			.catch((error) => {
				console.log("Error: ", error);
			})
		;
	}
}