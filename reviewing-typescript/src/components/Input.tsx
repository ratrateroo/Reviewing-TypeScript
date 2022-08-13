//using React.ChangeEvent for input changes with HTMLInputElement
//event can be passed as props or defined within component
import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  //event defined within component
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  //return <input type="text" value={props.value} onChange={props.handleChange} />;
  return <input type="text" value={props.value} onChange={handleInputChange} />;
};
