import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  title: string;
  @Column({ default: '', length: 255 })
  description: string;
  @Column({ default: false })
  completed: boolean;
}
