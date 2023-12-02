import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/tasks')
  getAllTasks(): string[] {
    // return this.appService.getHello();
    return this.appService.getTasks();
  }
}
