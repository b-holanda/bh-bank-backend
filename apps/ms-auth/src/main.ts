import { NestFactory } from '@nestjs/core';
import { MsAuthModule } from './ms-auth.module.js';

async function bootstrap() {
  const app = await NestFactory.create(MsAuthModule);
  await app.listen(process.env.port ?? 3000);
}
await bootstrap();
