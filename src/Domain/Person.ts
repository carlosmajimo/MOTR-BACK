import { Entity, Column, OneToOne } from "typeorm";
import { EntityBase } from "./Abstract/EntityBase";
import { User } from "./User";
import { Name } from "./ValueObjects/Name";
import { ContactInfo } from "./ValueObjects/ContactInfo";

@Entity({ name: "person" })
export class Person extends EntityBase {

	@Column({ name: "identification", type: "varchar", length: 11, unique: true, nullable: false })
	identification: string;

	@Column(type => Name)
	name: Name;

	@Column(type => ContactInfo)
	contactInfo: ContactInfo;

	@OneToOne( type => User, user => user.person)
	user: User;

	public parseRequest(request: any): void {
		this.identification = request.identification;
		this.name = {
			first: request.firstName,
			last: request.lastName
		};
		this.contactInfo = {
			email: request.email,
			address: request.address,
			phone: request.phone
		};
	}
}