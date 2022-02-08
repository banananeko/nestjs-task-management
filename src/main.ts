import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // Whenever nestjs encounters
  // any of the validation decorators (e.g. @IsNotEmpty in create-task.dto.ts),
  // it will execute validation pipes. This saves us time and code in the controller level.
  await app.listen(3000);
}
bootstrap();
