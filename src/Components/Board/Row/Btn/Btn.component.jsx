import React from "react";

export const Btn = ({ row, col, clickHandler }) => {
  const handleClick = (e) => {
    clickHandler({ event, row, col });
  };
  return <button onClick={handleClick}></button>;
};
