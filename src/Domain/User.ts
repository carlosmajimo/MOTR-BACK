import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { EntityBase } from "./Abstract/EntityBase";
import { Person } from "./Person";
import bcrypt from "bcrypt-nodejs";

@Entity({ name: "user" })
export class User extends EntityBase {

	@Column({ name: "password", type: "varchar", length: 250, nullable: false })
	password: string;

	@Column({ name: "last_login", type: "timestamp", nullable: true })
	lastLogin: string;

	@OneToOne( type => Person, person => person.user)
	@JoinColumn()
	person: Person;

	public parseRequest(request: any): void {
		this.password = request.password;
	}

	public encodePassword() {
		return new Promise((resolve, reject) => {
			bcrypt.genSalt(10, (err: any, salt: any) => {
				if (err) reject(err);
				bcrypt.hash(this.password, salt, undefined, (error: any, hash: any) => {
					if (error) reject(error);
					resolve(hash);
				});
			});
		});
	}
}