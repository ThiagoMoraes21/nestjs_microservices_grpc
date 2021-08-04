import { Controller, Logger } from '@nestjs/common';
import { MathService } from './math.service';
import { MessagePattern } from "@nestjs/microservices";

@Controller()
export class AppController {
    private logger = new Logger('AppController');

    constructor(private readonly mathSevice: MathService) { }

    @MessagePattern('add')
    async accumulate(data: number[]) {
        this.logger.log('Adding: ' + data.toString());
        return this.mathSevice.accumulate(data);
    }
}
