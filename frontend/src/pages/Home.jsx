import React from 'react'

function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-primary mb-4">
                    Welcome to BS2 Booking System
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                    Your modern solution for efficient booking management
                </p>
                <div className="card max-w-2xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
                    <p className="text-gray-700">
                        This is your BS2 booking system frontend built with React, Vite, and Tailwind CSS.
                    </p>
                    <div className="mt-6 space-x-4">
                        <button className="btn-primary">Book Now</button>
                        <button className="btn-secondary">View Bookings</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
