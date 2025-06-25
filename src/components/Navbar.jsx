import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Ujas_logo.jpeg"; // Adjust the path as necessary
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrolled ? "bg-white shadow-md" : "bg-softPink";

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
         {/* Logo */}
  <Link to="/">
    <img
      src={logo}
      alt="Ujas Trust Logo"
      className="h-10 w-auto"
    />
  </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-trustPurple font-medium items-center">
          <Link to="/" className="hover:text-purple-700 transition">Home</Link>
          <Link to="/about" className="hover:text-purple-700 transition">About</Link>
          <Link to="/work" className="hover:text-purple-700 transition">Our Work</Link>
          <Link to="/contact" className="hover:text-purple-700 transition">Contact</Link>
          <Link to="/donate" className="bg-trustPurple text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">Donate</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-trustPurple focus:outline-none">
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Slide-In */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[500px]" : "max-h-0"}`}>
        <div className="flex flex-col items-center bg-softPink px-4 pb-4 text-trustPurple font-medium space-y-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/work" onClick={() => setMenuOpen(false)}>Our Work</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/donate" onClick={() => setMenuOpen(false)} className="bg-trustPurple text-white px-4 py-2 rounded-full">Donate</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
