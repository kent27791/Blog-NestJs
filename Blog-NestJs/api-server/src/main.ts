import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import * as helmet from 'helmet';
async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  
  app.use(helmet());

  app.enableCors({
    allowedHeaders: '*',
    methods: '*',
    origin: '*',
  });
  
  await app.listen(process.env.PORT);
}
bootstrap();
