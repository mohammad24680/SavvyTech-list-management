import { Footer } from "./style";

interface ModalFooterProps {
  children?: React.ReactNode;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => {
  return <Footer>{children}</Footer>;
};

ModalFooter.displayName = "ModalFooter";

export default ModalFooter;
