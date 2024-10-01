import React, { useState } from "react";
function Square({value,onClick}) {
 
  return (
    <button onClick={onClick} className="w-12 h-12 rounded-lg border-[1px] bg-purple-700 text-white drop-shadow-lg m-1 hover:scale-105 ">
    {value}
    </button>
  );
}
export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  // decide winner
  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? "X" : "O"}`;
  const handleSetSquares = (index) => {
    if(squares[index] || calculateWinner(squares)){
      console.log(calculateWinner(squares));
      return;
    }
    if(isXNext){
      const newSquares = [...squares];
      newSquares[index] = "X";
      setSquares(newSquares);
     
    }else{
    const newSquares = [...squares];
    newSquares[index] = "Y";
    setSquares(newSquares);
    }
    setIsXNext(!isXNext);
  }
  return (
    <div className="">
      <div className="text-3xl font-bold text-center text-white bg-purple-700 p-2">
        {status}
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
