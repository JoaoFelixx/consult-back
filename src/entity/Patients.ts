import { Entity, PrimaryColumn, Column } from "typeorm"

@Entity('patients')
export class Patients {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  phone_number: string;
}