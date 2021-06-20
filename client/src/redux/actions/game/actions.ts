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
  console.log(err);
};

const catchGetGameErr = (err: any) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: types.GET_GAME_FAILED,
    payload: err.message
  });
  console.log(err);
};

const catchUpdateGameErr = (err: any) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: types.UPDATE_GAME_FAILED,
    payload: err.message
  });
  console.log(err);
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
  console.log(gameId);

  if (gameId) {
    try {
      dispatch(getGame());
      const res = await gameAPI.getGameById(gameId);
      console.log(res.data);
      dispatch(getGameSuccess(res.data));
    } catch (err) {
      dispatch(catchGetGameErr(err));
    }
  } else {
    try {
      dispatch(createGame());
      const res = await gameAPI.createGame();
      utils.setLocalStorageGameId(res.data.id);
      dispatch(createGameSuccess(res.data));
    } catch (err) {
      dispatch(catchCreateGameErr(err));
    }
  }
}

export const updateGameState = (updateGameState: IUpdateGameState) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(updateGame());
    const res = await gameAPI.updateGameState(updateGameState);
    console.log(res.data);
    dispatch(updateGameSuccess(res.data));
  } catch (err) {
    dispatch(catchUpdateGameErr(err));
  }
}