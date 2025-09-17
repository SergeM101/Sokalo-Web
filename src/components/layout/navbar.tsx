// in src/components/layout/navbar.tsx
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const { theme, setTheme } = useTheme();

    // --- ADD THIS LINE FOR DEBUGGING ---
    console.log("Navbar isAuthenticated:", isAuthenticated);
    console.log("Navbar theme:", theme);
    // ------------------------------------


    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    SOKALO
                </Link>
                <div className="space-x-4">
                    {isAuthenticated ? (
                        // --- SHOW THESE LINKS IF LOGGED IN ---
                        <>
                    <Button asChild variant="ghost">
                        <Link to="/store-dashboard">Dashboard</Link>
                    </Button>
                    <Button onClick={logout} variant="destructive">
                        Logout
                    </Button>
                    <Button asChild>
                        <Link to="/about">About Us</Link>
                    </Button>
                    <Button asChild variant="ghost">
                        <Link to="/browse-stores">Browse Stores</Link>
                    </Button>
                    <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} variant="ghost" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                        </>
                    ) : (

                        // --- SHOW THESE LINKS IF LOGGED OUT ---
                        <>
                    <Button asChild variant="ghost">
                        <Link to="/browse-stores">Browse Stores</Link>
                    </Button>
                    <Button asChild>
                        <Link to="/login">Login</Link>
                    </Button>
                    <Button asChild>
                        <Link to="/business">Business</Link>
                    </Button>
                    <Button asChild>
                        <Link to="/about">About Us</Link>
                    </Button>
                    <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} variant="ghost" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;