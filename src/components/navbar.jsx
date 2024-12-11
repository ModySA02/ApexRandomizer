import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useState } from "react";

export default function Navbar({ toggleTheme, isDarkMode }) {
    const { user } = useContext(UserContext);
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <header className="fixed w-full p-3 flex flex-col z-10 border-b border-primary2 bg-accent3 dark:bg-accent3Dark">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <Link to='/' className='flex items-center gap-8 shadow-inner'>
                    <img className='w-32 h-32 bg-primary2 dark:bg-primary2Dark rounded-full' src="./logo.png" alt="" />
                    <span className='font-bold text-4xl text-primary2 dark:text-secondary1Dark mb-1'>Apex Randomizer</span>
                </Link>

                {/* Theme Toggle Button */}
                <button onClick={toggleTheme} className="bg-primary1 text-accent3 py-2 px-4 rounded dark:bg-primary2Dark dark:text-secondary1Dark">
                    Switch to {isDarkMode ? 'Neon' : 'Original'} Theme
                </button>

                {/* Mobile Menu */}
                <button className="sm:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
                    <i className="fi fi-rr-menu-burger text-primary2"></i>
                </button>
                
                <div className="text-primary2 dark:text-secondary1Dark text-4xl">
                    Made by Mody
                    <span className="text-xs">with help of abdo</span>
                </div>
            </div>
            {/* Mobile Menu opened */}
            {mobileMenu && (
                <div className="sm:hidden mt-4">
                    <div className="flex flex-col gap-4 bg-secondary1 rounded-lg p-4 shadow-lg">
                        {/* Mobile Search */}
                        <div className="flex items-center gap-2 bg-white rounded-lg p-2">
                            <i className="fi fi-rs-search text-primary2"></i>
                            <input 
                                type="text" 
                                placeholder="Search events..." 
                                className="w-full outline-none bg-transparent"
                            />
                        </div>
                        
                        {/* Mobile Menu Items */}
                        <div className="flex flex-col gap-2">
                            <Link to="/" className="text-primary2 py-2">Event Location</Link>
                            <Link to="/" className="text-primary2 py-2">Event Date & Time</Link>
                            <Link to="/" className="text-primary2 py-2">Invite Attendees</Link>
                        </div>
                    </div>
                    <Link to={user ? '/account' : '/login'}
                        className="bg-secondary2 rounded-full w-full mx-auto px-3 py-2 mt-4 text-primary2 flex items-center gap-2"
                        onClick={() => setMobileMenu(false)}
                    >
                        <i className="fi fi-rr-user"></i>
                        {user ? user.name : 'Login'}
                    </Link>
                </div>
            )}
        </header>
    );
}
