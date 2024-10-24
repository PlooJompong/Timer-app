import Navbar from "../components/Navbar";
import StartButton from "../components/StartButton";
import AbortButton from "../components/AbortButton";

const DigitalTimer = ({ seconds, isRunning, handleStop, handleStart }) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <>
      <Navbar />

      <section className="flex h-screen w-4/5 max-w-screen-xl flex-col items-center justify-center">
        <div className="flex h-1/2 w-full items-center justify-center">
          <h1 className="text-[80px] font-bold">
            {minutes > 0
              ? `${minutes}:${formatTime(remainingSeconds)}`
              : `${remainingSeconds}`}
          </h1>
        </div>

        {isRunning ? (
          <AbortButton onClick={handleStop} />
        ) : (
          <StartButton onClick={handleStart} />
        )}
      </section>
    </>
  );
};

export default DigitalTimer;
