import { Circle, Icon, Logo, Title } from "./style";

interface ModalHeaderProps {
  modalIcon?: boolean;
  type?: "normal" | "delete";
  children?: React.ReactNode;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({
  modalIcon,
  type = "normal",
  children,
}) => {
  return (
    <>
      {modalIcon && (
        <Circle type={type}>
          {type === "delete" && <Icon className="me-trash" />}
          {type === "normal" && <Logo />}
        </Circle>
      )}
      <Title type={type}>
        <>{children} </>
      </Title>
    </>
  );
};

ModalHeader.displayName = "ModalHeader";
export default ModalHeader;
