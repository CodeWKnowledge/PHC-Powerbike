import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { IMAGES } from '../data/assets';
import { PRODUCTS } from '../data/products';

const categories = [
    { name: 'All', value: 'all' },
    { name: 'Powerbikes', value: 'Powerbikes' },
    { name: 'Helmets', value: 'Helmets' },
    { name: 'Gloves', value: 'Gloves' },
    { name: 'Boots', value: 'Boots' },
    { name: 'Accessories', value: 'Accessories' },
];

const Shop = () => {
    useEffect(() => {
        document.title = "Collection | Portharcourt Powerbike Store";
    }, []);

    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get('category') || 'all';
    const [activeCategory, setActiveCategory] = useState(categoryParam);

    // Sync state with URL params
    useEffect(() => {
        setActiveCategory(categoryParam);
    }, [categoryParam]);

    const handleCategoryChange = (val) => {
        if (val === 'all') {
            searchParams.delete('category');
        } else {
            searchParams.set('category', val);
        }
        setSearchParams(searchParams);
    };

    const filteredProducts = activeCategory === 'all'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);



    return (
        <div className="pt-32 pb-40 bg-brand-white min-h-screen">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-24 space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-light text-brand-black"
                    >
                        Store
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-brand-asphalt text-[10px] uppercase tracking-[0.4em]"
                    >
                        High-Performance Urban Hardware
                    </motion.p>
                </div>

                {/* Category Tab Bar */}
                <div className="mb-24 flex justify-center border-b border-brand-silver/50">
                    <div className="flex space-x-12 overflow-x-auto no-scrollbar pb-4 px-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.value}
                                onClick={() => handleCategoryChange(cat.value)}
                                className={`relative text-[10px] uppercase tracking-[0.3em] font-bold py-4 transition-all whitespace-nowrap ${activeCategory === cat.value
                                    ? 'text-brand-black'
                                    : 'text-brand-concrete hover:text-brand-asphalt'
                                    }`}
                            >
                                {cat.name}
                                {activeCategory === cat.value && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-red"
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-20">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product, i) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="group"
                            >
                                <Link to={`/product/${product.id}`}>
                                    <div className="aspect-[4/5] bg-brand-offwhite overflow-hidden mb-6 relative">
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-brand-black/90 to-transparent">
                                            <span className="text-[10px] text-white tracking-[0.4em] font-bold uppercase border-b border-white/40 pb-1">Explore</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-start px-2">
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-medium text-brand-black group-hover:text-brand-red transition-colors">{product.name}</h4>
                                            <p className="text-[9px] text-brand-asphalt font-bold uppercase tracking-[0.2em]">{product.category}</p>
                                        </div>
                                        <span className="text-sm font-light text-brand-asphalt">${product.price.toLocaleString()}</span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>


                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-40 text-center"
                    >
                        <p className="text-brand-asphalt text-[10px] uppercase tracking-[0.4em]">No hardware found for this configuration.</p>
                    </motion.div>
                )}
            </div>
        </div>
    );
};


export default Shop;
