import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { FolderEntity } from '../models/folder.entity';
import { Folder } from '../models/folder.interface';

import { ToDoEntity } from '../models/todo.entity';
import { ToDo } from '../models/todo.interface';

@Injectable()
export class ToDoService {
  constructor(
    @InjectRepository(ToDoEntity)
    private readonly ToDoRepository: Repository<ToDoEntity>,
  ) {}

  create(toDo: ToDo): Observable<ToDo> {
    return from(this.ToDoRepository.save(toDo));
  }

  findAll(): Observable<ToDo[]> {
    return from(this.ToDoRepository.find());
  }

  async find(folderId: number): Promise<ToDo[]> {
    const todos = await this.ToDoRepository.createQueryBuilder('todo')
      .where('todo.folderId = :folderId', { folderId: folderId })
      .getMany();

    return todos;
  }

  update(id: number, toDo: ToDo): Observable<UpdateResult> {
    return from(this.ToDoRepository.update(id, toDo));
  }

  delete(id: number): Observable<DeleteResult> {
    return from(this.ToDoRepository.delete(id));
  }
}
