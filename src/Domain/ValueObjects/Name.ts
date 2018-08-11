import { Column } from "typeorm";

export class Name {

	@Column({ name: "first_name", type: "varchar", length: 20, nullable: false })
	first: string;

	@Column({ name: "last_name", type: "varchar", length: 20, nullable: false })
	last: string;

}