import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UpdateGameDTO } from './game.dto';
import { Game } from './game.entity';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) { }

  @Get(':gameId')
  getGame(@Param('gameId') gameId: string): Promise<Game> {
    return this.gameService.getGame(gameId);
  }

  @Post()
  createGame(): Promise<Game> {
    return this.gameService.createGame();
  }

  @Patch()
  updateGame(@Body() updateGameDTO: UpdateGameDTO): Promise<Game> {
    return this.gameService.updateGameState(updateGameDTO);
  }
}
