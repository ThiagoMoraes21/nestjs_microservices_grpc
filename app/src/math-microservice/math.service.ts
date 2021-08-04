import { ClientProxy } from "@nestjs/microservices";
import { Logger } from "@nestjs/common";
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MathMicroservice } from './connections/connection.service';

@Injectable()
export class MathService {
    private client: ClientProxy;
    private logger = new Logger('MathService');

    constructor(private mathMicroservice: MathMicroservice) {
        this.client = mathMicroservice.connect();
    }

    public accumulate(data: number[]): Observable<number> {
        this.logger.log('[accumulate] - ' + data);

        // .send<ReturnType, ParamType>(pattern, param)
        return this.client.send<number, number[]>('add', data);
    }
}