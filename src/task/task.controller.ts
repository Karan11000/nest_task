import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { CreateTeamDto } from './dto/create-team.dto';
import { CreateTeamMemberDto } from './dto/create-team_member.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  
  
  @Post("/team")
  createTeam(@Body() data: CreateTeamDto) {
    return this.taskService.createTeam(data);
  }

  @Post("/team_member")
  createTeamMember(@Body() data: CreateTeamMemberDto) {
    return this.taskService.createTeamMember(data);
  }

  @Post("")
  createTask(@Body() data: CreateTaskDto) {
    return this.taskService.createTask(data);
  }
  @Put("")
  updateTask(@Body() data: UpdateTaskDto) {
    return this.taskService.updateTask(data);
  }


  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
