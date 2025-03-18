import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState(0);
  const [sides, setSides] = useState(20);
  const [amount, setAmount] = useState(3);

  const rollDice = () => {
    let total = 0;
    //Rolls the number of dice set by the user
    for (let i = amount; i > 0; i--) {
      let rolledNum = Math.floor(Math.random() * sides) + 1;
      total += rolledNum;      
    }
    setResult(total);
  }

  return (
    <>
    <main>
      <header>
        <h1>D&D Dice Roller</h1>
      </header>
      <section className="card">
          <h2>Number Rolled: {result}!</h2>
          <h3>Rolling a D{sides}</h3>
          <input type='text'>Test</input>
            <section className="diceSelection">
              <button onClick={() => setSides(4)}>D4</button>
              <button onClick={() => setSides(6)}>D6</button>
              <button onClick={() => setSides(8)}>D8</button>
              <button onClick={() => setSides(10)}>D10</button>
              <button onClick={() => setSides(12)}>D12</button>
              <button onClick={() => setSides(20)}>D20</button>
            </section>
          <button onClick={() => rollDice(sides)}>
            Roll!
          </button>
      </section>
    </main>
    </>
  )
}

export default App
