import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column({ nullable: true })
  description?: string;
  @Column({ default: false })
  completed: boolean;
}
