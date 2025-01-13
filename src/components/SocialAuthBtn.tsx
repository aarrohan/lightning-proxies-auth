interface IProps {
  onClick?: () => void;
  icon: JSX.Element;
  title: string;
}

export default function SocialAuthBtn({ onClick, icon, title }: IProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="active:scale-95 w-full py-2.5 hover:ring-4 hover:ring-primary/5 border border-primary/10 rounded-lg flex justify-center items-center gap-2 sm:gap-3 text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] duration-200"
    >
      {icon}
      {title}
    </button>
  );
}
