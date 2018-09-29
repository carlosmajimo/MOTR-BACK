import { EntityRepository, AbstractRepository } from "typeorm";
import { User } from "../../Domain/User";

@EntityRepository(User)
export class UserRepository extends AbstractRepository<User> {

	CreateAndSave(user: User) {
		user.encodePassword()
			.then((newPassword: string) => {
				user.password = newPassword;
				return this.manager.save(user);
			})
			.catch(error => {
				console.log( error.message );
			});
	}
}