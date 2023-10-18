import React from "react";
import { Btn } from "./Btn/Btn.component";

export const Row = ({ row, clickHandler }) => {
  return (
    <div>
      <Btn clickHandler={clickHandler} row={row} col={1} />
      <Btn clickHandler={clickHandler} row={row} col={2} />
      <Btn clickHandler={clickHandler} row={row} col={3} />
    </div>
  );
};
