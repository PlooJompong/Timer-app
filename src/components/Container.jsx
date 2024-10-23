import Navbar from "./Navbar";

const Container = ({ children, ...props }) => {
  return (
    <main
      className="max-w-screen relative mx-auto flex h-screen flex-col items-center justify-center tracking-widest text-custom-gray"
      {...props}
    >
      {children}
    </main>
  );
};

export default Container;
