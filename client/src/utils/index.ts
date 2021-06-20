export const setLocalStorageGameId = (gameId: string) => {
  return localStorage.setItem(
    process.env.REACT_APP_GAME_ID as string,
    gameId
  );
};

export const getLocalStorageGameId = () => {
  return localStorage.getItem(process.env.REACT_APP_GAME_ID as string);
};