import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ToDo } from '../models/todo.interface';
import { ToDoService } from '../services/todo.service';

@Controller('todo')
export class ToDoController {
  constructor(private toDoService: ToDoService) {}
  @Post()
  create(@Body() todo: ToDo): Observable<ToDo> {
    return this.toDoService.create(todo);
  }

  @Get()
  findAll() {
    return this.toDoService.findAll();
  }
  @Get('/fromFolder/:folderId')
  find(@Param('folderId') folderId: number): Observable<ToDo[]> {
    return this.toDoService.find(folderId);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() todo: ToDo,
  ): Observable<UpdateResult> {
    return this.toDoService.update(id, todo);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.toDoService.delete(id);
  }
}
