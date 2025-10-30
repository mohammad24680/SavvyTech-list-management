import useBreadcrumbs from "use-react-router-breadcrumbs";
import routes from "../../App/routes";
import { NavLink } from "react-router-dom";
import { Container, PageTitleContainer, Text } from "./style";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes, { disableDefaults: true });
  const description: any = breadcrumbs[breadcrumbs.length - 1].match?.route;
  return (
    <div className="w-full mx-auto px-5">
      <Container>
        <div className="items-container">
          {breadcrumbs.map(({ match, breadcrumb }) => {
            return (
              <div className="breadcrumbs-item" key={match.pathname}>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#283593" : "rgba(0, 0, 0, 0.6)",
                  })}
                  className="breadcrumbs-link"
                  key={match.pathname}
                  to={match.pathname}
                >
                  {breadcrumb}
                </NavLink>
              </div>
            );
          })}
        </div>
        <div className="description-container">
          {description?.description && (
            <PageTitleContainer>
              <Text>{description?.description}</Text>
            </PageTitleContainer>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
