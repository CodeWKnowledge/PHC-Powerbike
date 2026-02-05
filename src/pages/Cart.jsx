import { Link } from 'react-router-dom';
import { ShoppingBag, X, Minus, Plus, ArrowRight, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (cart.length === 0) {
        return (
            <div className="pt-40 pb-20 container-custom min-h-screen">
                <div className="max-w-xl mx-auto text-center space-y-12">
                    <div className="flex justify-center">
                        <div className="w-24 h-24 bg-brand-offwhite rounded-full flex items-center justify-center text-brand-concrete shadow-sm">
                            <ShoppingBag size={32} />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-3xl font-light text-brand-black">Your hardware is empty</h1>
                        <p className="text-brand-asphalt font-light lowercase tracking-wider text-[10px] uppercase">Precision gear is waiting for your urban journey.</p>
                    </div>
                    <Link to="/shop" className="btn-primary inline-block bg-brand-black text-white hover:bg-brand-red">
                        Explore Collection
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-40 bg-brand-white min-h-screen">
            <div className="container-custom">
                <h1 className="text-4xl font-light text-brand-black mb-16">The Hardware</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-12">
                        <AnimatePresence>
                            {cart.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flex flex-col sm:flex-row gap-8 pb-12 border-b border-brand-silver/50"
                                >
                                    {/* Product Image */}
                                    <div className="w-full sm:w-40 aspect-[4/5] bg-brand-offwhite overflow-hidden shadow-sm">
                                        <img
                                            src={Array.isArray(item.images) ? item.images[0] : item.img}
                                            alt={item.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex-grow flex flex-col justify-between py-2">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-light text-brand-black mb-2">{item.name}</h3>
                                                <p className="text-[10px] uppercase tracking-widest text-brand-concrete font-bold">{item.category}</p>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-brand-concrete hover:text-brand-red transition-colors p-2"
                                            >
                                                <X size={18} />
                                            </button>
                                        </div>

                                        <div className="flex justify-between items-end mt-8">
                                            {/* Quantity Selector */}
                                            <div className="flex items-center border border-brand-silver">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="p-3 text-brand-asphalt hover:text-brand-black transition-colors"
                                                >
                                                    <Minus size={14} />
                                                </button>
                                                <span className="px-6 text-sm font-medium w-12 text-center text-brand-black">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-3 text-brand-asphalt hover:text-brand-black transition-colors"
                                                >
                                                    <Plus size={14} />
                                                </button>
                                            </div>

                                            {/* Price */}
                                            <div className="text-right">
                                                <p className="text-lg text-brand-black font-light leading-none">
                                                    {typeof item.price === 'string' ? item.price : `$${item.price.toLocaleString()}`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-brand-offwhite p-12 sticky top-32 shadow-sm border border-brand-silver/30">
                            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-black mb-12 border-b border-brand-silver pb-6">Summary</h2>

                            <div className="space-y-6 mb-12">
                                <div className="flex justify-between text-sm">
                                    <span className="text-brand-asphalt">Subtotal</span>
                                    <span className="text-brand-black font-medium">${cartTotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-brand-asphalt">Shipping</span>
                                    <span className="text-brand-black font-medium">Calculated at next step</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-brand-asphalt">Taxes</span>
                                    <span className="text-brand-black font-medium">$0.00</span>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-brand-silver mb-12">
                                <div className="flex justify-between items-end">
                                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand-black">Total</span>
                                    <span className="text-2xl font-light text-brand-black">${cartTotal.toLocaleString()}</span>
                                </div>
                            </div>

                            <Link
                                to="/checkout"
                                className="w-full btn-primary bg-brand-black text-white hover:bg-brand-red flex items-center justify-center space-x-3 py-5"
                            >
                                <span>Proceed to Checkout</span>
                                <ArrowRight size={16} />
                            </Link>

                            <div className="mt-8 text-center">
                                <Link to="/shop" className="text-[9px] uppercase tracking-widest text-brand-asphalt hover:text-brand-black transition-colors">
                                    Back to Collection
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
