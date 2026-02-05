import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Lock, ArrowRight, CreditCard, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            clearCart();
            alert('Order placed successfully! Precision hardware is being prepared for shipment.');
            navigate('/');
        }, 2500);
    };

    if (cart.length === 0) {
        return (
            <div className="pt-40 pb-20 container-custom min-h-screen">
                <div className="max-w-xl mx-auto text-center space-y-12">
                    <h1 className="text-3xl font-light text-brand-black">No hardware to checkout</h1>
                    <Link to="/shop" className="btn-primary inline-block bg-brand-black text-white hover:bg-brand-red">
                        Back to Collection
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-40 bg-brand-offwhite min-h-screen">
            <div className="container-custom">
                <div className="flex items-center justify-between mb-16">
                    <Link to="/cart" className="flex items-center text-[10px] uppercase tracking-widest text-brand-asphalt hover:text-brand-black transition-colors">
                        <ChevronLeft size={14} className="mr-2" />
                        Back to Hardware
                    </Link>
                    <div className="flex items-center space-x-2 text-brand-asphalt">
                        <Lock size={12} />
                        <span className="text-[10px] uppercase tracking-widest font-bold">Secure Encryption</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Checkout Form */}
                    <div>
                        <h1 className="text-4xl font-light text-brand-black mb-12">Deployment Details</h1>
                        <form onSubmit={handlePlaceOrder} className="space-y-12">
                            {/* Contact Info */}
                            <div className="space-y-6">
                                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-black border-b border-brand-silver pb-4">01. Contact</h3>
                                <input
                                    required
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-white border border-brand-silver px-6 py-4 text-sm focus:outline-none focus:border-brand-red transition-colors"
                                />
                            </div>

                            {/* Shipping Info */}
                            <div className="space-y-6">
                                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-black border-b border-brand-silver pb-4">02. Shipping</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    <input required type="text" placeholder="First Name" className="bg-white border border-brand-silver px-6 py-4 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                                    <input required type="text" placeholder="Last Name" className="bg-white border border-brand-silver px-6 py-4 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                                </div>
                                <input required type="text" placeholder="Address" className="w-full bg-white border border-brand-silver px-6 py-4 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                                <div className="grid grid-cols-3 gap-6">
                                    <input required type="text" placeholder="City" className="bg-white border border-brand-silver px-6 py-4 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                                    <input required type="text" placeholder="State/Province" className="bg-white border border-brand-silver px-6 py-4 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                                    <input required type="text" placeholder="ZIP Code" className="bg-white border border-brand-silver px-6 py-4 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                                </div>
                            </div>

                            {/* Payment Info */}
                            <div className="space-y-6">
                                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-black border-b border-brand-silver pb-4">03. Payment</h3>
                                <div className="bg-white border border-brand-silver p-8 space-y-6">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <CreditCard size={18} className="text-brand-red" />
                                        <span className="text-sm font-medium">Credit / Debit Card</span>
                                    </div>
                                    <input required type="text" placeholder="Card Number" className="w-full bg-brand-offwhite border-b border-brand-silver px-4 py-4 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                                    <div className="grid grid-cols-2 gap-8">
                                        <input required type="text" placeholder="MM / YY" className="bg-brand-offwhite border-b border-brand-silver px-4 py-4 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                                        <input required type="text" placeholder="CVC" className="bg-brand-offwhite border-b border-brand-silver px-4 py-4 text-sm focus:outline-none focus:border-brand-red transition-colors" />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isProcessing}
                                className={`w-full py-6 flex items-center justify-center space-x-4 uppercase tracking-[0.3em] text-[10px] font-bold transition-all duration-500 ${isProcessing ? 'bg-brand-asphalt text-brand-silver cursor-wait' : 'bg-brand-black text-white hover:bg-brand-red'}`}
                            >
                                {isProcessing ? (
                                    <span>Processing Deployment...</span>
                                ) : (
                                    <>
                                        <span>Confirm Order</span>
                                        <ArrowRight size={16} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-brand-white p-12 lg:h-fit sticky top-32 shadow-sm border border-brand-silver/30">
                        <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-black mb-12 border-b border-brand-silver pb-6">Hardware Summary</h2>
                        <div className="space-y-8 mb-12">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between items-start">
                                    <div className="flex space-x-6">
                                        <div className="w-16 h-20 bg-brand-offwhite overflow-hidden relative border border-brand-silver/30">
                                            <img src={Array.isArray(item.images) ? item.images[0] : item.img} alt={item.name} className="w-full h-full object-contain" />
                                            <span className="absolute -top-2 -right-2 w-5 h-5 bg-brand-red text-white text-[8px] flex items-center justify-center rounded-full font-bold">{item.quantity}</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-brand-black">{item.name}</p>
                                            <p className="text-[9px] uppercase tracking-widest text-brand-asphalt">{item.category}</p>
                                        </div>
                                    </div>
                                    <span className="text-sm font-light text-brand-black">
                                        {typeof item.price === 'string' ? item.price : `$${item.price.toLocaleString()}`}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 pt-8 border-t border-brand-silver">
                            <div className="flex justify-between text-xs">
                                <span className="text-brand-asphalt">Subtotal</span>
                                <span className="text-brand-black font-medium">${cartTotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span className="text-brand-asphalt">Shipping</span>
                                <span className="text-brand-black font-medium text-green-600 uppercase tracking-widest font-bold">Gratis</span>
                            </div>
                        </div>

                        <div className="pt-8 mt-8 border-t-2 border-brand-black">
                            <div className="flex justify-between items-end">
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-black">Total to deploy</span>
                                <span className="text-3xl font-light text-brand-black">${cartTotal.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="mt-12 flex items-center justify-center space-x-4 text-brand-concrete">
                            <Truck size={16} />
                            <p className="text-[9px] uppercase tracking-widest">Premium White-Glove Delivery Included</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
