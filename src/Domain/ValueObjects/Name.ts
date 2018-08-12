import { Column } from "typeorm";

export class Name {

	@Column({ name: "_first", type: "varchar", length: 20, nullable: false })
	first: string;

	@Column({ name: "_last", type: "varchar", length: 20, nullable: false })
	last: string;

}