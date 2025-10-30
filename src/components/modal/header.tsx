import { Circle, Icon, Logo, Title } from "./style";

const ModalHeader = ({
  modalIcon,
  type = "normal",
  children,
}: {
  modalIcon?: boolean;
  type?: string;
  children?: any;
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
