import React, { useRef, useState } from "react";
import { Row } from "./Row/Row.component";

const ROLES = { x: "x", o: "o" };
export const Board = () => {
  const boardRef = useRef();
  const [role, setRole] = useState(ROLES.x);
  const [array, setArray] = useState([[], [], []]);
  const restart = () => {
    setArray([[], [], []]);
    setRole(ROLES.x);

    boardRef.current.querySelectorAll("button").forEach((btn) => {
      btn.innerHTML = "";
      btn.classList.remove("off");
    });
  };

  const checkWinner = (row, col) => {
    let win = true;

    //vérifier la ligne
    for (let _col = 0; _col < 3; _col++) {
      const v = array[row][_col];
      if (v !== role) {
        win = false;
        break;
      }
    }

    if (win == true) return true;

    win = true;
    //vérifier la colonne
    for (let _row = 0; _row < 3; _row++) {
      const v = array[_row][col];
      if (v !== role) {
        win = false;
        break;
      }
    }

    if (win == true) return true;

    if (row == col) {
      win = true;

      //vérifier diagonale
      for (let x = 0; x < 3; x++) {
        const v = array[x][x];
        if (v !== role) {
          win = false;
          break;
        }
      }

      if (win) return true;
    }

    //---------------------------------------- diag inv
    win = true;
    const diag = [
      [0, 2],
      [1, 1],
      [2, 0],
    ];

    for (let index = 0; index < diag.length; index++) {
      const [_r, _col] = diag[index];

      const v = array[_r][_col];
      console.log("diag sens inv");
      if (v !== role) {
        win = false;
        break;
      }
    }

    return win;
  };

  const toggleRole = () => {
    const newRole = role == ROLES.x ? ROLES.o : ROLES.x;
    setRole(newRole);
  };

  const clickHandler = ({ event, row, col }) => {
    event.target.innerHTML = role;
    event.target.classList.add("off");
    array[row - 1][col - 1] = role;
    console.log(array);

    const winner = checkWinner(row - 1, col - 1);
    if (winner) alert(role + " won");

    setArray([...array]);
    toggleRole();
  };

  return (
    <div className="wrapper">
      <button onClick={restart} className="restart-btn">
        Resart
      </button>
      <div className="board" id="board" ref={boardRef}>
        <Row clickHandler={clickHandler} row={1} />
        <Row clickHandler={clickHandler} row={2} />
        <Row clickHandler={clickHandler} row={3} />
      </div>
    </div>
  );
};
