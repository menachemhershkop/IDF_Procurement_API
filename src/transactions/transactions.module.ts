import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Items } from './transactions.entity';

@Module({
  imports:[SequelizeModule.forFeature([Items])],
  controllers: [TransactionsController],
  providers: [TransactionsService]
})
export class TransactionsModule {}
