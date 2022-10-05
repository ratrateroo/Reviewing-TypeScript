import React from "react";
// The component uses the Countdown component

import Countdown, { CountdownHandle } from "./Countdown.tsx";

function App() {
  const countdownEl = React.useRef<CountdownHandle>(null);

  React.useEffect(() => {
    if (countdownEl.current) {
      // start() has type inference here as well
      countdownEl.current.start();
    }
  }, []);

  return <Countdown ref={countdownEl} />;
}
