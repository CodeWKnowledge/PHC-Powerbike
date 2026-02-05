import { motion } from 'framer-motion';
import { TrendingUp, ShoppingBag, Users, Clock } from 'lucide-react';

const Dashboard = () => {
    const stats = [
        { label: 'Total Revenue', value: '$84,200', icon: <TrendingUp size={20} />, trend: '+12.5%' },
        { label: 'Active Orders', value: '18', icon: <ShoppingBag size={20} />, trend: '2 Pending' },
        { label: 'New Customers', value: '24', icon: <Users size={20} />, trend: '+4 this week' },
        { label: 'Avg. Response', value: '1.2h', icon: <Clock size={20} />, trend: '-10% speedup' },
    ];

    const recentOrders = [
        { id: '#ORD-7291', customer: 'Marcus Thorne', product: 'S1-Dark Obsidian', price: '$12,400', status: 'Shipped', date: '2 hours ago' },
        { id: '#ORD-7290', customer: 'Elena Vance', product: 'Core Carbon Helmet', price: '$850', status: 'Pending', date: '5 hours ago' },
        { id: '#ORD-7289', customer: 'Julian K.', product: 'Stealth Jacket', price: '$420', status: 'Delivered', date: 'Yesterday' },
        { id: '#ORD-7288', customer: 'Sarah Connor', product: 'S1-Cobalt Blue', price: '$12,400', status: 'Processing', date: '2 days ago' },
    ];

    return (
        <div className="space-y-12">
            <div className="flex justify-between items-end">
                <div className="space-y-2">
                    <h1 className="text-3xl font-light text-white">Strategic Command</h1>
                    <p className="text-[10px] tracking-[0.4em] text-brand-red uppercase font-bold">Port Harcourt Logistics: ONLINE</p>
                </div>

                <button className="px-6 py-2 border border-brand-charcoal text-[10px] uppercase tracking-widest hover:border-brand-silver transition-colors">
                    EXPORT REPORT
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 bg-brand-charcoal/30 border border-brand-charcoal rounded-sm"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-brand-black rounded-sm text-brand-red">
                                {stat.icon}
                            </div>
                            <span className={`text-[10px] font-bold ${stat.trend.startsWith('+') ? 'text-green-500' : 'text-brand-red'}`}>{stat.trend}</span>
                        </div>

                        <p className="text-[10px] uppercase tracking-widest text-brand-asphalt mb-2">{stat.label}</p>
                        <h3 className="text-2xl font-light text-white">{stat.value}</h3>
                    </motion.div>
                ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-brand-charcoal/30 border border-brand-charcoal p-8">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-8">Recent Hardware Orders</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-brand-charcoal text-[10px] uppercase tracking-widest text-brand-asphalt">
                                <th className="pb-4 font-normal">Order ID</th>
                                <th className="pb-4 font-normal">Customer</th>
                                <th className="pb-4 font-normal">Hardware</th>
                                <th className="pb-4 font-normal">Amount</th>
                                <th className="pb-4 font-normal">Status</th>
                                <th className="pb-4 font-normal">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-brand-charcoal/50">
                            {recentOrders.map((order) => (
                                <tr key={order.id} className="text-xs group hover:bg-white/[0.02] transition-colors">
                                    <td className="py-6 font-mono text-brand-silver">{order.id}</td>
                                    <td className="py-6 text-brand-offwhite">{order.customer}</td>
                                    <td className="py-6 text-brand-concrete">{order.product}</td>
                                    <td className="py-6 font-light">{order.price}</td>
                                    <td className="py-6">
                                        <span className={`px-2 py-1 rounded-full text-[8px] uppercase tracking-tighter ${order.status === 'Shipped' ? 'bg-blue-500/10 text-blue-400' :
                                            order.status === 'Pending' ? 'bg-amber-500/10 text-amber-400' :
                                                order.status === 'Delivered' ? 'bg-green-500/10 text-green-400' :
                                                    'bg-brand-asphalt/10 text-brand-asphalt'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="py-6 text-brand-asphalt">{order.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
