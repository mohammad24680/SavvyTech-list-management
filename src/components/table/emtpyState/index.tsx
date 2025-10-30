import { Container, Message } from "./style";

const EmptyState = ({
  message,
  height,
  width,
}: {
  message?: string;
  height?: number;
  width?: string;
}) => {
  return (
    <Container>
      <img
        height={height || 60}
        width={width}
        src="/assets/emptyState.svg"
        alt="Meboka"
        className={!width ? "w-4/6" : ""}
      />
      <Message>
        {message ? message : "در این جدول محتوایی ثبت نشده است!"}
      </Message>
    </Container>
  );
};

export default EmptyState;
