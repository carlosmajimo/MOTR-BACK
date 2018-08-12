import { Column } from "typeorm";

export class Coordinate {

	@Column({ name: "_latitude", type: "float", precision: 10, scale: 6, nullable: false })
	lat: number;

	@Column({ name: "_longitude", type: "float", precision: 10, scale: 6, nullable: false })
	long: number;
}