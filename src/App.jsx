import React from 'react'
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}
export default function App() {
  return (
    <div>App

      <Square value="X" onClick={() => console.log('click')} />
    </div>
  )
}
