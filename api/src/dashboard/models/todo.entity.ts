import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dashboard_todo')
export class ToDoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  body: string;

  @Column({ type: 'boolean', default: () => 'false' })
  completed: boolean;
}
