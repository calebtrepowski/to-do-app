import { ToDo } from './todo.interface';

export interface Folder {
  id?: number;
  name: string;
  todos: ToDo[];
}
