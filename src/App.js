import Dices from "./Dices";
import React from "react";
// import Button from "./Button";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import UseWindowsize from "./useWidowsize";

function App() {
  let [dice, setDice] = React.useState(ranNum());
  let [tenzes, setTenzes] = React.useState(false);
  let [rollCount, setRollCount] = React.useState(0);
  let { width, height } = UseWindowsize;

  function dieClick(id) {
    setDice((prvDice) => {
      return prvDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }
  function crateNewDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return { value: randomNumber, id: nanoid(), isHeld: false };
  }

  function ranNum() {
    let array = [];
    for (let index = 0; index < 10; index++) {
      array.push(crateNewDice());
    }
    return array;
  }

  let dieElement = dice.map((eachDice) => (
    <Dices
      dieClick={() => dieClick(eachDice.id)}
      isHeld={eachDice.isHeld}
      key={eachDice.id}
      value={eachDice.value}
      id={eachDice.id}
    />
  ));

  function buttonClick() {
    if (!tenzes) {
      setRollCount((prvCount) => prvCount + 1);
      setDice((prvDice) =>
        prvDice.map((die) => {
          return die.isHeld ? die : crateNewDice();
        })
      );
    } else {
      setTenzes(false);
      setDice(ranNum());
      setRollCount(0);
    }
  }
  React.useEffect(() => {
    let isHeldTrue = dice.every((die) => die.isHeld);
    let same = dice.every((die) => {
      return die.value === dice[5].value;
    });
    if (same && isHeldTrue) {
      console.log("you won the game");
      setTenzes(true);
    }
  }, [dice]);

  return (
    <main>
      <div className="dice-container">{dieElement}</div>
      <button onClick={buttonClick}>{tenzes ? "new game" : "Roll"}</button>
      {tenzes && <Confetti height={height} width={width} />}
      <h5>Number of Rolls:{rollCount}</h5>
    </main>
  );
}

export default App;
