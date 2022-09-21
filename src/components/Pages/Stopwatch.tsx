import { useRef, useState, useEffect } from "react";

type StopWatchProps = {
  onStart: boolean;
  onStop: boolean;
};
const Stopwatch = ({ onStart, onStop }: StopWatchProps) => {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);
  const startHandler = (arg: boolean) => {
    if (onStart == true) {
      if (timerIdRef.current) {
        return;
      }
      timerIdRef.current = window.setInterval(
        () => setCount((c) => c + 1),
        1000
      );
    }
  };
  const stopHandler = (arg: boolean) => {
    if (onStop == true) {
      clearInterval(timerIdRef.current);
      timerIdRef.current = 0;
      setCount(0)
    }
  };

  useEffect(() => {
    startHandler(onStart);
    stopHandler(onStop);
    return () => clearInterval(timerIdRef.current);
  }, [onStart, onStop]);
  return (
    <div>
      <h3>Timer: {count}s</h3>
      <div></div>
    </div>
  );
};
export default Stopwatch;
