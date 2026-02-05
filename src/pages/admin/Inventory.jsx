import { motion } from 'framer-motion';
import { Search, Plus, Filter, MoreVertical, ArrowUpRight, ArrowDownRight, Edit2, Trash2 } from 'lucide-react';
import { IMAGES } from '../../data/assets';

const Inventory = () => {
    const stockItems = [
        { id: 1, name: 'S1-Dark Obsidian', category: 'Powerbikes', stock: 12, price: '$12,400', status: 'In Stock', img: IMAGES.products.bike1 },
        { id: 2, name: 'Core Carbon Helmet', category: 'Helmets', stock: 45, price: '$850', status: 'In Stock', img: IMAGES.products.helmet1 },
        { id: 3, name: 'Urban Moto Boots', category: 'Boots', stock: 0, price: '$420', status: 'Out of Stock', img: IMAGES.products.boots1 },
        { id: 9, name: 'Urban Vest', category: 'Accessories', stock: 8, price: '$280', status: 'Low Stock', img: IMAGES.products.vest1 },
    ];

    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-3xl font-light text-white">Hardware Inventory</h1>
                    <p className="text-brand-concrete text-[10px] uppercase tracking-[0.4em] mt-2">Manage your urban deployment stock</p>
                </div>
                <button className="btn-primary flex items-center space-x-3 bg-brand-red hover:bg-red-600 border-none px-10">
                    <Plus size={18} />
                    <span>Deploy New Item</span>
                </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { label: 'Total Value', value: '$428,210', change: '+12.5%', isUp: true },
                    { label: 'Stock items', value: '1,240', change: '-2.1%', isUp: false },
                    { label: 'Pending Reorders', value: '14', change: 'Urgent', isUp: false, isUrgent: true },
                ].map((stat, i) => (
                    <div key={i} className="bg-brand-charcoal p-8 border border-white/5 shadow-xl space-y-4">
                        <p className="text-[10px] uppercase tracking-widest text-brand-concrete font-bold">{stat.label}</p>
                        <div className="flex justify-between items-end">
                            <h3 className="text-3xl font-light text-white">{stat.value}</h3>
                            <div className={`flex items-center text-[10px] font-bold px-2 py-1 rounded ${stat.isUp ? 'bg-green-500/10 text-green-500' : stat.isUrgent ? 'bg-brand-red/10 text-brand-red' : 'bg-brand-asphalt text-brand-concrete'}`}>
                                {stat.isUp ? <ArrowUpRight size={12} className="mr-1" /> : stat.isUrgent ? null : <ArrowDownRight size={12} className="mr-1" />}
                                {stat.change}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-grow relative">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-asphalt" size={18} />
                    <input
                        type="text"
                        placeholder="Search for ID or Hardware Name..."
                        className="w-full bg-brand-charcoal border border-white/5 px-16 py-4 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                    />
                </div>
                <button className="flex items-center space-x-3 bg-brand-charcoal border border-white/5 px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-white hover:bg-brand-asphalt transition-all">
                    <Filter size={16} />
                    <span>Filter</span>
                </button>
            </div>

            {/* Table */}
            <div className="bg-brand-charcoal border border-white/5 shadow-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/5 bg-brand-black/20">
                                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-brand-concrete">Hardware</th>
                                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-brand-concrete">Category</th>
                                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-brand-concrete">Stock</th>
                                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-brand-concrete">Price</th>
                                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-brand-concrete">Status</th>
                                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-brand-concrete">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {stockItems.map((item) => (
                                <tr key={item.id} className="group hover:bg-white/5 transition-colors">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-brand-black overflow-hidden border border-white/5">
                                                <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-white">{item.name}</p>
                                                <p className="text-[10px] text-brand-concrete uppercase">ID: #00{item.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-xs text-white/80">{item.category}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`text-sm font-medium ${item.stock === 0 ? 'text-brand-red font-bold' : 'text-white'}`}>{item.stock} Units</span>
                                    </td>
                                    <td className="px-8 py-6 font-light text-white">{item.price}</td>
                                    <td className="px-8 py-6">
                                        <span className={`text-[9px] uppercase tracking-widest font-bold px-3 py-1 rounded-full ${item.status === 'In Stock' ? 'bg-green-500/10 text-green-500' : item.status === 'Out of Stock' ? 'bg-brand-red/10 text-brand-red' : 'bg-brand-amber/10 text-brand-amber'}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-brand-concrete hover:text-white transition-colors">
                                                <Edit2 size={16} />
                                            </button>
                                            <button className="p-2 text-brand-concrete hover:text-brand-red transition-colors">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
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

export default Inventory;
