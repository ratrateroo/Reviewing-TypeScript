import { useState, useRef, useEffect } from "react";

export const MutableRef = () => {
  //state for number of seconds
  const [timer, setTimer] = useState(0);
  //[2] type number or null is used to handle the number from setInterval return value
  const interValRef = useRef<number | null>(null);

  const stopTimer = () => {
    //clearing the interval using the interval id from interValRef.current

    //[3] window.clearInterval(interValRef.current);
    //clearInterval use number or undefined type,
    //posible fix: const interValRef = useRef<number | undefined>(undefined);
    if (interValRef.current) {
      window.clearInterval(interValRef.current);
    }
  };

  useEffect(() => {
    //increase the timer value by 1 every second and store to the reference
    //mutating the reference value
    interValRef.current = window.setInterval(() => {
      // [1]setInterval returns a numeric value, the id of that interval
      setTimer((timer) => timer + 1);
    }, 1000);
    //timer value is cleared when the component unmounts
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};
