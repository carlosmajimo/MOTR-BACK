import { getCustomRepository } from "typeorm";
import { Responses } from "../Domain/ValueObjects/Responses";
import { MotrContext } from "../Infraestructure/MotrContext";
import { UserRepository } from "../Infraestructure/Repositories/User.repository";
import { PersonRepository } from "../Infraestructure/Repositories/Person.repository";
import { User } from "../Domain/User";
import { Person } from "../Domain/Person";
import { Service } from "./Abstract/Service";

export class UserService extends Service {

	constructor(context: MotrContext) {
		super(context);
	}

	save(request: any): Promise<Responses> {
		return new Promise(( resolve, reject ) => {
			this.context.getConnection()
				.then(async () => {
					try {
						// Instanciamos los modelos
						const person = new Person();
						const user = new User();
						// Instanciamos los repositorios
						const personRepo = getCustomRepository(PersonRepository);
						const userRepo = getCustomRepository(UserRepository);

						// Asignamos valores
						person.parseRequest(request);
						user.parseRequest(request);

						// Guardamos la persona
						await personRepo.CreateAndSave(person);
						// Asignamos la persona al usuario para que se asigne la llave foranea
						user.person = person;
						// Guardamos al usuario
						await userRepo.CreateAndSave(user);

						// Asignamos valores a la respuesta
						resolve(new Responses(201, "Usuario creado con exito"));
					} catch (error) {
						// Asignamos valores a la respuesta
						reject(new Responses(409, error.code));
					}
				})
				.catch((error) => {
					// Asignamos valores a la respuesta
					reject(new Responses(503, error.message));
				})
			;
		});
	}
}