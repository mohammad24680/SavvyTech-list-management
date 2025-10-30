interface IIcon {
  icon: string;
  title?: string;
  color?: string;
  disabled?: boolean;
  onClick?: () => void;
}
const Icon = ({
  icon,
  disabled,
  color,
  onClick = () => false,
  title,
  ...rest
}: IIcon) => {
  return (
    <i
      className={`${icon} w-10 h-10 hover:bg-surface rounded flex justify-center items-center text-base ${
        color ? color : "text-black_87"
      } ${disabled ? "text-black_38" : ""}`}
      onClick={(e) => {
        if (!disabled) {
          e.preventDefault();
          onClick();
        }
      }}
      title={title}
      {...rest}
    />
  );
};

export default Icon;
