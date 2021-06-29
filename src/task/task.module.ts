import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import TaskRepository from './task.repository';
import Task from './entities/task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, TaskRepository])],
  controllers: [TaskController],
})
export class TaskModule {}
