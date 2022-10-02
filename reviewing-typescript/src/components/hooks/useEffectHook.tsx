function TimeoutEffect(props: { timerMs: number }) {
  const { timerMs } = props;

  React.useEffect(
    () =>
      setTimeout(() => {
        /* do stuff */
      }, timerMs),
    [timerMs]
  );
  // bad example! setTimeout implicitly returns a number
  // because the arrow function body isn't wrapped in curly braces
  return null;
}

function TimeoutEffect2(props: { timerMs: number }) {
  const { timerMs } = props;

  React.useEffect(() => {
    setTimeout(() => {
      /* do stuff */
    }, timerMs);
  }, [timerMs]);
  // better; use the void keyword to make sure you return undefined
  return null;
}
