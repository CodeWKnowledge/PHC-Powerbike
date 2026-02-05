import { motion } from 'framer-motion';
import { Search, Filter, Eye, Download, ChevronRight, Package, Truck, CheckCircle2, Clock } from 'lucide-react';

const Orders = () => {
    const orders = [
        { id: 'ORD-7721', customer: 'Alex Precision', email: 'alex@precision.com', date: 'Oct 24, 2025', total: '$12,400', status: 'Delivered', method: 'Credit Card' },
        { id: 'ORD-7722', customer: 'Sarah Moto', email: 'sarah@moto.com', date: 'Oct 25, 2025', total: '$850', status: 'Shipped', method: 'PayPal' },
        { id: 'ORD-7723', customer: 'Bose Gear', email: 'bose@gear.com', date: 'Oct 25, 2025', total: '$1,200', status: 'Processing', method: 'Transfer' },
        { id: 'ORD-7724', customer: 'David Core', email: 'david@core.com', date: 'Oct 26, 2025', total: '$15,600', status: 'Pending', method: 'Credit Card' },
    ];

    const getStatusStyles = (status) => {
        switch (status) {
            case 'Delivered': return 'bg-green-500/10 text-green-500';
            case 'Shipped': return 'bg-blue-500/10 text-blue-500';
            case 'Processing': return 'bg-brand-asphalt text-brand-concrete';
            case 'Pending': return 'bg-brand-red/10 text-brand-red';
            default: return 'bg-brand-offwhite text-brand-asphalt';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Delivered': return <CheckCircle2 size={12} className="mr-2" />;
            case 'Shipped': return <Truck size={12} className="mr-2" />;
            case 'Processing': return <Clock size={12} className="mr-2" />;
            case 'Pending': return <Package size={12} className="mr-2" />;
            default: return null;
        }
    };

    return (
        <div className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-3xl font-light text-white">Full Deployment Log</h1>
                    <p className="text-brand-concrete text-[10px] uppercase tracking-[0.4em] mt-2">Historical and Active Order Tracking</p>
                </div>
                <div className="flex space-x-4">
                    <button className="flex items-center space-x-3 bg-brand-charcoal border border-white/5 px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-white hover:bg-brand-asphalt transition-all">
                        <Download size={16} />
                        <span>Export Manifest</span>
                    </button>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-grow relative">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-asphalt" size={18} />
                    <input
                        type="text"
                        placeholder="Search by Order ID, Customer, or Email..."
                        className="w-full bg-brand-charcoal border border-white/5 px-16 py-4 text-sm text-white focus:outline-none focus:border-brand-red transition-all"
                    />
                </div>
                <div className="flex space-x-4">
                    <select className="bg-brand-charcoal border border-white/5 px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-white focus:outline-none appearance-none cursor-pointer">
                        <option>Status: All</option>
                        <option>Pending</option>
                        <option>Processing</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="bg-brand-charcoal border border-white/5 shadow-2xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/5 bg-brand-black/20">
                                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-brand-concrete">Order Manifest</th>
                                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-brand-concrete">Customer Intelligence</th>
                                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-brand-concrete">Deployment Date</th>
                                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-brand-concrete">Investment</th>
                                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-brand-concrete">Status</th>
                                <th className="px-8 py-6 text-[10px] uppercase tracking-widest font-bold text-brand-concrete">Analysis</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {orders.map((order) => (
                                <tr key={order.id} className="group hover:bg-white/5 transition-colors">
                                    <td className="px-8 py-6 font-medium text-white">{order.id}</td>
                                    <td className="px-8 py-6">
                                        <div>
                                            <p className="text-sm text-white/90">{order.customer}</p>
                                            <p className="text-[10px] text-brand-concrete uppercase">{order.email}</p>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-xs text-white/70">{order.date}</td>
                                    <td className="px-8 py-6">
                                        <p className="text-sm font-bold text-white">{order.total}</p>
                                        <p className="text-[8px] text-brand-concrete tracking-widest uppercase">{order.method}</p>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`inline-flex items-center text-[9px] uppercase tracking-widest font-bold px-4 py-1 rounded-full ${getStatusStyles(order.status)}`}>
                                            {getStatusIcon(order.status)}
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-brand-concrete hover:text-white transition-colors">
                                            <span>Full Insight</span>
                                            <ChevronRight size={14} />
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

export default Orders;
