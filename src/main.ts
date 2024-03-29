import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger: Logger = new Logger('Server');
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => { logger.log('Start'); });
}
bootstrap();
