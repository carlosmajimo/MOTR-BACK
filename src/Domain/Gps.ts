import { Entity, Column, OneToOne } from "typeorm";
import { EntityBase } from "./Abstract/EntityBase";
import { Bus } from "./Bus";
import { Coordinate } from "./ValueObjects/Coordinate";

@Entity({ name: "gps" })
export class Gps extends EntityBase {

	@Column({ name: "imei", type: "varchar", length: 16, unique: true, nullable: false })
	imei: string;

	@Column({ name: "reference", type: "varchar", length: 6, nullable: false })
	reference: string;

	@Column(type => Coordinate)
	coordinate: Coordinate;

	@Column({ name: "last_sent", type: "timestamp", nullable: true })
	lastSet: string;

	@OneToOne( type => Bus, bus => bus.gps)
	bus: Bus;
}