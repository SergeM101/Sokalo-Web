//import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LogOut, Home, Settings, Eye, Star, Box } from "lucide-react";
import logo from "@/../public/logo.png";
import { useAuth } from "@/hooks/useAuth";

const navLinks = [
	{ label: "Dashboard", icon: Home, to: "/store-dashboard" },
	{ label: "Settings", icon: Settings, to: "/store-settings" },
	{ label: "Views", icon: Eye, to: "/store-views" },
	{ label: "Reviews", icon: Star, to: "/store-reviews" },
	{ label: "Items", icon: Box, to: "/store-items" },
	// "Public view" link will be added inside the Sidebar component
];
const Sidebar = () => {
	const { logout, store } = useAuth();
	const location = useLocation();
	const sidebarLinks = [
		...navLinks,
		{ label: "Public view", icon: Eye, to: `/stores/${store?.storeID ?? ""}` },
	];
	return (
		<aside className="fixed z-30 left-0 top-0 h-full w-64 bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl flex flex-col border-r border-gray-700">
			{/* Logo and Title */}
			<div className="flex items-center gap-3 px-6 py-6 border-b border-gray-700">
				<img src={logo} alt="Logo" className="h-8 w-8" />
				<span className="text-xl font-bold text-white">Sokalo</span>
			</div>
			<nav className="flex-1 py-6 px-2 flex flex-col gap-1">
				{sidebarLinks.map(({ label, icon: Icon, to }) => (
					<NavLink
						key={label}
						to={to}
						className={({ isActive }) =>
							`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors duration-200 text-gray-300 hover:bg-gray-700/70 hover:text-white ${
								(isActive || location.pathname.startsWith(to)) ? "bg-gray-700/80 text-white" : ""
							}`
						}
					>
						<Icon className="h-5 w-5" />
						<span>{label}</span>
					</NavLink>
				))}
			</nav>

			{/* Logout Button */}
			<div className="px-6 py-4 border-t border-gray-700">
				<button
					className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-red-400 hover:bg-red-900/30 hover:text-red-300 transition-colors duration-200"
					onClick={logout}
				>
					<LogOut className="h-5 w-5" />
					Logout
				</button>
			</div>
		</aside>
	);
};
export default Sidebar;
