import { Module } from '@nestjs/common'

import { ProductsModule } from './Cats/cats.module'
import { AppService } from './app.service'
import { AppController } from './app.controller'

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
