import React, { useRef, useState } from "react";
function Square({value,onClick}) {
 
  return (
    <button onClick={onClick} className="w-24 h-24 rounded-lg border-[1px] bg-purple-700 text-white drop-shadow-lg m-1 hover:scale-105 ">
    {value}
    </button>
  );
}
function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  // decide winner
  const soundref =useRef(new Audio("toy-button-105724.mp3"));
  
  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? "X" : "O"}`;
  const handleSetSquares = (index) => {
    
    if(squares[index] || calculateWinner(squares)){
     
      return;
    }
    if(isXNext){
      soundref.current.play();
      const newSquares = [...squares];
      newSquares[index] = "X";
      setSquares(newSquares);
     
     
    }else{
    const newSquares = [...squares];
    newSquares[index] = "Y";
    setSquares(newSquares);
    soundref.current.play();
    }
    setIsXNext(!isXNext);
  }

  return (
    <div className=" w-[500px]">
      
      <div className="text-2xl font-bold text-center w-[308px] mb-2 rounded-lg text-white bg-purple-700 p-2">
      <p>     {!squares.includes(null)?"Game Over":status}</p>
      </div>
      <div className="flex">
        <Square value={squares[0]} onClick={()=>handleSetSquares(0)} />
        <Square value={squares[1]} onClick={()=>handleSetSquares(1)} />
        <Square value={squares[2]} onClick={()=>handleSetSquares(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onClick={()=>handleSetSquares(3)} />
        <Square value={squares[4]} onClick={()=>handleSetSquares(4)} />
        <Square value={squares[5]} onClick={()=>handleSetSquares(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onClick={()=>handleSetSquares(6)} />
        <Square value={squares[7]} onClick={ ()=>handleSetSquares(7)} />
        <Square value={squares[8]} onClick={()=>handleSetSquares(8)} />
      </div>
      
    </div>
  );
}
// 

export default function App() {
  return (
    <div className="bg-purple-900 h-screen flex items-center justify-center">
     <div className="flex">
      <Board />
      <div>
        <h1 className="text-3xl text-white font-bold">History</h1>
        <ul>
          <li>
            <button className="bg-purple-700 text-white p-2 rounded-lg m-2">Go to move #1</button>
          </li>
          <li>
            <button className="bg-purple-700 text-white p-2 rounded-lg m-2">Go to move #2</button>
          </li>
          <li>
            <button className="bg-purple-700 text-white p-2 rounded-lg m-2">Go to move #3</button>
          </li>
        </ul>
      </div>
     </div>
    </div>
  );
}

const calculateWinner = (squares) => {

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
for (let i = 0; i < lines.length; i++) {
  const [a, b, c] = lines[i];
  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    return squares[a];
  }
}
return null;

}
