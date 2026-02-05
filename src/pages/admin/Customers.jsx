import { motion } from 'framer-motion';
import { Search, User, Mail, MapPin, Calendar, MoreVertical, ShieldCheck } from 'lucide-react';

const Customers = () => {
    const customers = [
        { id: 1, name: 'Alex Precision', email: 'alex@precision.com', location: 'Lekki, Lagos', joined: 'Oct 2024', orders: 12, spent: '$42,500', tier: 'Elite' },
        { id: 2, name: 'Sarah Moto', email: 'sarah@moto.com', location: 'GRA II, PHC', joined: 'Sep 2024', orders: 4, spent: '$1,850', tier: 'Pro' },
        { id: 3, name: 'Bose Gear', email: 'bose@gear.com', location: 'Abuja, FCT', joined: 'Aug 2024', orders: 1, spent: '$1,200', tier: 'Standard' },
    ];

    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-3xl font-light text-white">Pilot Database</h1>
                    <p className="text-brand-concrete text-[10px] uppercase tracking-[0.4em] mt-2">Managing the Portharcourt Powerbike Community</p>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { label: 'Total Pilots', value: '1,842' },
                    { label: 'Elite Tier', value: '45' },
                    { label: 'New This Month', value: '128' },
                    { label: 'Active Retention', value: '94%' },
                ].map((stat, i) => (
                    <div key={i} className="bg-brand-charcoal p-8 border border-white/5 space-y-2">
                        <p className="text-[9px] uppercase tracking-widest text-brand-concrete font-bold">{stat.label}</p>
                        <h3 className="text-2xl font-light text-white">{stat.value}</h3>
                    </div>
                ))}
            </div>

            {/* Table */}
            <div className="bg-brand-charcoal border border-white/5 shadow-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/5 bg-brand-black/20">
                                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-brand-concrete">Pilot</th>
                                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-brand-concrete">Base Location</th>
                                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-brand-concrete">Deployment History</th>
                                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-brand-concrete">Total Investment</th>
                                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-brand-concrete">Tier Status</th>
                                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-brand-concrete">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {customers.map((pilot) => (
                                <tr key={pilot.id} className="group hover:bg-white/5 transition-colors">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-10 h-10 bg-brand-black rounded-full flex items-center justify-center text-brand-concrete border border-white/5">
                                                <User size={18} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-white">{pilot.name}</p>
                                                <p className="text-[10px] text-brand-concrete uppercase">{pilot.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center text-xs text-white/70">
                                            <MapPin size={12} className="mr-2 text-brand-asphalt" />
                                            {pilot.location}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-sm text-white">
                                        {pilot.orders} Orders
                                    </td>
                                    <td className="px-8 py-6 font-light text-white">{pilot.spent}</td>
                                    <td className="px-8 py-6">
                                        <span className={`inline-flex items-center text-[9px] uppercase tracking-widest font-bold px-4 py-1 rounded-full ${pilot.tier === 'Elite' ? 'bg-brand-red/10 text-brand-red' : pilot.tier === 'Pro' ? 'bg-blue-500/10 text-blue-500' : 'bg-brand-asphalt text-brand-concrete'}`}>
                                            {pilot.tier === 'Elite' && <ShieldCheck size={12} className="mr-2" />}
                                            {pilot.tier}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <button className="text-brand-concrete hover:text-white transition-colors">
                                            <MoreVertical size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Customers;
