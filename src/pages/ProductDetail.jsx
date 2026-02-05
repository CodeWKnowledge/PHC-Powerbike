import { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Minus, Plus, ShoppingCart, ShieldCheck, Zap, History, Check } from 'lucide-react';
import { IMAGES } from '../data/assets';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

const ProductDetail = () => {
    const { id } = useParams();
    const product = PRODUCTS.find(p => p.id === parseInt(id)) || PRODUCTS[0];


    useEffect(() => {
        document.title = `${product.name} | Portharcourt Powerbike`;
    }, [product]);

    const [activeImage, setActiveImage] = useState(0);

    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };


    return (
        <div className="pt-24 pb-40 bg-brand-white min-h-screen">
            {/* Breadcrumbs */}
            <div className="container-custom py-8">
                <div className="flex items-center space-x-4 text-[10px] tracking-widest text-brand-asphalt uppercase">
                    <Link to="/" className="hover:text-brand-black transition-colors">Home</Link>
                    <ChevronRight size={10} />
                    <Link to="/shop" className="hover:text-brand-black transition-colors">Store</Link>
                    <ChevronRight size={10} />
                    <span className="text-brand-black font-bold">{product.name}</span>
                </div>
            </div>

            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Gallery */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="aspect-[4/5] bg-brand-offwhite overflow-hidden shadow-sm"
                        >
                            <img
                                src={product.images[activeImage]}
                                alt={product.name}
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImage(i)}
                                    className={`aspect-square bg-brand-offwhite overflow-hidden border transition-all ${activeImage === i ? 'border-brand-red opacity-100 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-center max-w-lg">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-red font-bold mb-4 block">
                                {product.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-light mb-6 text-brand-black">{product.name}</h1>
                            <p className="text-2xl font-light text-brand-black mb-8">{product.price}</p>

                            <p className="text-brand-asphalt leading-relaxed font-light mb-12">
                                {product.description}
                            </p>

                            {/* Action Area */}
                            <div className="space-y-8 mb-16">
                                <div className="flex items-center space-x-12">
                                    <div className="flex items-center border border-brand-silver">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="p-3 text-brand-asphalt hover:text-brand-black transition-colors"
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="px-6 text-sm font-medium w-12 text-center text-brand-black">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="p-3 text-brand-asphalt hover:text-brand-black transition-colors"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                    <button
                                        onClick={handleAddToCart}
                                        className={`btn-primary flex-grow flex items-center justify-center space-x-3 transition-all duration-300 ${isAdded ? 'bg-green-600' : 'bg-brand-black hover:bg-brand-red'} text-white`}
                                    >
                                        {isAdded ? (
                                            <>
                                                <Check size={16} />
                                                <span>Added to Hardware</span>
                                            </>
                                        ) : (
                                            <>
                                                <ShoppingCart size={16} />
                                                <span>Add to Hardware</span>
                                            </>
                                        )}
                                    </button>

                                </div>
                            </div>

                            {/* Specs Grid */}
                            <div className="grid grid-cols-2 gap-y-8 border-t border-brand-silver/50 pt-12">
                                {product.specs.map(spec => (
                                    <div key={spec.label} className="space-y-1">
                                        <p className="text-[10px] uppercase tracking-widest text-brand-asphalt">{spec.label}</p>
                                        <p className="text-lg font-light text-brand-black">{spec.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Trust Features */}
                            <div className="mt-16 grid grid-cols-3 gap-8">
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <ShieldCheck size={20} className="text-brand-red" />
                                    <span className="text-[8px] uppercase tracking-widest text-brand-asphalt">2 Year Warranty</span>
                                </div>
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <Zap size={20} className="text-brand-asphalt" />
                                    <span className="text-[8px] uppercase tracking-widest text-brand-asphalt">Next Day Delivery</span>
                                </div>
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <History size={20} className="text-brand-asphalt" />
                                    <span className="text-[8px] uppercase tracking-widest text-brand-asphalt">30 Day Returns</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-40 pt-24 border-t border-brand-silver/30">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-3xl font-light text-brand-black mb-4">You May Also Need</h2>
                            <p className="text-[10px] uppercase tracking-[0.4em] text-brand-asphalt">Compatible high-performance gear</p>
                        </div>
                        <Link to="/shop" className="text-[10px] uppercase tracking-widest font-bold text-brand-black border-b border-brand-black pb-1 hover:text-brand-red hover:border-brand-red transition-all">
                            View All Collection
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map((item) => (

                            <Link key={item.id} to={`/product/${item.id}`} className="group">
                                <div className="aspect-[4/5] bg-brand-offwhite mb-6 overflow-hidden">
                                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <h4 className="text-sm font-medium text-brand-black group-hover:text-brand-red transition-all">{item.name}</h4>
                                <p className="text-[10px] uppercase tracking-widest text-brand-asphalt mt-2">{item.price}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};


export default ProductDetail;
