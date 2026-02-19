<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MessageSquare, MapPin, Users, Star, ChevronRight, Loader2, Shield, Heart } from 'lucide-react';
import axios from 'axios';

const Home = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/rooms');
                setRooms(res.data.data || []);
            } catch (error) {
                console.error('Error fetching rooms:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchRooms();
    }, []);

    return (
        <div className="bg-[#FCF9F6] min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000"
                        alt="Event Venue"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl text-white">
                        <span className="text-sm font-bold uppercase tracking-widest mb-4 block">Karibu Swahili Pot</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                            Book the Perfect Venue for Your Event
                        </h1>
                        <p className="text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
                            Reserve elegant event spaces for weddings, corporate functions, parties, and community gatherings across Mombasa. Simple, reliable, and memorable.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#venues"
                                className="bg-primary hover:bg-opacity-90 text-white px-8 py-4 rounded font-bold text-lg flex items-center space-x-2 transition-all shadow-lg"
                            >
                                <Calendar size={20} />
                                <span>Book a Venue</span>
                            </a>
                            <Link to="/my-bookings" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded font-bold text-lg flex items-center space-x-2 transition-all">
                                <MessageSquare size={20} />
                                <span>Check My Booking</span>
                            </Link>
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Star, ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-secondary py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 space-y-8 z-10">
                            <h1 className="text-5xl md:text-6xl font-serif font-bold text-accent leading-tight">
                                Host Your Next Event at <span className="text-primary">Swahili Pot</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-lg">
                                Your trusted partner for event venue rentals in Mombasa. From intimate boardrooms to grand banquet halls, we make every occasion memorable.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/venues" className="bg-primary hover:bg-red-600 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl text-center flex items-center justify-center space-x-2">
                                    <Calendar className="w-5 h-5" />
                                    <span>Find a Venue</span>
                                </Link>
                                <Link to="/about" className="bg-white hover:bg-gray-50 text-accent border-2 border-primary/10 px-8 py-4 rounded-full font-medium transition-all text-center">
                                    Learn More
                                </Link>
                            </div>
                            <div className="pt-4 flex items-center space-x-2 text-primary font-medium">
                                <span>Karibu! Welcome to Swahili Pot</span>
                                <div className="h-px bg-primary w-12"></div>
                            </div>
                        </div>

                        {/* Hero Image Component / Illustration */}
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl rounded-full"></div>
                            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl rounded-full"></div>

                            <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform rotate-1 hover:rotate-0">
                                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden mb-4">
                                    {/* Placeholder for Venue Image */}
                                    <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-400">
                                        <div className="text-center">
                                            <Star className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                            <span>Premier Venues</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="font-serif text-xl font-bold text-accent">Mkenya Grand Hall</h3>
                                        <p className="text-gray-500 text-sm">Capacity: 150-300 Guests</p>
                                    </div>
                                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Available</span>
                                </div>
                            </div>
>>>>>>> BS2
                        </div>
                    </div>
                </div>
            </section>

<<<<<<< HEAD
            {/* Venues Section */}
            <section id="venues" className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Our Spaces</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800">Available Venues</h2>
                </div>

                <div className="container mx-auto px-4">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <Loader2 className="animate-spin text-primary mb-4" size={48} />
                            <p className="text-gray-500 font-serif italic">Curating beautiful spaces for you...</p>
                        </div>
                    ) : rooms.length === 0 ? (
                        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                            <p className="text-gray-500">No venues available at the moment. Please check back later.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {rooms.map(room => (
                                <div key={room.id} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                                    <div className="relative h-48 overflow-hidden">
                                        <img src={room.image_url || "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800"} alt={room.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-gray-800">{room.type}</div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">{room.name}</h3>
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{room.description}</p>
                                        <div className="flex items-center justify-between text-xs text-gray-500 mb-6 pb-6 border-b border-gray-50">
                                            <div className="flex items-center space-x-1">
                                                <Users size={14} className="text-primary" />
                                                <span>{room.capacity} guests</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Star size={14} className="text-amber-400 fill-amber-400" />
                                                <span>4.9</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-gray-400 uppercase font-bold">Starting from</span>
                                                <span className="text-lg font-bold text-primary">${room.price}</span>
                                            </div>
                                            <Link to={`/book/${room.id}`} className="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded text-sm font-bold transition-all shadow-sm">Book Now</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mt-16 text-center">
                        <Link to="/venues" className="inline-flex items-center space-x-2 text-primary font-bold hover:underline group">
                            <span>View all venues</span>
                            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </Link>
=======
            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-4">Why Choose Swahili Pot?</h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-600">
                            We combine modern amenities with authentic Swahili hospitality to ensure your event is a resounding success. Hakuna wasiwasi (No worries).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="p-8 rounded-2xl bg-gray-50 hover:bg-secondary/30 transition-colors duration-300 group">
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <Calendar className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-accent mb-3">Easy Booking</h3>
                            <p className="text-gray-600">
                                Reserve your ideal venue in minutes with our simple, transparent booking process. Instant confirmation for your peace of mind.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="p-8 rounded-2xl bg-gray-50 hover:bg-secondary/30 transition-colors duration-300 group">
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <Users className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-accent mb-3">AI Recommendations</h3>
                            <p className="text-gray-600">
                                Not sure which venue fits best? Our Smart Assistant recommends the perfect space based on your event type, guest count, and budget.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="p-8 rounded-2xl bg-gray-50 hover:bg-secondary/30 transition-colors duration-300 group">
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <Star className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-accent mb-3">Premium Quality</h3>
                            <p className="text-gray-600">
                                Every venue is professionally maintained and set up before your event. Located in prime areas across Mombasa with ample parking.
                            </p>
                        </div>
>>>>>>> BS2
                    </div>
                </div>
            </section>

<<<<<<< HEAD
            {/* Why Choose Section */}
            <section className="py-24 bg-[#FCF9F6]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Why Choose Swahili Pot</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800">Venue Booking Made Simple</h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">From intimate corporate meetings to grand wedding celebrations, we have the perfect space and service for you.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
                            <div className="w-12 h-12 bg-red-50 text-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Calendar size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3">Easy Booking</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Reserve your ideal venue in minutes. Choose the space, date, and event type with our simple process.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
                            <div className="w-12 h-12 bg-red-50 text-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3">Prime Locations</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">All venues are located in prime areas across Mombasa with easy access and ample parking.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
                            <div className="w-12 h-12 bg-red-50 text-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-3">Quality Guaranteed</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Every venue is professionally maintained and set up before your event. Hakuna wasiwasi.</p>
                        </div>
                    </div>
=======
            {/* CTA Section */}
            <section className="py-20 bg-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to plan your event?</h2>
                    <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
                        Explore our diverse range of venues and find the perfect match for your needs.
                    </p>
                    <Link to="/venues" className="inline-flex items-center space-x-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        <span>Explore Venues</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
>>>>>>> BS2
                </div>
            </section>
        </div>
    );
};

export default Home;
