import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { FolderEntity } from './folder.entity';
import { Folder } from './folder.interface';

@Entity('todos')
export class ToDoEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  body: string;

  @Column({ type: 'boolean', default: () => 'false' })
  completed: boolean;

  @ManyToOne(() => FolderEntity, (folder: Folder) => folder.todos)
  @JoinColumn({ name: 'folderId' })
  folder: Folder;
}
