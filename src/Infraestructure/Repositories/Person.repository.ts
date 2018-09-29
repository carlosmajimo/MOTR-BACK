import { EntityRepository, AbstractRepository } from "typeorm";
import { Person } from "../../Domain/Person";

@EntityRepository(Person)
export class PersonRepository extends AbstractRepository<Person> {

	CreateAndSave(person: Person) {
		return this.manager.save(person);
	}

	FindOne(identification: string) {
		return this.repository.findOne({identification});
	}
}