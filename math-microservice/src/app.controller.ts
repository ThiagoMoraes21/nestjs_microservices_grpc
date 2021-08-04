import { Controller, Logger } from '@nestjs/common';
import { MathService } from './math.service';
import { GrpcMethod } from "@nestjs/microservices";

interface INumberArray {
    data: number[];
}

interface ISumOfNumberArray {
    sum: number;
}

@Controller()
export class AppController {
    private logger = new Logger('AppController');

    constructor(private readonly mathSevice: MathService) { }

    /*
        Hint:
            If the gRPC service name and method are the same
            in the controller you don't need to pass any parameter to the 
            @GrpcMethod(), it will assume as the default names
    */
    @GrpcMethod('AppController', 'Accumulate')
    accumulate(numberArray: INumberArray): ISumOfNumberArray {
        this.logger.log('Adding: ' + numberArray.data.toString());
        return { sum: this.mathSevice.accumulate(numberArray.data) };
    }
}
