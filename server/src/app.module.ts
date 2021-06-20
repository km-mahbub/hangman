import { Module } from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeorm.config';
import { GameModule } from './game/game.module';
import { HttpErrorFilter } from './shared/http-error.filter';
import { ValidationPipe } from './shared/validation.pipe';
@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), GameModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    }
  ],
})
export class AppModule { }
