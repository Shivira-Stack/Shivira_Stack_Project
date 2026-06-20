import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { apihomePage } from './html/api_home.page';

@Controller()
export class AppController {
  @Get()
  getHome(@Res() res: Response) {
    res.type('html').send(apihomePage());
  }
}
