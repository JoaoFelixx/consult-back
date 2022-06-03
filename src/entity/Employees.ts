import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity('employees')
export class Employees {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string

  @Column()
  password: string;
}