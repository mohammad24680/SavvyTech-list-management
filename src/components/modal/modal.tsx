import { cloneElement, useEffect } from "react";
import { ModalWrapper, Container, CloseButtunIcon, CloseButton } from "./style";
import CloseableArea from "../closeableArea";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/reducers/modal";

interface IModal {
  show?: boolean;
  closeHandler?: () => void;
  loading?: boolean;
  title?: string;
  clickHandler?: () => void;
  size?: string;
  type?: string;
  modalIcon?: boolean;
  children?: any;
  closeable?: boolean;
  variant?: string;
}

const Modal = (props: IModal) => {
  const dispatch = useDispatch();
  const {
    show,
    closeHandler,
    children,
    loading,
    size,
    type,
    modalIcon = true,
    closeable,
    variant,
  } = props;
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          dispatch(closeModal());
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "auto";
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [show]);
  if (children && children.length && typeof children !== "string") {
    return (
      <ModalWrapper show={show}>
        <CloseableArea
          onClick={
            loading || !closeHandler ? () => false : () => closeHandler()
          }
        />
        <Container
          modalIcon={modalIcon}
          size={size}
          type={type}
          variant={variant}
        >
          {children &&
          children?.find(
            (child: any) => child?.type?.displayName === "ModalHeader",
          )
            ? cloneElement(
                children?.find(
                  (child: any) => child?.type?.displayName === "ModalHeader",
                ),
                { modalIcon, type, variant },
              )
            : null}
          {closeable && (
            <CloseButton
              type={type}
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              <CloseButtunIcon
                type={type}
                className="me-close_FILL0_wght400_GRAD0_opsz48-21"
              />
            </CloseButton>
          )}
          {children &&
          children?.find(
            (child: any) => child?.type?.displayName === "ModalBody",
          )
            ? cloneElement(
                children?.find(
                  (child: any) => child?.type?.displayName === "ModalBody",
                ),
                { type, variant },
              )
            : null}
          {children &&
          children?.find(
            (child: any) => child?.type?.displayName === "ModalFooter",
          )
            ? cloneElement(
                children?.find(
                  (child: any) => child?.type?.displayName === "ModalFooter",
                ),
              )
            : null}
        </Container>
      </ModalWrapper>
    );
  } else if (
    children &&
    typeof children === "object" &&
    typeof children !== "string"
  ) {
    return (
      <ModalWrapper show={show}>
        <CloseableArea
          onClick={
            loading || !closeHandler ? () => false : () => closeHandler()
          }
        />
        <Container
          modalIcon={modalIcon}
          size={size}
          type={type}
          variant={variant}
        >
          {closeable && (
            <CloseButton
              type={type}
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              <CloseButtunIcon
                type={type}
                className="me-close_FILL0_wght400_GRAD0_opsz48-21"
              />
            </CloseButton>
          )}
          {children &&
            children?.type?.displayName === "ModalHeader" &&
            cloneElement(children, { modalIcon, type, variant })}
          {children &&
            children?.type?.displayName === "ModalBody" &&
            cloneElement(children, { type, variant })}
          {children &&
            children?.type?.displayName === "ModalFooter" &&
            cloneElement(children)}
        </Container>
      </ModalWrapper>
    );
  } else {
    return (
      <ModalWrapper show={show}>
        <CloseableArea
          onClick={
            loading || !closeHandler ? () => false : () => closeHandler()
          }
        />
        <Container
          modalIcon={modalIcon}
          size={size}
          type={type}
          variant={variant}
        >
          {closeable && (
            <CloseButton
              type={type}
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              <CloseButtunIcon
                type={type}
                className="me-close_FILL0_wght400_GRAD0_opsz48-21"
              />
            </CloseButton>
          )}
          {children}
        </Container>
      </ModalWrapper>
    );
  }
};

Modal.displayName = "Modal";

export default Modal;
