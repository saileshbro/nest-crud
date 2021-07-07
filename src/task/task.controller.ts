import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import TaskDto from './interfaces/task.dto';
import TaskRepository from './task.repository';

@Controller('tasks')
@ApiTags('tasks')
export class TaskController {
  constructor(
    @InjectRepository(TaskRepository)
    private readonly taskRepository: TaskRepository,
  ) {}
  @Get('/')
  async getTasks(): Promise<{ tasks: TaskDto[] }> {
    const tasks = await this.taskRepository.getTasks();
    return { tasks };
  }
  @Post('/')
  addTask(@Body() task: TaskDto): Promise<TaskDto> {
    return this.taskRepository.addTask(task);
  }
  @Patch('/:id')
  updateTask(@Param('id') id: number, @Body() task: TaskDto) {
    return this.taskRepository.updateTask(id, task);
  }
  @Delete('/:id')
  deleteTask(@Param('id') id: number) {
    return this.taskRepository.deleteTask(id);
  }
}
