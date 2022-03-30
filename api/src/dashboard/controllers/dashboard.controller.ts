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
import { DashboardService } from '../services/dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}
  @Post()
  create(@Body() todo: ToDo): Observable<ToDo> {
    return this.dashboardService.createToDo(todo);
  }

  @Get()
  findAll() {
    return this.dashboardService.findAllToDos();
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() todo: ToDo,
  ): Observable<UpdateResult> {
    return this.dashboardService.updateToDo(id, todo);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<DeleteResult> {
    return this.dashboardService.deleteToDo(id);
  }
}
