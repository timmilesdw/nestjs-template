import { ProductsController } from './cats.controllers'
import { Module } from "@nestjs/common"
import { ProductsService } from './cats.service'

@Module({
    controllers: [ProductsController],
    providers: [ProductsService]
})

export class ProductsModule {}