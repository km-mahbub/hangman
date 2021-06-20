import { IsString, IsNotEmpty, MaxLength, MinLength, IsAlpha } from 'class-validator';
import { Game } from './game.entity';

export class UpdateGameDTO {
  @IsString()
  @IsNotEmpty()
  gameId: string;

  @IsString()
  @MinLength(1)
  @MaxLength(1)
  @IsNotEmpty()
  @IsAlpha()
  letter: string;
}

export class ReturnGameStateDTO {
  id: string;
  word: string;
  correctLetters: string;
  wrongLetters: string;
  isWin: boolean;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}