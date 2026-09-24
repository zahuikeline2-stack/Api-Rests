import { Body,Controller,Delete,Get,HttpCode,HttpStatus,Param,Patch,ParseIntPipe,Post,Put,Query } from "@nestjs/common";

import {Session, type UserSession} from "@thallesp/nestjs-better-auth";
import { createTaskDto } from "./dto/create-tasks.dto.js";
import { updatetasksDto } from "./dto/update-task.dto.js";
import { ListTasksQueryDto } from "./dto/list-task.dto.js";
import { TasksService } from "./tasks.service.js";




@Controller("tasks")
export class TasksController{
   constructor(private readonly tasksService: TasksService){}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Session() session : UserSession, @Body() dto: createTaskDto){
        return this.tasksService.create(session.user.id, dto);
    }
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(@Session() session: UserSession,@Query() query :ListTasksQueryDto){
        return this.tasksService.findAll(session.user.id, query)
    }

}
