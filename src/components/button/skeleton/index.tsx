import { Container, ShimmerWrapper, Shimmer } from "./style";

const ShimmerComponent = () => {
  return (
    <ShimmerWrapper>
      <Shimmer />
    </ShimmerWrapper>
  );
};
const ButtonSkeleton = ({
  size = "md",
  ...rest
}: {
  size?: string;
  rest?: any;
}) => {
  return (
    <Container data-testid={"button-skeleton-loader"} size={size} {...rest}>
      <ShimmerComponent />
    </Container>
  );
};

export default ButtonSkeleton;
