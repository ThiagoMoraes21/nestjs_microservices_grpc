import { Body, Controller, Logger, Post } from '@nestjs/common';
import { MathService } from './math-microservice/math.service';

@Controller()
export class AppController {
    private logger = new Logger('AppController');

    constructor(private readonly mathSevice: MathService) { }

    @Post('add')
    async accumulate(@Body('data') data: number[]) {
        this.logger.log('Adding: ', data.toString());
        return this.mathSevice.accumulate(data);
    }
}
