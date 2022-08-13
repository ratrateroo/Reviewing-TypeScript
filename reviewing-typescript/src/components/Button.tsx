//using React.MouseEvent as type for the event passed to the handleClick function prop
//to be specific HTMLButtonElement is used
//additional parameter can be added like id
import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
  );
};
