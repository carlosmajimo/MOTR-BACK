import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class EntityBase {

	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn({ name: "created_at", type: "datetime" })
	createdAt: Date;

	@UpdateDateColumn({ name: "updated_at", type: "datetime" })
	updatedAt: Date;

	@Column({ name: "active", default: true })
	isActive: boolean;

}