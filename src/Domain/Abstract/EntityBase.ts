import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class EntityBase {

	@PrimaryGeneratedColumn()
	id: number;

	@CreateDateColumn({ name: "created_at", type: "timestamp" })
	createdAt: string;

	@UpdateDateColumn({ name: "updated_at", type: "timestamp" })
	updatedAt: string;

	@Column({ name: "active", default: true })
	isActive: boolean;
}