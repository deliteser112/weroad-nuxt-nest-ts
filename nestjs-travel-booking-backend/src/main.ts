import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(4000);

  process.on('SIGINT', async () => {
    await app.close();
    process.exit();
  });
}
bootstrap();
