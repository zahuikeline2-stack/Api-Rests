import {z} from"zod";
import { createZodDto } from "nestjs-zod";
import { prioritySchema } from "./create-tasks.dto.js";
export class ListTasksQueryDto extends createZodDto(
    z.object({
        completed:z.enum(["true","false"]).transform((v)=>v==="true").optional(),
        Priority:prioritySchema.optional
    })
){}