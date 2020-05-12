import { Cat } from './cat.module'
import { Injectable, NotFoundException } from '@nestjs/common'


@Injectable()
export class ProductsService {
    private cats: Cat[] = []

    insertProduct(title: string, description: string) {
        const ID = Math.random().toString()
        const newProduct = new Cat(ID, title, description)
        this.cats = [...this.cats, newProduct]
        return ID
    }

    getProducts() {
        return [...this.cats]
    }
    getSingleProduct(name: string) {
        const product = this.cats.find(cat => cat.name === name)
        const error = new NotFoundException()
        const res = product ? product : error
        return res
    }
}