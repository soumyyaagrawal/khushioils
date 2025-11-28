    // components/Navbar.jsx

    export default function Navbar() {
    // Define the navigation links
    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Products', href: '#' },
        { name: 'Process', href: '#' },
    ];

    return (
        // Outer container for the full navbar width and background
        <nav className="fixed top-0 left-0 w-full rounded-xl z-50">
        {/* Inner container for max width and the faded/semi-transparent background
            The background gradient is a guess based on the image.
        */}
        <div className="mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8 bg-transparent bg-opacity-50 backdrop-blur-sm shadow-lg rounded-[40px]">
            
            {/* Logo/Branding Placeholder - Currently showing "EcoHarvest" text */}
            
            <img src="/BhagwatiLogo.svg" alt="EcoHarvest Logo" className="h-10 w-auto" />

            {/* Navigation Links (Hidden on small screens, shown on medium/large) */}
            <div className="hidden md:flex flex-grow justify-center space-x-10">
            {navLinks.map((link) => (
                <a 
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white hover:text-gray-300 transition duration-150"
                >
                {link.name}
                </a>
            ))}
            </div>
            
            {/* Contact Button */}
            <div className="flex items-center">
            <button
                type="button"
                className="rounded-full border border-white px-6 py-2 text-base font-medium text-white transition duration-150 hover:bg-gray-200 hover:text-gray-900"
            >
                Contact Us
            </button>
            </div>
            
            {/* Note: For a real app, you would need to add a Mobile Menu button 
                (often called a 'hamburger' menu) for screens smaller than 'md'. 
            */}
        </div>
        </nav>
    );
    };

