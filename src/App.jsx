import { use, useState } from 'react'
import './App.css'

function App() {

  //Total Calculated
  const [result, setResult] = useState(0);

  const [amountOfDice, setAmountOfDice] = useState(1);
  const [amountOfSides, setAmountOfSides] = useState(20);

  //Text user input
  const [diceRollInput, setDiceRollInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const vallidate = (userInput) => {
    //Checks for [0-99]d[0-99]
    const regexCheck = /^([1-9][0-9]?)d([1-9][0-9]?)([+-](?:[0-9]|[1-9][0-9]))?$/i;

    let result = regexCheck.test(userInput);

    return true ? result === true : false;
  }

  //Rolls a X Sided dice Y number of times
  const rollDice = (numberOfDice, numberOfSides) => {
    let total = 0;
    //Rolls the amount of dice inputted and returns the total
    for (let i = numberOfDice; i > 0; i--) {
      let rolledNum = Math.floor(Math.random() * numberOfSides) + 1;
      total += rolledNum;
    }
    return total;
  }

  const rollAdvantage = () => {
    //Update the UI
    setAmountOfDice(2);
    setAmountOfSides(20);

    //Calculate result
    let result = 0;

    let rollOne = Math.floor(Math.random()* 20) + 1;
    let rollTwo = Math.floor(Math.random()* 20) + 1;
    
    //Compare numbers and return the larger
    result = rollOne > rollTwo ? rollOne : rollTwo;
    return result;
  }

  const rollDisadvantage = () => {
    //Update the UI
    setAmountOfDice(2);
    setAmountOfSides(20);

    //Calculate result
    let result = 0;

    let rollOne = Math.floor(Math.random()* 20) + 1;
    let rollTwo = Math.floor(Math.random()* 20) + 1;
    
    //Compare numbers and return the smaller
    result = rollOne < rollTwo ? rollOne : rollTwo;
    return result;
  }


  return (
    <>
    <main>
      <header>
        <h1>D&D Dice Roller</h1>
      </header>
      <section className="card">
          <h2>Number Rolled: <br></br>{result}!</h2>
          <p>Type a number of dice to roll and the number of sides each has using the format (2d6, or 1d20 Max 99d99)</p>
          <p>{errorMessage}</p>
          <section className='diceEntry'>
            <input
              type="text"
              className='diceInputTextbox'
              value={diceRollInput}
              onChange={(e) => setDiceRollInput(e.target.value)}
              placeholder="Enter in format 2d6 or 1d20"
              onKeyDown={(e) => {
                if(e.key === "Enter") {
                  if(!vallidate(e.target.value)) {
                    setErrorMessage("Invalid dice format! Use XdY, MAX 99d99+99");
                    setAmountOfDice(0);
                    setAmountOfSides(0);
                    setResult(0);
                    setDiceRollInput("");
                  }
                  else {
                    setErrorMessage("");
                    const [diceCount, diceSides] = e.target.value.split("d");
                    setAmountOfDice(diceCount);
                    setAmountOfSides(diceSides);
                    setResult(rollDice(diceCount, diceSides));
                  }
                }
              }}
              />
              <div>
                <button 
                  className='advantage-disadvantage'
                  onClick={() => {setResult(rollAdvantage())}}
                >
                Advantage</button>

                <button 
                  className='advantage-disadvantage'
                  onClick={() => {setResult(rollDisadvantage())}}
                >
                Disadvantage</button>
              </div>
          </section>

          <h3>Rolling a: D{amountOfSides} {amountOfDice} time(s)</h3>
          {/* <button onClick={() => rollDice(diceRollInput)}>
            Roll!
          </button> */}
      </section>
    </main>
    </>
  )
}

export default App

  // DEPRICATED VERSIONS OF THE DICE ROLLER
  // const rollDice = () => {
  //   let total = 0;
  //   //Rolls the number of dice set by the user
  //   for (let i = amount; i > 0; i--) {
  //     let rolledNum = Math.floor(Math.random() * sides) + 1;
  //     total += rolledNum;      
  //   }
  //   setResult(total);
  // }

  // const rollDice = (userInput) => {
  //   let runningTotal = 0;

  //   let amountOfDice = userInput.split("d")[0];
  //   let amountOfSides = userInput.split("d")[1];

  //   setAmountOfDice(userInput.split("d")[0]);
  //   setAmountOfSides(userInput.split("d")[1]);
  //   //Rolls the number of dice set by the user.
  //   for (let i = amountOfDice; i > 0; i--) {
  //       let rolledNum = Math.floor(Math.random() * amountOfSides) + 1;
  //       runningTotal += rolledNum;
  //   }

  //   setResult(runningTotal);
  // }