/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Cell from "./components/Cell";
import './app.css'

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("rond");
  const [winningMessage, setWinningMessage] = useState("");
  const message = "Prochain à jouer : " + go;
  const checkscore = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const array of winningCombos) {
      let rondWins = array.every((cell) => cells[cell] === "rond");
      if (rondWins) {
        setWinningMessage("Le rond l'emporte !");
        return;
      }
    }
    for (const array of winningCombos) {
      let croixWins = array.every((cell) => cells[cell] === "croix");
      if (croixWins) {
        setWinningMessage("La croix l'emporte !");
        return;
      }
    }
  };
  useEffect(() => {
    checkscore();
  },);

  return (
    <div className="app">
      <div className="intro-text">
      <h1>Bienvenue dans ce Tic-Tac-Toe !</h1>
      <p>La première étape de mon périple dans le monde formidable de React et du jeu.</p>
      <p>Stay tuned for the next steps...and in the meantime, have fun !</p>
      </div>
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            go={go}
            setGo={setGo}
            cells={cells}
            setCells={setCells}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <p>{winningMessage || message}</p>
      <p className="keep-on-msg">Keep on keeping on.</p>
    </div>
  );
}

export default App;
