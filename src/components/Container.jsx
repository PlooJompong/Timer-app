const Container = ({ isDone, view, children }) => {
  const getBackgroundClass = () => {
    if (isDone || view === "pause") {
      return "bg-custom-gray"; // Same as Alarm's background
    } else {
      return "text-custom-gray container"; // Normal background
    }
  };

  return (
    <main className={`${getBackgroundClass()} h-screen p-4 tracking-widest`}>
      {children}
    </main>
  );
};

export default Container;
