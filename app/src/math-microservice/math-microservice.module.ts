import { Module } from '@nestjs/common';
import { MathMicroservice } from './connections/connection.service';
import { MathService } from './math.service';

@Module({
    providers: [
        MathService,
        MathMicroservice
    ],
    exports: [
        MathService
    ]
})
export class MathMicroserviceModule {}
