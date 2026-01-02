import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/school-info', label: 'School Info' },
    { to: '/services', label: 'Services' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/admission', label: 'Admission' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50">
      {/* Blur Background */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="group">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 rounded-full text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/donate"
              className="ml-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition flex items-center gap-2"
            >
              <Heart size={18} fill="white" />
              Donate
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200"
          >
            <nav className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 hover:bg-cyan-50 hover:text-cyan-600 transition rounded-xl text-gray-700"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/donate"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-3 rounded-xl text-center flex items-center justify-center gap-2"
              >
                <Heart size={18} fill="white" />
                Donate Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}