import React from "react";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import { Game } from "./pages/Game";

function App() {
  return (
    <Layout>
      <Game />
    </Layout>
  );
}

export default App;
