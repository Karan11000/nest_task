import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { CreateTeamDto } from './dto/create-team.dto';
import { CreateTeamMemberDto } from './dto/create-team_member.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { Team } from './entities/team.entity';
import { TeamMember } from './entities/team_member.entity';
import { Repository, Not } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    @InjectRepository(Team)

    private teamRepository: Repository<Team>,
    @InjectRepository(TeamMember)
    private teamMemberRepository: Repository<TeamMember>,
  ) {}
  async createTeam(data: CreateTeamDto) {
    try{
      const duplicated =  await this.teamRepository.findOne({where:{teamName:data.teamName}});
      if(!duplicated){
          const res = await this.teamRepository.save(data);
          return {data:res, "message":"success"};
      }else{
        return "Team already exits"
      }
    }catch(err){
      console.log(err);
      return err;
    }
  }

  async createTeamMember(data: CreateTeamMemberDto) {
    try{
      const duplicated =  await this.teamMemberRepository.findOne({where:{employeId:data.employeId}});
      const isteam = await this.teamRepository.findOne({where:{teamName:data.team}});
      if(!isteam){
        return "Team Does Not exit"
      }
      if(!duplicated){
          const res = await this.teamMemberRepository.save(data);
          return {data:res, "message":"success"};
      }else{
        return "Member Already Exits"
      }
    }catch(err){
      console.log(err);
      return err;
    }
  }
  async createTask(data: CreateTaskDto) {
    try{
      const duplicated =  await this.taskRepository.findOne({where:{taskId:data.taskId}});
      if(!duplicated){
          const res = await this.taskRepository.save(data);
          return {data:res, "message":"success"};
      }else{
        return "Task Already Exits"
      }
    }catch(err){
      console.log(err);
      return err;
    }
  }

  async updateTask(data:UpdateTaskDto){
    try{
      const duplicated =  await this.taskRepository.findOne({where:{id:data.id}});
      if(!duplicated){
          return "Task Does not exit";
      }else{
        const res = await this.taskRepository.update(data.id, data)
        return {data:res, "message":"success"};
      }
    }catch(err){
      console.log(err);
      return err;
    }
  }

  async findAll() {
    try{
      const res = await this.taskRepository.find({where:{assignee:Not("")}});
      return {data:res, "message" :"success"}
    }catch(err){
      return err;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
