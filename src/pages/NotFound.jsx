import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="h-screen bg-brand-white flex items-center justify-center p-8">
            <div className="max-w-md w-full text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex justify-center"
                >
                    <div className="w-24 h-24 bg-brand-offwhite rounded-full flex items-center justify-center text-brand-red shadow-sm border border-brand-silver/20">
                        <ShieldAlert size={40} />
                    </div>
                </motion.div>

                <div className="space-y-4">
                    <h1 className="text-6xl font-bold text-brand-black tracking-tighter">404</h1>
                    <p className="text-[10px] uppercase tracking-[0.5em] text-brand-asphalt font-bold">Signal Lost - Path Not Found</p>
                    <p className="text-sm text-brand-concrete font-light px-8">
                        The hardware deployment you requested is unavailable or has been decommissioned.
                    </p>
                </div>

                <div className="pt-8">
                    <Link to="/" className="btn-primary inline-flex items-center space-x-3 bg-brand-black text-white hover:bg-brand-red">
                        <ArrowLeft size={16} />
                        <span>Return to Base</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
