import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Twitter, Facebook } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-32 pb-40 bg-brand-white min-h-screen">
            <div className="container-custom">
                <div className="text-center mb-24 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-light text-brand-black">Connect with Precision</h1>
                    <p className="text-brand-asphalt text-[10px] uppercase tracking-[0.4em]">Inquiries, Support, and Bespoke Hardware</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Contact Info */}
                    <div className="space-y-16">
                        <div className="space-y-12">
                            <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-black border-b border-brand-silver pb-6">Location & Details</h2>

                            <div className="space-y-8">
                                <div className="flex items-start space-x-6">
                                    <MapPin size={20} className="text-brand-red mt-1" />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-brand-concrete font-bold mb-2">Flagship Showroom</p>
                                        <p className="text-lg font-light text-brand-black">12 Precision Way, GRA Phase II,<br />Port Harcourt, Nigeria</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <Mail size={20} className="text-brand-red mt-1" />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-brand-concrete font-bold mb-2">Email Deployment</p>
                                        <p className="text-lg font-light text-brand-black">hardware@phcpowerbike.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <Phone size={20} className="text-brand-red mt-1" />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-brand-concrete font-bold mb-2">Direct Command</p>
                                        <p className="text-lg font-light text-brand-black">+234 (0) 800 123 4567</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-12 border-t border-brand-silver">
                            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-black mb-8">Social Intelligence</h2>
                            <div className="flex space-x-8">
                                <a href="#" className="text-brand-asphalt hover:text-brand-red transition-colors"><Instagram size={20} /></a>
                                <a href="#" className="text-brand-asphalt hover:text-brand-red transition-colors"><Twitter size={20} /></a>
                                <a href="#" className="text-brand-asphalt hover:text-brand-red transition-colors"><Facebook size={20} /></a>
                            </div>
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <div className="bg-brand-offwhite p-12 lg:p-16 shadow-sm border border-brand-silver/30">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase tracking-widest font-bold text-brand-asphalt px-1">Full Name</label>
                                    <input type="text" className="w-full bg-white border border-brand-silver px-6 py-4 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] uppercase tracking-widest font-bold text-brand-asphalt px-1">Email Address</label>
                                    <input type="email" className="w-full bg-white border border-brand-silver px-6 py-4 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[9px] uppercase tracking-widest font-bold text-brand-asphalt px-1">Subject</label>
                                <select className="w-full bg-white border border-brand-silver px-6 py-4 text-sm focus:outline-none focus:border-brand-red transition-colors appearance-none">
                                    <option>Hardware Inquiry</option>
                                    <option>Bespoke Customization</option>
                                    <option>Safety Gear Support</option>
                                    <option>Technical Deployment</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[9px] uppercase tracking-widest font-bold text-brand-asphalt px-1">Transmission</label>
                                <textarea rows="6" className="w-full bg-white border border-brand-silver px-6 py-4 text-sm focus:outline-none focus:border-brand-red transition-colors resize-none"></textarea>
                            </div>

                            <button type="submit" className="w-full btn-primary bg-brand-black text-white hover:bg-brand-red py-6 flex items-center justify-center space-x-3 group transition-all duration-500">
                                <span>Send Transmission</span>
                                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
