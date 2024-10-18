const Button = ({ onClick, children, ...props }) => {
  return (
    <button
      className="rounded-[5px] border border-white p-[10px] text-2xl font-bold"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
