import { 
  Entity, 
  Column, 
  ManyToOne, 
  JoinColumn, 
  PrimaryColumn, 
  CreateDateColumn, 
} from "typeorm"
import { Patients } from './Patients';

@Entity('Consults')
export class Consults {
  @PrimaryColumn()
  id: string;

  @Column()
  patient: string;

  @ManyToOne(() => Patients, {
		onDelete: 'CASCADE'
	})
  @JoinColumn({ name: 'patient' })
	patients: Patients;

  @CreateDateColumn({ type: 'timestamp' })
	createdAt: Date;
}