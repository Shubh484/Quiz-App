import { useContext } from "react";
import { QuizContext } from "../Helpers/contexts";

const MainMenu = () => {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <>
      <h4>MainMenu</h4>
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </>
  );
};

export default MainMenu;
