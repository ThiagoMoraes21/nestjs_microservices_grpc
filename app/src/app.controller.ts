import { Body, Controller, Inject, Logger, OnModuleInit, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { IGrpcService } from './grpc.interface';


@Controller()
export class AppController implements OnModuleInit {
    private logger = new Logger('AppController');
    private grpcService: IGrpcService;

    constructor(
        @Inject('APP_PACKAGE') private client: ClientGrpc
    ) {}

    onModuleInit() {
        this.grpcService = this.client.getService<IGrpcService>('AppController');
    }

    @Post('add')
    async accumulate(@Body('data') data: number[]) {
        this.logger.log('Adding: ' + data.toString());
        return this.grpcService.accumulate({ data });
    }
}
