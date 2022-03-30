import { Folder } from './folder.interface';

export interface ToDo {
  id?: number;
  completed?: boolean;
  body: string;
  folder: Folder;
}
