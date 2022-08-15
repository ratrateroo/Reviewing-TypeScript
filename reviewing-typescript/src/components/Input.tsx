//using React.ChangeEvent for input changes with HTMLInputElement
//event can be passed as props or defined within component
import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
//props destructured
export const Input = ({ value, handleChange }: InputProps) => {
  //event defined within component
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  //return <input type="text" value={props.value} onChange={handleChange} />;
  return <input type="text" value={value} onChange={handleInputChange} />;
};
