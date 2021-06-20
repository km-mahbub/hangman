import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameController } from './game.controller';
import { Game } from './game.entity';
import { GameService } from './game.service';

@Module({
  imports: [TypeOrmModule.forFeature([Game]), HttpModule],
  controllers: [GameController],
  providers: [GameService]
})
export class GameModule { }
