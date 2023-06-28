// ** Router imports
import {Navigate, useRoutes} from "react-router-dom";

// ** GetRoutes
import {getRoutes} from "./routes";

// ** Hooks Imports

const Router = () => {
  // ** Hooks

  const allRoutes = getRoutes();

  return useRoutes([...allRoutes], {
    path: "*",
    element: <Navigate to="/" />
  });
};

export default Router;
