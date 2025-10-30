import { Body } from "./style";

interface IModal {
  type?: string;
  children?: any;
  variant?: string;
}

const ModalBody = (props: IModal) => {
  const { children, type, variant } = props;
  return (
    <Body type={type} variant={variant}>
      {children}
    </Body>
  );
};

ModalBody.displayName = "ModalBody";

export default ModalBody;
