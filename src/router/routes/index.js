// ** React Imports
import {Fragment, lazy} from "react";

// ** Layouts
import BlankLayout from "@layouts/BlankLayout";

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";

// ** Utils
import {isObjEmpty} from "@utils";

const getLayout = {
    blank: <BlankLayout/>
};

// ** Document title
const TemplateTitle = "%s - AwakeAI";

// ** Default Route
const DefaultAdminHomeRoute = "/";

const Home = lazy(() => import("../../views/Home"));

// ** Merge Routes
const Routes = [
    {
        path: "/",
        element: <Home/>,
        meta: {
            layout: "blank"
        }
    }
];

const getRouteMeta = (route) => {
    if (isObjEmpty(route.element.props)) {
        if (route.meta) {
            return {routeMeta: route.meta};
        } else {
            return {};
        }
    }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
    const LayoutRoutes = [];

    if (Routes) {
        Routes.filter((route) => {
            let isBlank = false;
            // ** Checks if Route layout or Default layout matches current layout
            if (
                (route.meta && route.meta.layout && route.meta.layout === layout) ||
                ((route.meta === undefined || route.meta.layout === undefined) &&
                    defaultLayout === layout)
            ) {
                const RouteTag = PublicRoute;

                // ** Check for public or private route
                if (route.meta) {
                    route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
                }
                if (route.element) {
                    const Wrapper =
                        // eslint-disable-next-line multiline-ternary
                        isObjEmpty(route.element.props) && isBlank === false
                            ? // eslint-disable-next-line multiline-ternary
                            LayoutWrapper
                            : Fragment;

                    route.element = (
                        <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
                            <RouteTag route={route}>{route.element}</RouteTag>
                        </Wrapper>
                    );
                }

                // Push route to LayoutRoutes
                LayoutRoutes.push(route);
            }
            return LayoutRoutes;
        });
    }
    return LayoutRoutes;
};

const getRoutes = () => {
    const defaultLayout = "blank";
    const layouts = ["blank"];

    const AllRoutes = [];

    layouts.forEach((layoutItem) => {
        const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

        AllRoutes.push({
            path: "/",
            element: getLayout[layoutItem] || getLayout[defaultLayout],
            children: LayoutRoutes
        });
    });
    return AllRoutes;
};

export {DefaultAdminHomeRoute, TemplateTitle, Routes, getRoutes};
