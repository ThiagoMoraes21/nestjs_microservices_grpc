import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

// Create a logger instance
const logger = new Logger('Main');

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        AppModule,
        {
            transport: Transport.TCP,
            options: {
                host: '127.0.0.1',
                port: 8877,
            }
        },
    );
    await app.listen();
    logger.log('Microservice is listening...');
}
bootstrap();
