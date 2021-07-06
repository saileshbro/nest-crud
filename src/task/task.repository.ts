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
  async updateTask(id: number, task: TaskDto): Promise<TaskDto> {
    let taskVal = await this.findOneOrFail(id);
    taskVal = { ...taskVal, ...task };
    return await this.save<TaskDto>(taskVal);
  }
  async deleteTask(id: number): Promise<boolean> {
    const resp = await this.delete(id);
    return resp.affected > 0;
  }
}
