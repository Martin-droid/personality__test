import "./App.css";
import Menu from "./components/Menu";
import Test from "./components/Test";
import EndScreen from "./components/EndScreen";
import { useState } from "react";

import { GameStateContext } from "./helpers/Contexts";
// ['menu', 'playing', 'finished']
function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Personality Test</h1>
      <div>
      
      </div>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Test />}
        {gameState === "finished" && <EndScreen />}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
