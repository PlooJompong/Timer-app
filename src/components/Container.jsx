const Container = ({ isDone, children }) => {
  return !isDone ? (
    <main className="text-custom-gray container h-full p-4 tracking-widest">
      {children}
    </main>
  ) : (
    <main className="bg-custom-gray h-full w-full p-4 tracking-widest">
      {children}
    </main>
  );
};

export default Container;
