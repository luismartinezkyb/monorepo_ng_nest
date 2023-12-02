import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  tasks: string[] = [
    'Salir con amigos',
    'Compras en el Super',
    'Empezar curso de programación',
    'Seguir Leyendo A Harry Potter',
    'Ir al Gimnasio',
  ];
  getTasks(): string[] {
    // return this.bd.findAllTasks();

    return this.tasks;
  }
}
