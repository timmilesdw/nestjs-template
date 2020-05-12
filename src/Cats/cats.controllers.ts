import { ProductsService } from './cats.service'
import { Controller, Post, Body, Get, Param } from '@nestjs/common'

@Controller('cats')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
    @Post()
    addProduct(@Body('name') name: string, @Body('breed') breed: string) {
        const generatedID = this.productsService.insertProduct(name, breed)
        return { id: generatedID }
    }
    @Get()
    getAll() {
        return this.productsService.getProducts()
    }
    @Get(':name')
    getProduct(@Param('name') name: string) {
        return this.productsService.getSingleProduct(name)
    }
}