import {z} from "zod"
import { createZodDto } from "nestjs-zod";
import { createTaskSchema } from "./create-tasks.dto.js";
export class updatetasksDto  extends createZodDto(
    createTaskSchema.partial()
){}
