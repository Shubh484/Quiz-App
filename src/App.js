import "./App.css";
import { useState } from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { QuizContext } from "./Helpers/contexts";

function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <>
      <div className="App">
        <h2>Quiz App</h2>
        <QuizContext.Provider value={{ gameState, setGameState }}>
          {gameState === "menu" && <MainMenu />}
          {gameState === "quiz" && <Quiz />}
          {gameState === "endScreen" && <EndScreen />}
        </QuizContext.Provider>
      </div>
    </>
  );
}

export default App;
