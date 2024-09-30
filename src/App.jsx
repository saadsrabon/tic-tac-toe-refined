import React from "react";
function Square(props) {
  return (
    <button className="w-12 h-12 rounded-sm border-[1px]" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default function App() {
  return (
    <div className="">
      <div>
        <Square value="X" onClick={() => console.log("click")} />
        <Square value="X" onClick={() => console.log("click")} />
        <Square value="X" onClick={() => console.log("click")} />
      </div>
      <div>
        <Square value="X" onClick={() => console.log("click")} />
        <Square value="X" onClick={() => console.log("click")} />
        <Square value="X" onClick={() => console.log("click")} />
      </div>
      <div>
        <Square value="X" onClick={() => console.log("click")} />
        <Square value="X" onClick={() => console.log("click")} />
        <Square value="X" onClick={() => console.log("click")} />
      </div>
    </div>
  );
}
