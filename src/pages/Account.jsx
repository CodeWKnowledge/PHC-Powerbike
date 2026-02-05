import { motion } from 'framer-motion';
import { User, Package, Settings, LogOut, ChevronRight, MapPin, CreditCard } from 'lucide-react';

const Account = () => {
    const orders = [
        { id: 'ORD-7721', date: 'Oct 24, 2025', status: 'Delivered', total: '$12,400', items: 1 },
        { id: 'ORD-6540', date: 'Sep 12, 2025', status: 'Processing', total: '$920', items: 1 },
    ];

    return (
        <div className="pt-32 pb-40 bg-brand-white min-h-screen">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-64 space-y-12">
                        <div className="flex items-center space-x-6">
                            <div className="w-16 h-16 bg-brand-offwhite rounded-full flex items-center justify-center border border-brand-silver/30 text-brand-black shadow-sm">
                                <User size={24} />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-brand-black leading-tight">Alex Precision</h2>
                                <p className="text-[10px] uppercase tracking-widest text-brand-asphalt">Pilot ID: #8821</p>
                            </div>
                        </div>

                        <nav className="space-y-2">
                            {[
                                { name: 'Dashboard', icon: User, active: true },
                                { name: 'Orders', icon: Package },
                                { name: 'Settings', icon: Settings },
                                { name: 'Sign Out', icon: LogOut, danger: true },
                            ].map((item) => (
                                <button
                                    key={item.name}
                                    className={`w-full flex items-center justify-between px-6 py-4 text-[10px] uppercase tracking-widest font-bold transition-all ${item.active ? 'bg-brand-black text-white shadow-lg' : item.danger ? 'text-brand-red hover:bg-brand-red/5' : 'text-brand-asphalt hover:bg-brand-offwhite'}`}
                                >
                                    <div className="flex items-center space-x-4">
                                        <item.icon size={16} />
                                        <span>{item.name}</span>
                                    </div>
                                    <ChevronRight size={12} className={item.active ? 'opacity-100' : 'opacity-20'} />
                                </button>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-grow space-y-16">
                        {/* Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-brand-offwhite p-10 border border-brand-silver/30 shadow-sm space-y-4">
                                <div className="flex justify-between items-start">
                                    <MapPin size={20} className="text-brand-red" />
                                    <button className="text-[9px] uppercase tracking-widest font-bold text-brand-asphalt hover:text-brand-black transition-colors">Edit</button>
                                </div>
                                <div>
                                    <h3 className="text-[10px] uppercase tracking-widest font-bold text-brand-black mb-4">Deployment Base</h3>
                                    <p className="text-sm font-light text-brand-asphalt leading-relaxed">
                                        122 Innovation Park, Phase I<br />
                                        Lekki, Lagos, Nigeria
                                    </p>
                                </div>
                            </div>

                            <div className="bg-brand-offwhite p-10 border border-brand-silver/30 shadow-sm space-y-4">
                                <div className="flex justify-between items-start">
                                    <CreditCard size={20} className="text-brand-red" />
                                    <button className="text-[9px] uppercase tracking-widest font-bold text-brand-asphalt hover:text-brand-black transition-colors">Manage</button>
                                </div>
                                <div>
                                    <h3 className="text-[10px] uppercase tracking-widest font-bold text-brand-black mb-4">Payment Intelligence</h3>
                                    <p className="text-sm font-light text-brand-asphalt leading-relaxed">
                                        Mastercard ending in **** 8821<br />
                                        Exp: 10/2026
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Recent Orders */}
                        <div className="space-y-8">
                            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-black border-b border-brand-silver pb-6">Recent Deployments</h2>
                            <div className="space-y-4">
                                {orders.map((order) => (
                                    <div key={order.id} className="bg-white border border-brand-silver/50 p-8 flex flex-col md:flex-row justify-between items-center group hover:shadow-md transition-all duration-500">
                                        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-12">
                                            <div>
                                                <p className="text-[9px] uppercase tracking-widest font-bold text-brand-asphalt">Order ID</p>
                                                <p className="text-sm font-medium text-brand-black">{order.id}</p>
                                            </div>
                                            <div>
                                                <p className="text-[9px] uppercase tracking-widest font-bold text-brand-asphalt">Date</p>
                                                <p className="text-sm font-medium text-brand-black">{order.date}</p>
                                            </div>
                                            <div>
                                                <p className="text-[9px] uppercase tracking-widest font-bold text-brand-asphalt">Status</p>
                                                <span className={`text-[10px] px-3 py-1 font-bold uppercase tracking-widest rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-brand-offwhite text-brand-asphalt'}`}>
                                                    {order.status}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-6 md:mt-0 flex items-center space-x-12">
                                            <div className="text-right">
                                                <p className="text-[9px] uppercase tracking-widest font-bold text-brand-asphalt">Total</p>
                                                <p className="text-sm font-bold text-brand-black">{order.total}</p>
                                            </div>
                                            <button className="p-3 bg-brand-offwhite border border-brand-silver/30 hover:bg-brand-black hover:text-white transition-all duration-300">
                                                <ChevronRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
