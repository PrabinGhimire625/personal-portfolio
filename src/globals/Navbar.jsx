import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="/src/assets/aboutImg.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Name */}
          <h1 className="text-2xl font-bold text-purple-600">Prabin</h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#skill", label: "Skills" },
            { href: "#service", label: "Services" },
            { href: "#project", label: "Projects" },
          ].map((item, index) => (
            <li
              key={index}
              className="hover:bg-purple-500 hover:text-white rounded-lg transition"
            >
              <a href={item.href} className="block px-4 py-2">
                {item.label}
              </a>
            </li>
          ))}
        </ul>


        {/* Contact Button */}
        <a
          href="#contact"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
