import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SmartBookingDashboard from './pages/SmartBookingDashboard'

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-gray-50 font-sans text-gray-900">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<SmartBookingDashboard />} />
                        {/* Add more routes here as we build them */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
