import { Injectable, Inject } from '@nestjs/common';
import { Items } from './transactions.entity';
import { InjectModel } from '@nestjs/sequelize';
import * as fs from 'fs/promises';

@Injectable()
export class TransactionsService {
    constructor(
        @InjectModel(Items)
        private itemsModel: typeof Items
    ){}

 async findAll(): Promise<Items[]> {
    return this.itemsModel.findAll<Items>();
  }
  findOne(name:string): Promise<Items| null> {
    return this.itemsModel.findOne({
      where: {
        name,
      },
    });
  }
  async checkMoney(price:number):Promise <boolean>{
    const file = await fs.readFile('src/transactions/budget.txt', 'utf-8');
    console.log( file);
    const convert= Number(file)
      if (convert > price){
        const newCoust =convert-price;
        fs.writeFile('src/transactions/budget.txt', String(newCoust))
        return true
      }
    return false
  }
async create(item: Items): Promise<void> {
  this.itemsModel.create({name:item.name, type:item.type, quantity:item.quantity, pricePerUnit:item.pricePerUnit});
      }

 async  buyingItem(item:Items, amount:number): Promise<Items | null |undefined>{
    const buyingItem = await this.findOne(item.name);
    if (buyingItem){
    if(amount<buyingItem?.quantity){
      item.quantity -= (buyingItem.quantity- amount);
      buyingItem?.update(item)
      return buyingItem

    }
    else{
      console.log("Not enugh unit for buying");
      
    }
  }
 }
}
