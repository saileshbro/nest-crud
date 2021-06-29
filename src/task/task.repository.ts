import { EntityRepository, Repository } from 'typeorm';
import Task from './entities/task.entity';
import TaskDto from './interfaces/task.dto';
@EntityRepository(Task)
export default class TaskRepository extends Repository<Task> {
  async addTask(task: TaskDto): Promise<TaskDto> {
    return await this.save<TaskDto>(task);
  }
  async getTasks(): Promise<TaskDto[]> {
    return this.find();
  }
}
