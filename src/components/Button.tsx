interface ButtonProps {
  value: string;
  onClick: () => void;
  type?: "number" | "operator" | "special";
}

function Button({ value, onClick, type = "number" }: ButtonProps) {
  const baseStyles =
    "w-full h-16 rounded-xl text-2xl font-semibold transition-colors duration-200";

  const typeStyles = {
    number: "bg-gray-700 text-white hover:bg-gray-600",
    operator: "bg-orange-500 text-white hover:bg-orange-600",
    special: "bg-gray-600 text-white hover:bg-gray-500",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${typeStyles[type]}`}>
      {value}
    </button>
  );
}

export default Button;
