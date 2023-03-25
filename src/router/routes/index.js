// ** React Imports
import {Fragment, lazy} from "react";

// ** Layouts
import BlankLayout from "@layouts/BlankLayout";

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";

// ** Default Route
const Home = lazy(() => import("../../views/Home"));

// ** Merge Routes
const Routes = [
    {
        path: "/",
        element: <Home/>
    }
];

const getRoutes = () => {
    const AllRoutes = [];
    const LayoutRoutes = [];

    Routes.filter((route) => {
        route.element = (
            <Fragment>
                <PublicRoute route={route}>{route.element}</PublicRoute>
            </Fragment>
        );
        // Push route to LayoutRoutes
        LayoutRoutes.push(route);

        return LayoutRoutes;
    });

    AllRoutes.push({
        path: "/",
        element: (<BlankLayout/>),
        children: LayoutRoutes
    });
    return AllRoutes;

};

export {Routes, getRoutes};
