import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}
  findAll() {
    return this.productsRepository.find();
  }
  create(createProductDto: CreateProductDto) {
    const product = this.productsRepository.create(createProductDto);
    return this.productsRepository.save(product);
  }
  findOne(id: number) {
    return this.productsRepository.findOneBy({ productid: id });
  }
  update(id: number, UpdateProductDto: UpdateProductDto) {
    return this.productsRepository.update(id, UpdateProductDto);
  }
  async remove(id: number) {
    await this.productsRepository.delete(id);
  }
}
