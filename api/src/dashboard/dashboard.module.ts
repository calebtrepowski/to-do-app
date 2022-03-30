import { Module } from '@nestjs/common';
import { DashboardService } from './services/dashboard.service';
import { DashboardController } from './controllers/dashboard.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDoEntity } from './models/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ToDoEntity])],
  providers: [DashboardService],
  controllers: [DashboardController],
})
export class DashboardModule {}
