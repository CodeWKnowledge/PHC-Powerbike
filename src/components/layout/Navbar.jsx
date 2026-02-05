import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
    const { cartCount } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Collection', path: '/shop' },
        { name: 'Philosophy', path: '/#philosophy' },
        { name: 'Contact', path: '/contact' },
    ];

    const isHome = location.pathname === '/';
    const isDarkBg = isScrolled || (isHome && !isScrolled);
    const textColorClass = isDarkBg ? 'text-brand-offwhite' : 'text-brand-black';
    const linkColorClass = isDarkBg ? 'text-brand-concrete hover:text-white' : 'text-brand-asphalt hover:text-brand-black';

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-brand-black/95 backdrop-blur-md py-4 shadow-lg active-nav-dark'
                : 'bg-transparent py-8'
                }`}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Mobile Menu Toggle */}
                <button
                    className={`lg:hidden ${textColorClass}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {/* Logo */}
                <Link to="/" className={`text-xl font-bold tracking-[0.4em] uppercase ${isScrolled || isHome ? 'text-white' : 'text-brand-black'}`}>
                    Portharcourt<span className="text-brand-red"> Powerbike</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center space-x-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-[10px] uppercase tracking-[0.3em] font-medium transition-colors duration-300 ${linkColorClass}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Icons */}
                <div className={`flex items-center space-x-6 ${textColorClass}`}>
                    <button className="hover:text-red-500 transition-colors">
                        <Search size={18} strokeWidth={1.5} />
                    </button>
                    <Link to="/account" className="hover:text-red-500 transition-colors">
                        <User size={18} strokeWidth={1.5} />
                    </Link>
                    <Link to="/cart" className="relative hover:text-red-500 transition-colors">
                        <ShoppingBag size={18} strokeWidth={1.5} />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[8px] font-bold w-3 h-3 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                </div>


            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 right-0 bg-brand-charcoal border-t border-brand-asphalt lg:hidden"
                    >
                        <div className="flex flex-col p-8 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-sm uppercase tracking-widest text-brand-concrete hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
