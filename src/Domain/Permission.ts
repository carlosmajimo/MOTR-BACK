import { Entity, Column, ManyToMany } from "typeorm";
import { EntityBase } from "./Abstract/EntityBase";
import { Role } from "./Role";

@Entity({ name: "permission" })
export class Permission extends EntityBase {

	@Column({ name: "name", type: "varchar", length: 20, nullable: false })
	name: string;

	@Column({ name: "description", type: "varchar", length: 50, nullable: true })
	description: string;

	@ManyToMany(type => Role, roles => roles.permissions)
	roles: Role[];
}