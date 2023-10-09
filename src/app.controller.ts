import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('contract-address')
  getContractAddress(): string {
    return this.appService.getContractAddress();
  }

  @Get('get-hello')
  async getHello(@Query('name') name: string): Promise<string> {
    return await this.appService.getHello(name);
  }

  @Get('view-events')
  async viewEvents(): Promise<Array<any>> {
    return await this.appService.viewEvents();
  }
}
