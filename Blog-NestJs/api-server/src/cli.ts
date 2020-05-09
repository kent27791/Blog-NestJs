import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { CommandModule, CommandService } from 'nestjs-command';
import { MainModule } from './main.module'
 
(async () => {
  const app = await NestFactory.createApplicationContext(MainModule, {
    logger: false // no logger
  });
  console.log('abc')
  app.select(CommandModule).get(CommandService).exec();
})();