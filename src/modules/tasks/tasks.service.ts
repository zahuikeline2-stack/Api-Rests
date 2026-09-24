import { Injectable, NotFoundException } from '@nestjs/common';
import { createTaskDto } from './dto/create-tasks.dto.js';
import { updatetasksDto } from './dto/update-task.dto.js';
import { ListTasksQueryDto } from './dto/list-task.dto.js';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class TasksService {
    constructor (private readonly prisma:PrismaService){}


    create (userId: string, dto:createTaskDto){
    return this.prisma.task.create({ data: {...dto, userId}})
}
findAll(userId: string,filters:ListTasksQueryDto){
    return this.prisma.task.findMany({
        where :{userId,...filters},
        orderBy:{createdAt:'desc'}
    })
}
 async findOne(userId: string, id: string){
   const task = await this.prisma.task.findFirst({
    where:{id,userId}
});
   if (!task) throw new NotFoundException (`la tache $ {id} n' existe pas`);
   return task
 }
 async update (userId : string , id:string,dto:updatetasksDto){
    await this.findOne(userId,id)//vérification
    return this.prisma.task.update({
        where:{id},
        data:dto
    })
 }
 async complet(userId :string, id:string){
    await this.findOne(userId,id);
    return this.prisma.task.update({
        where :{id},
        data :{completed:true}
    })
 }
 async remove(userId :string,id:string){
    await this.findOne(userId,id);
    await this.prisma.task.delete({
        where:{id}
    });
 }
}
