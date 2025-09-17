// in src/components/layout/main-layout.tsx

import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import GuestNavbar from "./guest-navbar"; // Import guest navbar
import UserNavbar from "./user-navbar";   // Import user navbar

const MainLayout = () => {
    const { isAuthenticated } = useAuth();

    return (
        <div>
            {isAuthenticated ? <UserNavbar /> : <GuestNavbar />}
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;