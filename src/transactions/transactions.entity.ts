
import { Table, Column, Model, AllowNull } from 'sequelize-typescript';

@Table
export class Items extends Model {
  @Column({allowNull:false})
  name: string;

  @Column
  
  type: number;

  @Column
  quantity: number;

  @Column
  pricePerUnit: number

  @Column({defaultValue: false})
  hasImage: boolean
}
