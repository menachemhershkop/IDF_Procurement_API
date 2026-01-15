import { Controller, Get, Post, Body, Param, Put, Delete, Request} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Items } from './transactions.entity';

@Controller('transactions')
export class TransactionsController {
    constructor(private readonly transactions: TransactionsService){}
    @Get()
    gatAll(){
    return this.transactions.findAll()
    }
    @Get(':name')
        findShift(@Param('name') name: string) {
            return this.transactions.findOne(name);
        }

    @Post()
    async buy(@Body() items:Items[]){
        let coust:number = 0;
        for (let index = 0; index < items.length; index++) {
            if (this.transactions.findOne(items[index])) {
                
                    coust += items.pricePerUnit * items.quantity;
                
                if(await this.transactions.checkMoney(coust)){
                    this.transactions.buyingItem(items, items.quantity)
                    console.log('Buying success');
                    
                }
                
            }
            else{
            this.transactions.create(items[index])
            }
        }
        

}
}
