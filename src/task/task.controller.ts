import { Controller, Param, Body, Post, Get, Put, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDTO } from './dto/task.dto'; // Corrección del nombre de archivo

@Controller('/api/task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Post()
    create(@Body() taskDTO: TaskDTO) {  // Corrección de nombres y uso de decorador @Body
        return this.taskService.create(taskDTO);
    }

    @Get()
    findAll() {
        return this.taskService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.taskService.findOne(id);  // Corregido el acceso al método
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() taskDTO: TaskDTO) {  // Faltaba el paréntesis de cierre
        return this.taskService.update(id, taskDTO);  // Corrección del nombre y parámetro
    }

    @Delete(':id')
    delete(@Param('id') id: string) {  // Corrección del decorador y parámetros
        return this.taskService.delete(id);
    }
}

