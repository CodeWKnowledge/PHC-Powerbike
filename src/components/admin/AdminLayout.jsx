import { Link, Outlet, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,
    BarChart3,
    Settings,
    LogOut,
    Bell,
    Search
} from 'lucide-react';

const AdminLayout = () => {
    const location = useLocation();

    const menuItems = [
        { icon: <LayoutDashboard size={18} />, label: 'Overview', path: '/admin' },
        { icon: <ShoppingCart size={18} />, label: 'Orders', path: '/admin/orders' },
        { icon: <Package size={18} />, label: 'Inventory', path: '/admin/inventory' },
        { icon: <Users size={18} />, label: 'Customers', path: '/admin/customers' },
        { icon: <BarChart3 size={18} />, label: 'Analytics', path: '/admin/analytics' },
        { icon: <Settings size={18} />, label: 'Settings', path: '/admin/settings' },
    ];

    return (
        <div className="flex h-screen bg-brand-black text-brand-concrete font-sans">

            {/* Sidebar */}
            <aside className="w-64 border-r border-brand-charcoal flex flex-col pt-8">
                <div className="px-8 mb-12">
                    <Link to="/" className="text-sm font-bold tracking-[0.4em] uppercase text-white">
                        Portharcourt<span className="text-brand-red"> Powerbike</span>
                        <span className="block text-[8px] text-brand-concrete mt-1 tracking-[0.2em]">Command Center</span>
                    </Link>
                </div>


                <nav className="flex-grow">
                    <ul className="space-y-1">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center space-x-4 px-8 py-4 text-xs tracking-widest uppercase transition-all ${location.pathname === item.path
                                        ? 'bg-brand-charcoal text-white border-r-2 border-brand-silver'
                                        : 'text-brand-asphalt hover:text-brand-concrete hover:bg-brand-charcoal/30'
                                        }`}
                                >
                                    {item.icon}
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="p-8 border-t border-brand-charcoal">
                    <button className="flex items-center space-x-4 text-xs tracking-widest uppercase text-brand-asphalt hover:text-red-400 transition-colors">
                        <LogOut size={18} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow flex flex-col overflow-hidden">
                {/* Top Header */}
                <header className="h-20 border-b border-brand-charcoal flex items-center justify-between px-12">
                    <div className="relative">
                        <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-brand-asphalt" size={16} />
                        <input
                            type="text"
                            placeholder="SEARCH DATA..."
                            className="bg-transparent border-none pl-8 text-[10px] tracking-widest focus:outline-none w-64 placeholder:text-brand-asphalt"
                        />
                    </div>

                    <div className="flex items-center space-x-8">
                        <button className="relative text-brand-asphalt hover:text-white transition-colors">
                            <Bell size={18} />
                            <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-brand-silver rounded-full"></span>
                        </button>
                        <div className="flex items-center space-x-4">
                            <div className="text-right">
                                <p className="text-[10px] font-bold text-white uppercase tracking-widest">Admin User</p>
                                <p className="text-[8px] text-brand-asphalt uppercase tracking-widest">Super Administrator</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-brand-asphalt"></div>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className="flex-grow overflow-auto p-12">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
