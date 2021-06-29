import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const port = config.get<number>('PORT');
  await app.listen(port, () => {
    Logger.log(`Server started at port ${port}`);
  });
}
bootstrap();
