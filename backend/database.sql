-- BS2 Booking System Database Schema

-- Create database
CREATE DATABASE IF NOT EXISTS bs2_booking;
USE bs2_booking;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('user', 'admin') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Rooms table
CREATE TABLE IF NOT EXISTS rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  type VARCHAR(50) NOT NULL,
  capacity INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  amenities JSON,
  image_url VARCHAR(255),
  status ENUM('available', 'unavailable', 'maintenance') DEFAULT 'available',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  room_id INT NOT NULL,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  guests INT NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  status ENUM('pending', 'confirmed', 'cancelled', 'completed') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE
);

-- Insert sample admin user (password: admin123)
INSERT INTO users (name, email, password, role) VALUES 
('Admin User', 'admin@bs2.com', '$2a$10$XqZ8J8YqZ8J8YqZ8J8YqZOe8J8YqZ8J8YqZ8J8YqZ8J8YqZ8J8Yq', 'admin');

-- Insert sample rooms
INSERT INTO rooms (name, type, capacity, price, description, amenities, status) VALUES 
('Deluxe Suite', 'Suite', 2, 150.00, 'Spacious deluxe suite with ocean view', '["WiFi", "TV", "Mini Bar", "Air Conditioning"]', 'available'),
('Standard Room', 'Standard', 2, 80.00, 'Comfortable standard room', '["WiFi", "TV", "Air Conditioning"]', 'available'),
('Family Room', 'Family', 4, 200.00, 'Large family room with two beds', '["WiFi", "TV", "Mini Bar", "Air Conditioning", "Kitchen"]', 'available');
