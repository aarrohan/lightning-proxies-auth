interface IProps {
  isChecked: boolean;
  setIsChecked: (isChecked: boolean) => void;
}

export default function Checkbox({ isChecked, setIsChecked }: IProps) {
  return (
    <div
      onClick={() => setIsChecked(!isChecked)}
      className="w-[16px] aspect-square border border-accent bg-accent/10 rounded flex justify-center items-center cursor-pointer"
    >
      <svg
        width="10"
        height="8"
        viewBox="0 0 10 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${isChecked ? "opacity-100" : "opacity-0"} duration-200`}
      >
        <path
          d="M9 1L3.5 6.5L1 4"
          stroke="#1675FF"
          strokeWidth="1.6666"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
