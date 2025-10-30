import {
  Container,
  Row,
  TextCell,
  HeaderRow,
  HeaderCell,
  HeaderIconCell,
  BadgeCell,
  IconCell,
  Circle,
  HeaderBadgeCell,
} from "./style";
import Shimmer from "./shimmer";

const TableSkeleton = ({
  columns,
  rowCount,
}: {
  columns: string[];
  rowCount: number;
}) => {
  const Rows = [];
  for (let j = 0; j < rowCount - 1; j++) {
    Rows.push(j);
  }
  return (
    <Container>
      <Shimmer />
      <HeaderRow>
        {columns.map((item: string, index: number) => {
          if (columns.length - 1 === index) {
            switch (item) {
              case "text":
                return <HeaderCell key={index + Math.random()} />;
              case "badge":
                return <HeaderBadgeCell key={index + Math.random()} />;
              case "icon":
                return <HeaderIconCell key={index + Math.random()} />;
              default:
                return <HeaderCell key={index + Math.random()} />;
            }
          } else {
            return <HeaderCell key={index + Math.random()} />;
          }
        })}
      </HeaderRow>
      {Rows.map((rowItem, rowIndex) => {
        const width = Math.floor(Math.random() * 100);
        return (
          <Row key={rowIndex + Math.random()}>
            {columns.map((item, index) => {
              switch (item) {
                case "text":
                  return <TextCell width={width} key={index + Math.random()} />;
                case "badge":
                  return <BadgeCell key={index + Math.random()} />;
                case "icon":
                  return (
                    <IconCell key={index + Math.random()}>
                      <Circle />
                      <Circle />
                      <Circle />
                    </IconCell>
                  );
                default:
                  return <TextCell key={index + Math.random()} />;
              }
            })}
          </Row>
        );
      })}
    </Container>
  );
};

export default TableSkeleton;
