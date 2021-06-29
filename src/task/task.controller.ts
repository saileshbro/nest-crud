import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import TaskDto from './interfaces/task.dto';
import TaskRepository from './task.repository';

@Controller('task')
export class TaskController {
  constructor(
    @InjectRepository(TaskRepository)
    private readonly taskRepository: TaskRepository,
  ) {}
  @Get('/')
  getTasks(): Promise<TaskDto[]> {
    return this.taskRepository.getTasks();
  }
  @Post('/')
  addTask(@Body() task: TaskDto): Promise<TaskDto> {
    return this.taskRepository.addTask(task);
  }
}
