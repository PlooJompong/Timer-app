import { useEffect, useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";

import Loading from "./pages/Loading.jsx";
import SetTimer from "./pages/SetTimer.jsx";
import DigitalTimer from "./pages/DigitalTimer.jsx";
import AnalogTimer from "./pages/AnalogTimer.jsx";
import TextTimer from "./pages/TextTimer.jsx";
import Alarm from "./pages/Alarm.jsx";
import Pause from "./pages/Pause.jsx";
import Container from "./components/Container.jsx";

const App = () => {
  const navigate = useNavigate();

  const isTesting = true;

  const BREAK_DURATION = isTesting ? 3 : 5 * 60;
  const INITIAL_TIME = isTesting ? 5 : 1 * 60;

  const [seconds, setSeconds] = useState(INITIAL_TIME);
  const [breakTime, setBreakTime] = useState(BREAK_DURATION);
  const [isIntervals, setIsIntervals] = useState(false);
  const [breakIsOn, setBreakIsOn] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [runningTime, setRunningTime] = useState(INITIAL_TIME);
  const [previousPath, setPreviousPath] = useState(null);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (onBreak) {
          if (breakTime > 0) {
            setBreakTime((prev) => prev - 1);
          } else {
            setOnBreak(false);
            setSeconds(runningTime);
            navigate(previousPath || "/timer");
          }
        } else {
          if (seconds > 0) {
            setSeconds((prev) => prev - 1);
          } else if (seconds === 0) {
            if (isIntervals && breakIsOn) {
              setOnBreak(true);
              setBreakTime(BREAK_DURATION);
              setPreviousPath(window.location.pathname);
              navigate("/pause");
            } else if (isIntervals) {
              setSeconds(runningTime);
            } else {
              setIsRunning(false);
              setSeconds(runningTime);
              navigate("/alarm");
            }
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [
    seconds,
    isRunning,
    breakIsOn,
    isIntervals,
    breakTime,
    onBreak,
    BREAK_DURATION,
    runningTime,
    navigate,
    previousPath,
    INITIAL_TIME,
  ]);

  const handleStart = () => {
    setIsRunning(true);
    setRunningTime(seconds);

    if (onBreak) {
      setBreakTime(BREAK_DURATION);
    }

    navigate("/digital");
  };

  const handleStop = () => {
    setIsRunning(false);
    setOnBreak(false);
    setSeconds(runningTime);
    setBreakTime(BREAK_DURATION);
    navigate("/timer");
  };

  const handleRestart = () => {
    setSeconds(runningTime);
    setOnBreak(false);
    setBreakTime(BREAK_DURATION);
    setIsRunning(true);
    navigate(previousPath || "/timer");
  };

  const handleDecrease = () => {
    if (seconds > 1) {
      // if (seconds > 60) {

      setSeconds((prev) => prev - 1);
      // setSeconds((prev) => prev - 60);
    }
  };

  const handleIncrease = () => {
    if (seconds < 10) {
      // if (seconds < 600) {
      setSeconds((prev) => prev + 1);
      // setSeconds((prev) => prev + 60);
    }
  };
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route
            path="/timer"
            element={
              <SetTimer
                seconds={seconds}
                handleStart={handleStart}
                handleDecrease={handleDecrease}
                handleIncrease={handleIncrease}
                isIntervals={isIntervals}
                setIsIntervals={setIsIntervals}
                breakIsOn={breakIsOn}
                setBreakIsOn={setBreakIsOn}
              />
            }
          />
          <Route
            path="/digital"
            element={
              <DigitalTimer
                seconds={seconds}
                isRunning={isRunning}
                handleStop={handleStop}
                handleStart={handleStart}
              />
            }
          />
          <Route
            path="/analog"
            element={
              <AnalogTimer
                seconds={seconds}
                isRunning={isRunning}
                handleStop={handleStop}
              />
            }
          />
          <Route
            path="/text"
            element={
              <TextTimer
                seconds={seconds}
                isRunning={isRunning}
                handleStop={handleStop}
              />
            }
          />
          <Route path="/alarm" element={<Alarm handleStop={handleStop} />} />
          <Route
            path="/pause"
            element={
              <Pause
                seconds={seconds}
                breakTime={breakTime}
                handleRestart={handleRestart}
              />
            }
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
