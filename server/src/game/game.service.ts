import { HttpException, HttpService, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './game.entity';
import { Word } from '../shared/interfaces/word.interface';
import { ReturnGameStateDTO, UpdateGameDTO } from './game.dto';
import { arrayFindTarget, isWin } from 'src/shared/utils/arrayUtils';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private gameRepo: Repository<Game>,
    private httpService: HttpService
  ) { }

  getAllGames = async (): Promise<Game[]> => {
    const games = await this.gameRepo.find({});
    return games;
  };

  getGame = async (gameId: string): Promise<Game> => {
    try {
      const game: Game = await this.gameRepo.findOne({ id: gameId });
      return game;
    } catch (error) {
      throw new HttpException('Game not found', HttpStatus.NOT_FOUND);
    }
  };

  getWord = async (): Promise<Word> => {
    const response = await this.httpService.get('https://random-words-api.vercel.app/word').toPromise();
    return response.data[0];
  }

  createGame = async (): Promise<Game> => {
    const newGame = new Game();
    const word: Word = await this.getWord();
    newGame.word = word.word.toUpperCase();
    await newGame.save();

    return newGame;
  };

  updateGameState = async (updateGameDTO: UpdateGameDTO): Promise<Game> => {
    let { gameId, letter } = updateGameDTO;
    const game = await this.getGame(gameId);

    if (!game) throw new HttpException('Game not found', HttpStatus.NOT_FOUND);

    if (game.completed) throw new HttpException('Oops! Game in finished state.', HttpStatus.NOT_ACCEPTABLE);

    letter = letter.toUpperCase();
    const wordLettersArr: string[] = game.word.split("");
    const correctLettersArr: string[] = game.correctLetters.split("");
    const wrongLettersArr: string[] = game.wrongLetters.split("");

    if (arrayFindTarget(correctLettersArr, letter) || arrayFindTarget(wrongLettersArr, letter)) {
      return game;
    } else if (arrayFindTarget(wordLettersArr, letter)) {
      correctLettersArr.push(letter);
      if (isWin(wordLettersArr, correctLettersArr)) {
        game.isWin = true;
        game.completed = true;
      }
      game.correctLetters = correctLettersArr.join('');
      await game.save();
      return game;
    } else {
      wrongLettersArr.push(letter);
      if (wrongLettersArr.length > 5) {
        game.completed = true;
      }
      game.wrongLetters = wrongLettersArr.join('');
      await game.save();
      return game;
    }
  };

  deleteGame = async (gameId: string): Promise<void> => {
    await this.gameRepo.delete(gameId);
  };
}
