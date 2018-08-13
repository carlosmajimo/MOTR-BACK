import { Entity, Column, ManyToMany, JoinTable } from "typeorm";
import { EntityBase } from "./Abstract/EntityBase";
import { Permission } from "./Permission";

@Entity({ name: "role" })
export class Role extends EntityBase {

	@Column({ name: "name", type: "varchar", length: 20, nullable: false })
	name: string;

	@Column({ name: "description", type: "varchar", length: 50, nullable: true })
	description: string;

	@ManyToMany(type => Permission, permissions => permissions.roles)
	@JoinTable()
	permissions: Permission[];
}