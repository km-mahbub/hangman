import * as types from '../actions/game/types';

import { IGameState, Action } from '../../types';

const initialState: IGameState = {
  game: null as any,
  isLoading: true,
  err: null
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
      console.log(`Game Reducer: ${JSON.stringify(action.payload)}`)
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
        err: action.payload.err
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
        err: action.payload.err
      };
    case types.UPDATE_GAME:
      return {
        ...state,
        isLoading: true,
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
        err: action.payload.err
      };
    default:
      return state;
  }
};
