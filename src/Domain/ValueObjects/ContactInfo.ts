import { Column } from "typeorm";

export class ContactInfo {

	@Column({ name: "email", type: "varchar", length: 50, nullable: false })
	email: string;

	@Column({ name: "phone", type: "varchar", length: 10, nullable: true })
	phone: string;

	@Column({ name: "address", type: "varchar", length: 50, nullable: true })
	address: string;

}