import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  productid: number;

  @Column({ length: 50 })
  productname: string;

  @Column({ nullable: true })
  supplierid: number;

  @Column({ nullable: true })
  categoryid: number;

  @Column({ length: 25, nullable: true })
  unit: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  price: number;
}
