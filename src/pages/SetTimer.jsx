import Navbar from "../components/Navbar";
import TimeSelector from "../components/TimeSelector";
import CheckBoxes from "../components/CheckBoxes";
import StartButton from "../components/StartButton";

const SetTimer = ({
  seconds,
  setSeconds,
  handleStart,
  isIntervals,
  setIsIntervals,
  breakIsOn,
  setBreakIsOn,
  isTesting,
}) => {
  return (
    <>
      <Navbar />

      <section className="flex h-screen w-4/5 max-w-screen-xl flex-col items-center justify-center">
        <TimeSelector
          seconds={seconds}
          setSeconds={setSeconds}
          isTesting={isTesting}
        />

        <CheckBoxes
          isIntervals={isIntervals}
          breakIsOn={breakIsOn}
          setIsIntervals={setIsIntervals}
          setBreakIsOn={setBreakIsOn}
          isTesting={isTesting}
        />

        <StartButton
          className="w-3/4 rounded-[5px] border border-gray-500 p-[10px] text-2xl font-bold hover:border-2 hover:border-green-300 hover:text-green-500 max-[320px]:text-lg"
          onClick={handleStart}
        />
      </section>
    </>
  );
};

export default SetTimer;
