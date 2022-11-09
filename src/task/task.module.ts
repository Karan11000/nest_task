import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Team } from './entities/team.entity';
import { TeamMember } from './entities/team_member.entity';
@Module({
  imports:[TypeOrmModule.forFeature([Task, TeamMember, Team])],
  controllers: [TaskController],
  providers: [TaskService],
  exports:[TypeOrmModule]
})
export class TaskModule {}
