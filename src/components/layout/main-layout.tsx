// in src/components/layout/main-layout.tsx

import { Outlet } from "react-router-dom";
import Navbar from "./navbar"; 

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};
export default MainLayout;