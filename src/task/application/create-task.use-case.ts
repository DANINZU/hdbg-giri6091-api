//Capaa de aplicacion (Caso de uso)
import { Inject, Injectable } from '@nestjs/common';
import type { ITaskRepository } from '../domain/task.repository.interface';
import { ITaskRepositoryToken } from '../domain/task.repository.interface';

@Injectable()
export class CreateTaskUseCase {
    constructor(
        @Inject(ITaskRepositoryToken)
        private readonly taskRepository: ITaskRepository,
    ) {}
}

//! git commit -m "init: proyecto inicial y infraestrucutura limpia en el caso de uso task"