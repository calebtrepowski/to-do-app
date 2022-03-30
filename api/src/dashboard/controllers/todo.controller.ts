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
  constructor(private dashboardService: ToDoService) {}
  @Post()
  create(@Body() todo: ToDo): Observable<ToDo> {
    return this.dashboardService.create(todo);
  }

  @Get()
  findAll() {
    return this.dashboardService.findAll();
  }
  @Get('/fromFolder/:folderId')
  find(@Param('folderId') folderId: number): Promise<ToDo[]> {
    return this.dashboardService.find(folderId);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() todo: ToDo,
  ): Observable<UpdateResult> {
    return this.dashboardService.update(id, todo);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.dashboardService.delete(id);
  }
}
