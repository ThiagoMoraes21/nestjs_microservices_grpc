import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppController } from './app.controller';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'APP_PACKAGE',
                transport: Transport.GRPC,
                options: {
                    package: 'app',
                    protoPath: join(__dirname, 'app.proto'),
                },
            },
        ]),
    ],
    controllers: [AppController],
})
export class AppModule { }
