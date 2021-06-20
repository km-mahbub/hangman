import * as types from './types';
import { Dispatch } from "react";

import * as gameAPI from '../../../api/game';
import * as utils from '../../../utils';
import { IUpdateGameState } from '../../../types';

const createGame = () => {
  return {
    type: types.CREATE_GAME
  };
};

const getGame = () => {
  return {
    type: types.GET_GAME
  };
};

const updateGame = () => {
  return {
    type: types.UPDATE_GAME
  };
};


const createGameSuccess = (data: any) => {
  return {
    type: types.CREATE_GAME_SUCCESS,
    payload: data
  };
};

const getGameSuccess = (data: any) => {
  return {
    type: types.GET_GAME_SUCCESS,
    payload: data
  };
};

const updateGameSuccess = (data: any) => {
  return {
    type: types.UPDATE_GAME_SUCCESS,
    payload: data
  };
};

const catchCreateGameErr = (err: any) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: types.CREATE_GAME_FAILED,
    payload: err.message
  });
};

// const catchGetGameErr = (err: any) => (dispatch: Dispatch<any>) => {
//   dispatch({
//     type: types.GET_GAME_FAILED,
//     payload: err.message
//   });
// };

const catchUpdateGameErr = (err: any) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: types.UPDATE_GAME_FAILED,
    payload: err.message
  });
};

export const newGame = () => async (
  dispatch: Dispatch<any>
) => {
  try {
    dispatch(createGame());
    const res = await gameAPI.createGame();
    utils.setLocalStorageGameId(res.data.id)
    dispatch(createGameSuccess(res.data));
  } catch (err) {
    dispatch(catchCreateGameErr(err));
  }
};

export const getGameInfo = () => async (dispatch: Dispatch<any>) => {
  const gameId = utils.getLocalStorageGameId();

  if (gameId) {
    try {
      dispatch(getGame());
      const res = await gameAPI.getGameById(gameId);
      dispatch(getGameSuccess(res.data));
    } catch (err) {
      dispatch(newGame());
    }
  } else {
    dispatch(newGame());
  }
}

export const updateGameState = (updateGameState: IUpdateGameState) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(updateGame());
    const res = await gameAPI.updateGameState(updateGameState);
    dispatch(updateGameSuccess(res.data));
  } catch (err) {
    dispatch(catchUpdateGameErr(err));
  }
}