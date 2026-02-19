import React from 'react'
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AdminPanel from './pages/AdminPanel'
import AdminLogin from './pages/AdminLogin'
import SmartBookingDashboard from './pages/SmartBookingDashboard'

function AppContent() {
    const location = useLocation();
    const isNoLayoutPage = location.pathname === '/admin/login';

    return (
        <div className="flex flex-col min-h-screen bg-[#FCF9F6] font-sans text-gray-900">
            {!isNoLayoutPage && <Navbar />}
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/admin" element={<AdminPanel />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/dashboard" element={<SmartBookingDashboard />} />
                    <Route path="/my-bookings" element={<SmartBookingDashboard />} />
                    {/* Add more routes here as we build them */}
                </Routes>
            </main>
            {!isNoLayoutPage && <Footer />}
        </div>
    );
}

function App() {
    return (
        <AuthProvider>
            <Router>
                <AppContent />
            </Router>
        </AuthProvider>
=======
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
>>>>>>> BS2
    )
}

export default App
