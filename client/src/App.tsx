import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import { Loader } from "./components/loader/Loader";
import { Game } from "./pages/Game";
import { IStore } from "./types";
import * as gameActions from "./redux/actions/game/actions";
import { ResultWindow } from "./components/resultWindow/ResultWindow";

function App() {
  const dispatch = useDispatch();

  const gameState = useSelector((state: IStore) => state.game);

  useEffect(() => {
    dispatch(gameActions.getGameInfo());
  }, [dispatch]);

  let body = null;
  if (gameState.game === null) {
    body = <div style={{ backgroundColor: "#22a892" }}>Loading...</div>;
  } else {
    if (gameState.game.completed) {
      body = (
        <ResultWindow isWin={gameState.game.isWin} word={gameState.game.word} />
      );
    } else {
      body = <Game />;
    }
  }
  return <Layout>{body}</Layout>;
}

export default App;
