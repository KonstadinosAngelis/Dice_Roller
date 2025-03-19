import { use, useState } from 'react'
import './App.css'

function App() {
  //Import REGEX 
  const regexPattern = import.meta.env.VITE_DICE_REGEX;
  const diceRegex = new RegExp(regexPattern);

  //Total Calculated
  const [result, setResult] = useState(0);

  const [amountOfDice, setAmountOfDice] = useState(1);
  const [amountOfSides, setAmountOfSides] = useState(20);

  //Text user input
  const [diceRollInput, setDiceRollInput] = useState("");

  const rollDice = (userInput) => {
    let runningTotal = 0;

    let amountOfDice = userInput.split("d")[0];
    let amountOfSides = userInput.split("d")[1];

    //Rolls the number of dice set by the user.
    for (let i = amountOfDice; i > 0; i--) {
        let rolledNum = Math.floor(Math.random() * amountOfSides) + 1;
        runningTotal += rolledNum;
    }

    setAmountOfDice(userInput.split("d")[0]);
    setAmountOfSides(userInput.split("d")[1]);
    setResult(runningTotal);
  }



  // DEPRICATED VERSION OF THE DICE ROLLER
  // const rollDice = () => {
  //   let total = 0;
  //   //Rolls the number of dice set by the user
  //   for (let i = amount; i > 0; i--) {
  //     let rolledNum = Math.floor(Math.random() * sides) + 1;
  //     total += rolledNum;      
  //   }
  //   setResult(total);
  // }

  return (
    <>
    <main>
      <header>
        <h1>D&D Dice Roller</h1>
      </header>
      <section className="card">
          <h2>Number Rolled: {result}!</h2>
          <p>Type a number of dice to roll and the number of sides each has using the format (2d6, or 1d20)</p>
          <input
            type="text"
            value={diceRollInput}
            onChange={(e) => setDiceRollInput(e.target.value)}
            placeholder="Enter in format 2d6 or 1d20"
            onKeyDown={(e) => {
              if(e.key === "Enter") {
                console.log(authenticateInput())
                if(diceRegex.test(e.target.value)) {
                  setAmountOfDice(e.target.value.split("d")[0]);
                  setAmountOfSides(e.target.value.split("d")[1]);
                  rollDice(e.target.value)
                }
                else {
                  alert("Please enter a valid input (100d100 is the max!)")
                }
              }
            }}
            />
            <h3>Rolling a: D{amountOfSides} {amountOfDice} time(s)</h3>
            <section className="diceSelection">
              <div>
                <button onClick={() => setAmountOfSides(4)}>D4</button>
                <button onClick={() => setAmountOfSides(6)}>D6</button>
                <button onClick={() => setAmountOfSides(8)}>D8</button>
              </div>
              <div>
                <button onClick={() => setAmountOfSides(10)}>D10</button>
                <button onClick={() => setAmountOfSides(12)}>D12</button>
                <button onClick={() => setAmountOfSides(20)}>D20</button>
              </div>
            </section>
          <button onClick={() => rollDice(diceRollInput)}>
            Roll!
          </button>
      </section>
    </main>
    </>
  )
}

export default App
