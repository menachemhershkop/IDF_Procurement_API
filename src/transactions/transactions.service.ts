import { Injectable, Inject } from '@nestjs/common';
import { Items } from './transactions.entity';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class TransactionsService {
    constructor(
        @InjectModel(Items)
        private itemsModel: typeof Items
    ){}

 async findAll(): Promise<Items[]> {
    return this.itemsModel.findAll<Items>();
  }
  findOne(id: number): Promise<Items| null> {
    return this.itemsModel.findOne({
      where: {
        id,
      },
    });
  }    
}
