import React from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";

const EndScreen = () => {
  const { score, setScore, setGameState, userName } = useContext(
    GameStateContext
  );

  const restartTest = () => {
    setScore(0);
    setGameState("menu");
  };

  


  return (
    <div className="EndScreen">
      <h1>Test Finished</h1>
<h2>Dear {userName}</h2>

<h2>You are an { 
score >= 2  ? (<h1>Introvert</h1>): 

(<h1>Extrovert</h1>)}</h2>

      <button onClick={restartTest}>Restart Test</button>
    </div>
  );
};

export default EndScreen;
