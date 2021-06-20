export type Game = {
  id: string;
  word: string;
  correctLetters: string;
  wrongLetters: string;
  isWin: boolean;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Action = {
  type: string;
  payload: any;
};

export interface IStore {
  game: IGameState;
}


export interface IGameState {
  game: Game;
  isLoading: boolean;
  err: any;
}

export interface IUpdateGameState {
  gameId: string;
  letter: string;
}