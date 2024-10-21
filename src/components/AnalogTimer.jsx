const AnalogTimer = ({ timeLeft, breakTime, onBreak, isRunning, isDone }) => {
  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <>
      <div>
        Analog: {formatTime(Math.floor(timeLeft / 60))}:
        {formatTime(timeLeft % 60)}
      </div>
      <div>
        Break: {formatTime(Math.floor(breakTime / 60))}:
        {formatTime(breakTime % 60)}
      </div>
    </>
  );
};

export default AnalogTimer;
