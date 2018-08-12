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
}