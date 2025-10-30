import { Suspense } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import MetaTags from "../components/metaTag/index";
import Loading from "../components/loading";
import "./ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <ToastContainer
          position="bottom-left"
          autoClose={parseInt(import.meta.env.VITE_TOASTER_CLOSE_TIMEOUT)}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          {routes.map((RouteItems: any, key: number) => {
            return (
              <Route
                key={key}
                path={RouteItems.path}
                element={
                  <RouteItems.layout>
                    <Suspense fallback={<Loading />}>
                      <RouteItems.Component />
                      <MetaTags title={RouteItems.name} />
                    </Suspense>
                  </RouteItems.layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
