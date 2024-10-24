const Container = ({ children }) => {
  return (
    <main className="relative mx-auto flex h-screen w-screen flex-col items-center justify-center tracking-widest text-custom-gray">
      {children}
    </main>
  );
};

export default Container;
