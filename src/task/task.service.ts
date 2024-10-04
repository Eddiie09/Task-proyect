import { Injectable } from '@nestjs/common';
import { ITask } from './task.interface';  // Corregido a ITask
import { v4 as uuidv4 } from 'uuid';  // Corregido a uuidv4
import { TaskDTO } from './dto/task.dto';

@Injectable()
export class TaskService {
    tasks: ITask[] = [];  // Corregido a plural "tasks" para mayor claridad

    create(taskDTO: TaskDTO): ITask {  // Corregido el nombre a ITask
        const task = {
            id: uuidv4(),  // Corregido uuidv4
            ...taskDTO
        };
        this.tasks.push(task);
        return task;
    }

    findAll(): ITask[] {
        return this.tasks;
    }

    findOne(id: string): ITask {
        return this.tasks.find(tsk => tsk.id === id);
    }

    update(id: string, taskDTO: TaskDTO): ITask {  // Corregido a ITask
        const newTask = { id, ...taskDTO };
        this.tasks = this.tasks.map(tsk => tsk.id === id ? newTask : tsk);
        return newTask;
    }

    delete(id: string): string {
        this.tasks = this.tasks.filter(task => task.id !== id);
        return 'Task deleted';
    }
}

