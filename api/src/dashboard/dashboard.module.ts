import { Module } from '@nestjs/common';
import { ToDoService } from './services/todo.service';
import { ToDoController } from './controllers/todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoEntity } from './models/todo.entity';
import { FolderEntity } from './models/folder.entity';
import { FolderService } from './services/folder.service';
import { FolderController } from './controllers/folder.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ToDoEntity, FolderEntity])],
  providers: [ToDoService, FolderService],
  controllers: [ToDoController, FolderController],
})
export class DashboardModule {}
