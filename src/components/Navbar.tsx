import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    // { name: 'Gallery', path: '/gallery' },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 sm:h-24"> {/* Increased height */}

          <Link to="/" className="flex items-center space-x-4 group">
            <motion.div
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.3 }}
              className="h-14 sm:h-16 md:h-18 lg:h-20" // Logo bigger & responsive
            >
              <img
                src="/LOGO.png"
                alt="Paramount Cutting Tools Logo"
                className="h-full w-auto object-contain"
              />
            </motion.div>

            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold 
              bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Paramount Cutting Tools
            </span>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="relative group">
                <span
                  className={`text-base lg:text-lg font-medium transition-colors duration-200 ${location.pathname === link.path
                    ? 'text-orange-500'
                    : 'text-slate-200 hover:text-orange-400'
                    }`}
                >
                  {link.name}
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600"
                  initial={{ width: 0 }}
                  animate={{ width: location.pathname === link.path ? '100%' : 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-3"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </motion.button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-slate-900/98 backdrop-blur-md"
        >
          <div className="px-6 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-5 rounded-lg text-lg transition-colors ${location.pathname === link.path
                  ? 'bg-orange-500/20 text-orange-400'
                  : 'text-slate-200 hover:bg-slate-800'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
