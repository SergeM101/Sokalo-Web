// in src/components/ProtectedRoute.tsx

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    // Check if the user is authenticated
    if (!isAuthenticated) {
        // If not, redirect them to the login page
        return <Navigate to="/login" replace />;
    }

    // If they are authenticated, render the child route component (e.g., the dashboard)
    return <Outlet />;
};

export default ProtectedRoute;