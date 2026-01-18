const express = require('express');
const amenitiesRoutes = express.Router();

let facilityInventory = [
  {
    id: 1,
    name: 'Swimming Pool',
    type: 'Sports',
    available: true,
    rating: 4.5,
    operatingHours: '6AM - 10PM',
    capacity: 50,
    description: 'Olympic-sized swimming pool with lifeguard on duty',
    location: 'Building A - Ground Floor',
    amenities: ['Showers', 'Lockers', 'Lounge Area'],
    maintenanceSchedule: 'Every Tuesday 8AM - 10AM',
    icon: '🏊',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    name: 'Gym',
    type: 'Fitness',
    available: true,
    rating: 4.8,
    operatingHours: '5AM - 11PM',
    capacity: 30,
    description: 'Fully equipped gym with modern exercise equipment',
    location: 'Building B - 2nd Floor',
    amenities: ['Cardio Equipment', 'Weight Training', 'Yoga Room'],
    maintenanceSchedule: 'Every Thursday 9AM - 11AM',
    icon: '🏋️',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 3,
    name: 'Clubhouse',
    type: 'Social',
    available: true,
    rating: 4.6,
    operatingHours: '7AM - 11PM',
    capacity: 100,
    description: 'Community clubhouse for events and gatherings',
    location: 'Building C - Ground Floor',
    amenities: ['Kitchen', 'Meeting Room', 'Entertainment System'],
    maintenanceSchedule: 'As needed',
    icon: '🏠',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 4,
    name: 'Tennis Court',
    type: 'Sports',
    available: false,
    rating: 4.2,
    operatingHours: '6AM - 9PM',
    capacity: 4,
    description: 'Professional tennis court with night lighting',
    location: 'Outdoor Area A',
    amenities: ['Night Lighting', 'Equipment Rental', 'Seating Area'],
    maintenanceSchedule: 'Resurfacing - Jan 20-25, 2024',
    icon: '🎾',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 5,
    name: 'Children Play Area',
    type: 'Kids',
    available: true,
    rating: 4.7,
    operatingHours: '8AM - 8PM',
    capacity: 25,
    description: 'Safe and supervised play area for children',
    location: 'Building D - Ground Floor',
    amenities: ['Play Equipment', 'Safety Surface', 'Shaded Area'],
    maintenanceSchedule: 'Daily inspection 9AM',
    icon: '👶',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 6,
    name: 'Jogging Track',
    type: 'Fitness',
    available: true,
    rating: 4.4,
    operatingHours: '5AM - 10PM',
    capacity: 20,
    description: 'Cushioned jogging track around the property',
    location: 'Outdoor perimeter',
    amenities: ['Lighting', 'Water Fountains', 'Distance Markers'],
    maintenanceSchedule: 'Weekly maintenance Sundays 6AM-8AM',
    icon: '🏃',
    createdAt: '2024-01-01T00:00:00Z'
  }
];

let bookingReservations = [
  {
    id: 1,
    amenityId: 1,
    amenityName: 'Swimming Pool',
    residentName: 'John Smith',
    residentEmail: 'john@example.com',
    residentPhone: '+1234567890',
    residentUnit: 'A-101',
    bookingDate: '2024-01-15',
    bookingTime: '10:00 AM',
    duration: '2 hours',
    purpose: 'Family swimming',
    status: 'confirmed',
    specialRequests: 'Need extra towels',
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-10T10:05:00Z'
  },
  {
    id: 2,
    amenityId: 2,
    amenityName: 'Gym',
    residentName: 'Jane Doe',
    residentEmail: 'jane@example.com',
    residentPhone: '+0987654321',
    residentUnit: 'B-205',
    bookingDate: '2024-01-16',
    bookingTime: '06:30 AM',
    duration: '1 hour',
    purpose: 'Morning workout',
    status: 'pending',
    specialRequests: 'Personal trainer preferred',
    createdAt: '2024-01-12T14:30:00Z',
    updatedAt: '2024-01-12T14:30:00Z'
  }
];

amenitiesRoutes.get('/facilities', (req, res) => {
  try {
    const { type, available, search, page = 1, limit = 10 } = req.query;
    
    let filteredFacilities = facilityInventory;
    
    if (type && type !== 'all') {
      filteredFacilities = filteredFacilities.filter(facility => 
        facility.type.toLowerCase() === type.toLowerCase()
      );
    }
    
    if (available !== undefined) {
      const isAvailable = available === 'true';
      filteredFacilities = filteredFacilities.filter(facility => facility.available === isAvailable);
    }
    
    if (search) {
      filteredFacilities = filteredFacilities.filter(facility => 
        facility.name.toLowerCase().includes(search.toLowerCase()) ||
        facility.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    const startIndex = (page - 1) * limit;
    const paginatedFacilities = filteredFacilities.slice(startIndex, startIndex + parseInt(limit));
    
    res.json({
      success: true,
      data: {
        facilities: paginatedFacilities,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(filteredFacilities.length / limit),
          totalFacilities: filteredFacilities.length,
          hasNext: startIndex + limit < filteredFacilities.length,
          hasPrev: page > 1
        }
      }
    });
  } catch (error) {
    console.error('Error fetching facilities:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve facility information'
    });
  }
});

amenitiesRoutes.get('/facilities/:id', (req, res) => {
  try {
    const { id } = req.params;
    const facility = facilityInventory.find(fac => fac.id === parseInt(id));
    
    if (!facility) {
      return res.status(404).json({
        success: false,
        message: 'Facility not found'
      });
    }
    
    const facilityBookings = bookingReservations.filter(booking => 
      booking.amenityId === parseInt(id) && 
      booking.status === 'confirmed'
    );
    
    res.json({
      success: true,
      data: {
        facility: facility,
        upcomingBookings: facilityBookings.slice(0, 5),
        availability: facility.available
      }
    });
  } catch (error) {
    console.error('Error fetching facility details:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve facility details'
    });
  }
});

amenitiesRoutes.post('/bookings', (req, res) => {
  try {
    const { 
      amenityId, 
      amenityName, 
      residentName, 
      residentEmail, 
      residentPhone, 
      residentUnit, 
      bookingDate, 
      bookingTime, 
      duration, 
      purpose, 
      specialRequests 
    } = req.body;
    
    const validationErrors = {};
    
    if (!amenityId) {
      validationErrors.amenityId = 'Facility selection is required';
    }
    
    if (!residentName || !residentName.trim()) {
      validationErrors.residentName = 'Resident name is required';
    }
    
    if (!residentEmail || !residentEmail.trim()) {
      validationErrors.residentEmail = 'Resident email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(residentEmail)) {
      validationErrors.residentEmail = 'Please enter a valid email address';
    }
    
    if (!residentPhone || !residentPhone.trim()) {
      validationErrors.residentPhone = 'Resident phone number is required';
    }
    
    if (!residentUnit || !residentUnit.trim()) {
      validationErrors.residentUnit = 'Resident unit number is required';
    }
    
    if (!bookingDate) {
      validationErrors.bookingDate = 'Booking date is required';
    }
    
    if (!bookingTime) {
      validationErrors.bookingTime = 'Booking time is required';
    }
    
    if (!duration) {
      validationErrors.duration = 'Booking duration is required';
    }
    
    if (!purpose || !purpose.trim()) {
      validationErrors.purpose = 'Booking purpose is required';
    }
    
    if (Object.keys(validationErrors).length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }
    
    const facility = facilityInventory.find(fac => fac.id === parseInt(amenityId));
    
    if (!facility) {
      return res.status(404).json({
        success: false,
        message: 'Selected facility not found'
      });
    }
    
    if (!facility.available) {
      return res.status(409).json({
        success: false,
        message: 'Selected facility is currently unavailable for booking'
      });
    }
    
    const existingBooking = bookingReservations.find(booking => 
      booking.amenityId === parseInt(amenityId) &&
      booking.bookingDate === bookingDate &&
      booking.status === 'confirmed'
    );
    
    if (existingBooking) {
      return res.status(409).json({
        success: false,
        message: 'Facility is already booked for the selected date and time'
      });
    }
    
    const newBooking = {
      id: Math.max(...bookingReservations.map(b => b.id)) + 1,
      amenityId: parseInt(amenityId),
      amenityName: facility.name,
      residentName: residentName.trim(),
      residentEmail: residentEmail.trim(),
      residentPhone: residentPhone.trim(),
      residentUnit: residentUnit.trim(),
      bookingDate: bookingDate,
      bookingTime: bookingTime,
      duration: duration,
      purpose: purpose.trim(),
      specialRequests: specialRequests || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    bookingReservations.push(newBooking);
    
    res.status(201).json({
      success: true,
      message: 'Facility booking request submitted successfully',
      data: newBooking
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create facility booking'
    });
  }
});

amenitiesRoutes.get('/bookings', (req, res) => {
  try {
    const { residentEmail, status, date, page = 1, limit = 10 } = req.query;
    
    let filteredBookings = bookingReservations;
    
    if (residentEmail) {
      filteredBookings = filteredBookings.filter(booking => 
        booking.residentEmail.toLowerCase().includes(residentEmail.toLowerCase())
      );
    }
    
    if (status && status !== 'all') {
      filteredBookings = filteredBookings.filter(booking => 
        booking.status.toLowerCase() === status.toLowerCase()
      );
    }
    
    if (date) {
      filteredBookings = filteredBookings.filter(booking => 
        booking.bookingDate === date
      );
    }
    
    const startIndex = (page - 1) * limit;
    const paginatedBookings = filteredBookings.slice(startIndex, startIndex + parseInt(limit));
    
    res.json({
      success: true,
      data: {
        bookings: paginatedBookings,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(filteredBookings.length / limit),
          totalBookings: filteredBookings.length,
          hasNext: startIndex + limit < filteredBookings.length,
          hasPrev: page > 1
        }
      }
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve booking information'
    });
  }
});

amenitiesRoutes.put('/bookings/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { status, specialRequests } = req.body;
    
    const bookingIndex = bookingReservations.findIndex(booking => booking.id === parseInt(id));
    
    if (bookingIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }
    
    const updatedBooking = {
      ...bookingReservations[bookingIndex],
      status: status || bookingReservations[bookingIndex].status,
      specialRequests: specialRequests || bookingReservations[bookingIndex].specialRequests,
      updatedAt: new Date().toISOString(),
      updatedBy: req.headers['x-user-id'] || 'system'
    };
    
    bookingReservations[bookingIndex] = updatedBooking;
    
    res.json({
      success: true,
      message: 'Booking updated successfully',
      data: updatedBooking
    });
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update booking'
    });
  }
});

amenitiesRoutes.delete('/bookings/:id', (req, res) => {
  try {
    const { id } = req.params;
    const bookingIndex = bookingReservations.findIndex(booking => booking.id === parseInt(id));
    
    if (bookingIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }
    
    const deletedBooking = bookingReservations[bookingIndex];
    bookingReservations.splice(bookingIndex, 1);
    
    res.json({
      success: true,
      message: 'Booking cancelled successfully',
      data: deletedBooking
    });
  } catch (error) {
    console.error('Error cancelling booking:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to cancel booking'
    });
  }
});

module.exports = amenitiesRoutes;
