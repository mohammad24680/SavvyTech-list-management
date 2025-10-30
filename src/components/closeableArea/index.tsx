import { CloseArea } from "./style";

const CloseableArea = ({ onClick }: { onClick: (e: boolean) => void }) => {
  return (
    <CloseArea
      onClick={() => {
        onClick(false);
      }}
    />
  );
};

export default CloseableArea;
