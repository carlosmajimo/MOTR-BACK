import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { EntityBase } from "./Abstract/EntityBase";
import { Person } from "./Person";

@Entity({ name: "user" })
export class User extends EntityBase {

	@Column({ name: "password", type: "varchar", length: 250, nullable: false })
	password: string;

	@Column({ name: "last_login", type: "timestamp", nullable: true })
	lastLogin: string;

	@OneToOne( type => Person, person => person.user)
	@JoinColumn()
	person: Person;
}