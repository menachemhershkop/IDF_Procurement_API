import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { ImagesModule } from './images/images.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Items } from './transactions/transactions.entity';
@Module({
  imports: [TransactionsModule, ImagesModule,
     SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootpassword',
      database: 'army',
      models: [Items],
      autoLoadModels: true,
      synchronize: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
