const DigitalTimer = ({ timeLeft, breakTime, onBreak, isRunning, isDone }) => {
  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <>
      {!onBreak ? (
        <h1 className="mb-28 text-[80px] font-bold">
          {formatTime(Math.floor(timeLeft / 60))}:{formatTime(timeLeft % 60)}
        </h1>
      ) : (
        <h1 className="mb-28 text-[80px] font-bold">
          {formatTime(Math.floor(breakTime / 60))}:{formatTime(breakTime % 60)}
        </h1>
      )}
    </>
  );
};

export default DigitalTimer;
