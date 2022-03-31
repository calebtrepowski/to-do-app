import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ToDoEntity } from './todo.entity';
import { ToDo } from './todo.interface';

@Entity('folders')
export class FolderEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @OneToMany(() => ToDoEntity, (todo: ToDo) => todo.id)
  todos: ToDo[];
}
