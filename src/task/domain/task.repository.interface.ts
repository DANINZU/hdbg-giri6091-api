//! Dealer (contratador de repositorio)
import { Task } from './task.entity';

export interface ITaskRepository {
    create(task: Task): Promise<Task>;
    findAll(): Promise<Task[]>;
    findById(): Promise<Task | null>;
    
}

//Tokern para inyección de dependencias
export const ITaskRepositoryToken = Symbol('ITaskRepository');