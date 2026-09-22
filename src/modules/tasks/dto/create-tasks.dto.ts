import {z} from"zod";
import { createZodDto } from "nestjs-zod";
import { title } from "process";
import { Priority } from "../../../generated/prisma/enums.js";
export const prioritySchema =z.enum(["low","medium","high"]);

export const createTaskSheme=z.object({
    title:z.string().trim().min(1), description:z.string().optional(),
    priority:prioritySchema,

})
