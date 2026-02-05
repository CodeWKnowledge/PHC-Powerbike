import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../data/assets';
import { useEffect } from 'react';
import { PRODUCTS } from '../data/products';

const Home = () => {
    const featuredProducts = PRODUCTS.slice(0, 4);


    useEffect(() => {
        document.title = "Portharcourt Powerbike | High-Performance Urban Hardware";
    }, []);

    return (

        <div className="bg-brand-white">
            {/* Hero Section - DARK */}
            <section className="relative h-screen w-full flex items-center overflow-hidden bg-brand-black">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={IMAGES.hero}
                        alt="Urban Power"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="container-custom relative z-10 pt-20 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                            Urban Power, <br />
                            <span className="text-brand-red font-light italic">Refined Control.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-brand-offwhite/80 font-light mb-12 leading-relaxed">
                            Powerbikes and essential riding gear designed for the modern street.
                            Minimalism meets mechanical excellence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link to="/shop?category=Powerbikes" className="btn-primary flex items-center justify-center group">
                                Explore Bikes
                                <ArrowRight size={14} className="ml-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/shop?category=Helmets" className="btn-outline flex items-center justify-center">
                                View Gear
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Categories - LIGHT */}
            <section className="py-32 bg-brand-white">
                <div className="container-custom">
                    <div className="text-center mb-24">
                        <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-asphalt font-bold mb-4">The Hardware</h2>
                        <h3 className="text-4xl font-light text-brand-black">Choose Your Path</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'Powerbikes', img: IMAGES.categories.bikes, path: '/shop?category=Powerbikes' },
                            { name: 'Helmets', img: IMAGES.categories.helmets, path: '/shop?category=Helmets' },
                            { name: 'Gloves', img: IMAGES.categories.gloves, path: '/shop?category=Gloves' },
                            { name: 'Accessories', img: IMAGES.categories.accessories, path: '/shop?category=Accessories' },
                        ].map((cat, i) => (
                            <motion.div
                                key={cat.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group relative h-[450px] overflow-hidden cursor-pointer bg-brand-offwhite"
                            >
                                <Link to={cat.path}>
                                    <img
                                        src={cat.img}
                                        alt={cat.name}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-brand-black/0 transition-colors" />
                                    <div className="absolute bottom-12 left-12">
                                        <h3 className="text-[11px] uppercase tracking-[0.4em] font-bold text-white border-b-2 border-transparent group-hover:border-brand-red transition-all pb-1">
                                            {cat.name}
                                        </h3>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products - SHADED DARK */}
            <section className="py-40 bg-brand-black">
                <div className="container-custom">
                    <div className="flex justify-between items-end mb-24">
                        <div className="space-y-4">
                            <h2 className="text-[10px] uppercase tracking-[0.5em] text-brand-red font-bold">New Releases</h2>
                            <h3 className="text-4xl font-light text-white">Featured Hardware</h3>
                        </div>
                        <Link to="/shop" className="text-[10px] uppercase tracking-widest text-brand-concrete hover:text-white transition-colors flex items-center border-b border-brand-charcoal pb-1 hover:border-white">
                            View All <ArrowRight size={12} className="ml-2" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
                        {featuredProducts.map((product, i) => (
                            <motion.div

                                key={product.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group"
                            >
                                <Link to={`/product/${product.id}`}>
                                    <div className="aspect-[4/5] bg-brand-charcoal overflow-hidden mb-8 relative">
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors" />
                                        <button className="absolute bottom-8 left-8 right-8 py-4 bg-brand-red text-white text-[9px] uppercase tracking-[0.2em] font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                            Explore Hardware
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-start px-2">
                                        <div className="space-y-2">
                                            <h4 className="text-sm font-medium text-brand-offwhite group-hover:text-white transition-colors">{product.name}</h4>
                                            <p className="text-[10px] text-brand-asphalt font-bold uppercase tracking-widest">Collection 2026</p>
                                        </div>
                                        <span className="text-sm font-light text-brand-silver">{product.price}</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Philosophy Section - LIGHT/OFFWHITE */}
            <section className="py-60 bg-brand-offwhite overflow-hidden relative" id="philosophy">
                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl mx-auto space-y-12"
                    >
                        <h2 className="text-[10px] uppercase tracking-[0.8em] text-brand-red font-bold mb-8">Philosophy</h2>
                        <div className="space-y-4">
                            <p className="text-3xl md:text-5xl font-light italic text-brand-black leading-tight">
                                "Built for the street. <br />
                                Designed with restraint. <br />
                                Powered by precision."
                            </p>
                        </div>
                        <div className="pt-12">
                            <p className="text-sm text-brand-asphalt max-w-lg mx-auto leading-relaxed">
                                Quiet strength, smooth handling, and dependable range.
                                We believe in the beauty of mechanical efficiency and the calm of a controlled ride.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-brand-black/[0.03] tracking-tighter whitespace-nowrap pointer-events-none select-none">
                    PHC POWER
                </div>
            </section>
        </div>
    );
};

export default Home;
