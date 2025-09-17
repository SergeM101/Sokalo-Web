// in src/components/layout/user-navbar.tsx

import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const UserNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/dashboard" className="text-2xl font-bold text-blue-600">
                    SOKALO
                </Link>
                <div className="space-x-4">
                    <Button asChild variant="ghost">
                        <Link to="/dashboard">Dashboard</Link>
                    </Button>
                    <Button onClick={handleLogout} variant="destructive">
                        Logout
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default UserNavbar;