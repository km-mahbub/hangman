import * as types from '../actions/game/types';

import { IGameState, Action } from '../../types';

const initialState: IGameState = {
  game: null as any,
  isLoading: true,
  err: null,
  notification: false
};

export const gameReducer = (
  state = initialState,
  action: Action
): IGameState => {
  switch (action.type) {
    case types.GET_GAME:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_GAME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        game: action.payload,
        err: null
      };
    case types.GET_GAME_FAILED:
      return {
        ...state,
        isLoading: false,
        err: action.payload
      };
    case types.CREATE_GAME:
      return {
        ...state,
        isLoading: true,
      };
    case types.CREATE_GAME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        game: action.payload,
        err: null
      };
    case types.CREATE_GAME_FAILED:
      return {
        ...state,
        isLoading: false,
        err: action.payload
      };
    case types.UPDATE_GAME:
      return {
        ...state,
        isLoading: false,
      };
    case types.UPDATE_GAME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        game: action.payload,
        err: null
      };
    case types.UPDATE_GAME_FAILED:
      return {
        ...state,
        isLoading: false,
        err: action.payload
      };
    case types.SHOW_NOTIFICATION:
      return {
        ...state,
        notification: true
      };
    case types.HIDE_NOTIFICATION:
      return {
        ...state,
        notification: false
      };
    default:
      return state;
  }
};
