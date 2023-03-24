// ** React Imports
import {Navigate} from "react-router-dom";
import {Suspense, useContext} from "react";

// ** Context Imports
import {AbilityContext} from "@src/utility/context/Can";

// ** Spinner Import
import Spinner from "../spinner/Loading-spinner";

const PrivateRoute = ({children, route}) => {
    // ** Hooks & Vars
    const ability = useContext(AbilityContext);
    const user = JSON.parse(localStorage.getItem("userData"));

    if (route) {
        let action = null;
        let resource = null;
        let restrictedRoute = false;

        if (route.meta) {
            action = route.meta.action;
            resource = route.meta.resource;
            restrictedRoute = route.meta.restricted;
        }
        if (!user) {
            return <Navigate to="/home"/>;
        }
        if (user && restrictedRoute) {
            return <Navigate to="/home"/>;
        }
        if (user && restrictedRoute && user.role === "client") {
            return <Navigate to="/home"/>;
        }
        if (user && !ability.can(action || "read", resource)) {
            return <Navigate to="/home" replace/>;
        }
    }

    return (
        <Suspense fallback={<Spinner className="content-loader"/>}>
            {children}
        </Suspense>
    );
};

export default PrivateRoute;
