import { Column } from "typeorm";

export class ContactInfo {

	@Column({ name: "_email", type: "varchar", length: 50, nullable: false })
	email: string;

	@Column({ name: "_phone", type: "varchar", length: 10, nullable: true })
	phone: string;

	@Column({ name: "_address", type: "varchar", length: 50, nullable: true })
	address: string;

}