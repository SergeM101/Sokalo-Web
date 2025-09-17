// in src/components/layout/guest-navbar.tsx

import { Link } from "react-router-dom";
import { Button } from "../ui/button"; // Assuming shadcn/ui button

const GuestNavbar = () => {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    SOKALO
                </Link>
                <div className="space-x-4">
                    <Button asChild variant="ghost">
                        <Link to="/browse-stores">Browse Stores</Link>
                    </Button>
                    <Button asChild>
                        <Link to="/login">Login</Link>
                    </Button>
                    <Button asChild>
                        <Link to="/business">Business</Link>
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default GuestNavbar;