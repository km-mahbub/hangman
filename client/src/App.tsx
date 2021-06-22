import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import { Game } from "./pages/Game";
import { IStore } from "./types";
import * as gameActions from "./redux/actions/game/actions";
import { ResultWindow } from "./components/resultWindow/ResultWindow";
import { Spinner } from "./components/spinner/Spinner";
import { Notification } from "./components/notification/Notification";

function App() {
  const dispatch = useDispatch();

  const gameState = useSelector((state: IStore) => state.game);

  useEffect(() => {
    dispatch(gameActions.getGameInfo());
  }, [dispatch]);

  let body = null;
  if (gameState.isLoading === true) {
    body = <Spinner loading={gameState.isLoading} />;
  } else {
    if (gameState.game.completed) {
      body = (
        <ResultWindow isWin={gameState.game.isWin} word={gameState.game.word} />
      );
    } else {
      body = <Game />;
    }
  }
  return (
    <Layout>
      {body}
      <Notification />
    </Layout>
  );
}

export default App;
