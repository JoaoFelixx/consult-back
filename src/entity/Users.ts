import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity('users')
export class Users {
	@PrimaryColumn()
	id: string;

	@Column()
	email: string;

	@Column()
	password: string;
}