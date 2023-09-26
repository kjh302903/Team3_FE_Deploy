interface Props {
  styleType: "white" | "thunder" | "thunder_full";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

function Button({ styleType, onClick, children }: Props) {
  const styleObj = {
    white: "text-gray-600 ring-1 rounded-md",
    thunder: "bg-thunder text-white rounded-md",
    thunder_full: "bg-thunder text-white w-[546px] h-[60px] rounded-full text-xl",
  };
  return (
    <button
      type="button"
      className={`px-2 py-1 ring-gray-400 ring-inset font-bold ${styleObj[styleType]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
