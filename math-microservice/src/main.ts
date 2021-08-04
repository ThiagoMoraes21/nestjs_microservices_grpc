import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

// Create a logger instance
const logger = new Logger('Main');

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.GRPC,
        options: {
          package: 'app',
          protoPath: join(__dirname, 'app.proto'),
        },
      });
    await app.listen();
    logger.log('Microservice is listening...');
}
bootstrap();
