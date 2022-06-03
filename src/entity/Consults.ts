import { 
  Entity, 
  Column, 
  ManyToOne, 
  JoinColumn, 
  PrimaryColumn,  
} from "typeorm"
import { Patients } from './Patients';

@Entity('Consults')
export class Consults {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'timestamp' })
	createdAt: Date;

  @Column()
  patient_id: string;

  @ManyToOne(() => Patients, {
		onDelete: 'CASCADE'
	})
  @JoinColumn({ name: 'patient_id' })
	patients: Patients;
}