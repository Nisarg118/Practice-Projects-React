import { useEffect, useState } from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-200 rounded border h-[100px] w-[100px] border-gray-400 p-4 text-center cursor-pointer hover:bg-gray-300 m-2 text-3xl font-bold "
    >
      {value}
    </button>
  );
};

export default function TicTacToe() {
  const [arr, setArr] = useState(Array(9).fill(""));
  const [xTurn, setXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function handleClick(currentSquareIndex) {
    let cpySquares = [...arr];
    if (getWinner(cpySquares) || cpySquares[currentSquareIndex]) return;
    cpySquares[currentSquareIndex] = xTurn ? "X" : "O";
    setXTurn(!xTurn);
    setArr(cpySquares);
  }

  function getWinner() {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (arr[x] && arr[x] === arr[y] && arr[y] === arr[z]) {
        return arr[x];
      }
    }

    return null;
  }

  function handleRestart() {
    setXTurn(true);
    setArr(Array(9).fill(""));
  }

  useEffect(() => {
    if (!getWinner(arr) && arr.every((item) => item !== "")) {
      setStatus("This is draw!! Please restart the game");
    } else if (getWinner(arr)) {
      setStatus(`Winner is ${getWinner(arr)}. Please restart the game`);
    } else {
      setStatus(`Next player is ${xTurn ? "X" : "O"}`);
    }
  }, [arr, xTurn]);
  return (
    <div className="container flex-col flex justify-center items-center min-h-screen">
      <h1 className="text-3xl font-bold mb-5">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 w-auto mx-auto">
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <Square
              value={arr[index]}
              onClick={() => handleClick(index)}
              key={index}
            />
          ))}
      </div>
      <h1 className="text-2xl font-medium">{status}</h1>
      <button
        className="py-2 px-10 bg-gray-500 text-lg rounded mt-2 cursor-pointer hover:bg-gray-400"
        onClick={handleRestart}
      >
        Restart
      </button>
    </div>
  );
}
