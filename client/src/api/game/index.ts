import axios from 'axios';
import { IUpdateGameState } from '../../types';

export const getGameById = async (gameId: string) => {
  try {
    const res = await axios({
      method: 'GET',
      url: `/api/game/${gameId}`
    });
    return res;
  } catch (err) {
    throw new Error(err.response?.data.message);
  }
}

export const createGame = async () => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/game',
    });
    return res;
  } catch (err) {
    throw new Error(err.response?.data.message);
  }
}

export const updateGameState = async (updateGame: IUpdateGameState) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: '/api/game',
      data: updateGame
    });
    return res;
  } catch (err) {
    throw new Error(err.response?.data.message);
  }
}

