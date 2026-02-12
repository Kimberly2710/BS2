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
                        </div>
                    </div>
                </div>
            </section>

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
                    </div>
                </div>
            </section>

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
                </div>
            </section>
        </div>
    );
};

export default Home;
