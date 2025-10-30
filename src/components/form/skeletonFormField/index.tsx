import { Container } from "./style";
import Shimmer from "./shimmer";

const FormFieldSkeleton = ({ variant }: { variant?: string }) => {
  return (
    <Container variant={variant}>
      <Shimmer />
    </Container>
  );
};

export default FormFieldSkeleton;
