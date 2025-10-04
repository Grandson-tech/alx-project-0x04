interface ButtonProps {
  buttonLabel: string;
  buttonBackgroundColor: string;
}

const Button: React.FC<ButtonProps> = ({ buttonLabel, buttonBackgroundColor }) => {
  const bgColorClass = buttonBackgroundColor === "red" ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600";
  
  return (
    <button className={`${bgColorClass} text-white font-semibold py-2 px-4 rounded-lg transition duration-300`}>
      {buttonLabel}
    </button>
  );
};

export default Button;
