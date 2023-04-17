interface RoundedButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  variant?: string;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  icon,
  label,
  onClick,
  variant = "outlined",
}) => {
  return (
    <div
      className={`flex flex-col gap-2 items-center text-beta-400 hover:text-beta-500`}>
      <button
        className={`rounded-full min-w-16 min-h-16 max-w-16 max-h-16 border-current p-4 flex items-center justify-center
        ${
          variant === "contained"
            ? "text-white bg-beta-500 hover:bg-beta-600"
            : "border-[1.5px] text-inherit"
        }
         `}
        onClick={onClick}>
        {icon}
      </button>
      <span className='capitalize'>{label}</span>
    </div>
  );
};

export default RoundedButton;
