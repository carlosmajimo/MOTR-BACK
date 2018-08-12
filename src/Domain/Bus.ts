import { Entity, Column, OneToOne, JoinColumn } from "typeorm";
import { EntityBase } from "./Abstract/EntityBase";
import { Gps } from "./Gps";

@Entity({ name: "bus" })
export class Bus extends EntityBase {

	@Column({ name: "license", type: "varchar", length: 6, unique: true, nullable: false })
	license: string;

	@Column({ name: "brand", type: "varchar", length: 15, nullable: false })
	brand: string;

	@Column({ name: "model", type: "varchar", length: 4, nullable: false })
	model: string;

	@Column({ name: "capacity", type: "varchar", length: 2, nullable: true })
	capacity: number;

	@OneToOne( type => Gps, gps => gps.bus)
	@JoinColumn()
	gps: Gps;
}