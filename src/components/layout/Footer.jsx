import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-brand-black border-t border-brand-charcoal pt-24 pb-12">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-24">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link to="/" className="text-xl font-bold tracking-[0.4em] uppercase text-white">
                            Power<span className="text-brand-silver">bike</span>
                        </Link>
                        <p className="text-brand-concrete/60 text-sm leading-relaxed max-w-xs">
                            Redefining urban mobility through precision engineering and minimalist design.
                            Built for the city, refined for the street.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Equipment</h4>
                        <ul className="space-y-4">
                            <li><Link to="/shop" className="text-sm text-brand-concrete hover:text-white transition-colors">The Collection</Link></li>
                            <li><Link to="/shop" className="text-sm text-brand-concrete hover:text-white transition-colors">Powerbikes</Link></li>
                            <li><Link to="/shop" className="text-sm text-brand-concrete hover:text-white transition-colors">Riding Gear</Link></li>
                            <li><Link to="/shop" className="text-sm text-brand-concrete hover:text-white transition-colors">Safety</Link></li>
                        </ul>
                    </div>


                    {/* Company */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Company</h4>
                        <ul className="space-y-4">
                            <li><Link to="/philosophy" className="text-sm text-brand-concrete hover:text-white transition-colors">Our Philosophy</Link></li>
                            <li><Link to="/contact" className="text-sm text-brand-concrete hover:text-white transition-colors">Contact</Link></li>
                            <li><Link to="/support" className="text-sm text-brand-concrete hover:text-white transition-colors">Support</Link></li>
                            <li><Link to="/admin" className="text-sm text-brand-concrete hover:text-white transition-colors">Admin Portal</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Stay Connected</h4>
                        <p className="text-sm text-brand-concrete">Sign up for updates on new drops.</p>
                        <div className="flex border-b border-brand-asphalt py-2">
                            <input
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                className="bg-transparent border-none text-[10px] tracking-widest focus:outline-none w-full placeholder:text-brand-asphalt"
                            />
                            <button className="text-[10px] tracking-widest font-bold uppercase hover:text-brand-silver transition-colors">Join</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-charcoal space-y-4 md:space-y-0 text-[10px] tracking-widest text-brand-asphalt">
                    <p>© 2026 POWERBIKE. ALL RIGHTS RESERVED.</p>
                    <div className="flex space-x-8">
                        <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
                        <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
