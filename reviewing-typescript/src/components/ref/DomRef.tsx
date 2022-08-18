import { useRef, useEffect } from "react";

//using HTMLInputElemant to specify the type is input form type
//use non null assertion (null!) to specify that the input is never null
export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    //inputRef.current?.focus();
    //optional chaining is not needed if input type is nevel null
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
