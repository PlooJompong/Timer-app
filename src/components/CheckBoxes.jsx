const CheckBoxes = ({
  isIntervals,
  breakIsOn,
  setIsIntervals,
  setBreakIsOn,
  isTesting,
}) => {
  return (
    <div className="my-8 flex w-3/4 flex-col items-start justify-center gap-4">
      <div className="flex items-center justify-center">
        <input
          id="intervals"
          type="checkbox"
          className="mr-3 h-5 w-5"
          checked={isIntervals}
          onChange={() => setIsIntervals((prevState) => !prevState)}
        />
        <p className="text-lg max-[320px]:text-base">intervals</p>
      </div>

      {isIntervals && (
        <div className="flex items-center justify-start">
          <input
            id="break"
            type="checkbox"
            className="mr-3 h-5 w-5"
            checked={breakIsOn}
            onChange={() => setBreakIsOn((prevState) => !prevState)}
          />

          <p className="text-lg max-[320px]:text-base">
            {isTesting
              ? "5 seconds break / interval"
              : "5 minutes break / interval"}
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckBoxes;
