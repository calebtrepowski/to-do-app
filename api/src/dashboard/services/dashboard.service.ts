import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { ToDoEntity } from '../models/todo.entity';
import { ToDo } from '../models/todo.interface';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(ToDoEntity)
    private readonly dashboardToDoRepository: Repository<ToDoEntity>,
  ) {}

  createToDo(dashboardToDo: ToDo): Observable<ToDo> {
    return from(this.dashboardToDoRepository.save(dashboardToDo));
  }

  findAllToDos(): Observable<ToDo[]> {
    return from(this.dashboardToDoRepository.find());
  }

  updateToDo(id: string, toDo: ToDo): Observable<UpdateResult> {
    return from(this.dashboardToDoRepository.update(id, toDo));
  }

  deleteToDo(id: string): Observable<DeleteResult> {
    return from(this.dashboardToDoRepository.delete(id));
  }
}
