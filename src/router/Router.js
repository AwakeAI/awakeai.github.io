// ** Router imports
import {useRoutes} from "react-router-dom";

// ** GetRoutes
import {getRoutes} from "./routes";

// ** Hooks Imports

const Router = () => {
    // ** Hooks

    const allRoutes = getRoutes();

    const routes = useRoutes([...allRoutes]);

    return routes;
};

export default Router;
