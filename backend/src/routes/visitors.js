const express = require('express');
const visitorRoutes = express.Router();

let visitors = [
  {
    id: 1,
    name: 'Rahul Sharma',
    purpose: 'Delivery',
    unit: 'A-101',
    time: '10:30 AM',
    status: 'approved',
    email: 'rahul@email.com',
    phone: '9876543210',
    hostName: 'John Doe',
    hostUnit: 'A-101',
    expectedArrival: '2024-01-15 10:30',
    expectedDeparture: '2024-01-15 11:30'
  }
];

visitorRoutes.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: visitors,
      count: visitors.length
    });
  } catch (error) {
    console.error('Error fetching visitors:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch visitor records'
    });
  }
});

visitorRoutes.post('/', (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      purpose,
      unit,
      expectedArrival,
      expectedDeparture,
      hostName,
      hostUnit,
      vehicleNumber
    } = req.body;

    if (!name || !purpose || !unit) {
      return res.status(400).json({
        success: false,
        message: 'Name, purpose, and unit are required fields'
      });
    }

    const newVisitor = {
      id: visitors.length + 1,
      name,
      email: email || '',
      phone: phone || '',
      purpose,
      unit,
      time: expectedArrival || new Date().toLocaleTimeString(),
      status: 'pending',
      hostName,
      hostUnit,
      expectedArrival,
      expectedDeparture,
      vehicleNumber: vehicleNumber || '',
      createdAt: new Date().toISOString()
    };

    visitors.push(newVisitor);

    res.status(201).json({
      success: true,
      message: 'Visitor registration successful',
      data: newVisitor
    });
  } catch (error) {
    console.error('Error registering visitor:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to register visitor'
    });
  }
});

visitorRoutes.put('/:id/status', (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const visitorIndex = visitors.findIndex(v => v.id === parseInt(id));
    
    if (visitorIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Visitor not found'
      });
    }

    visitors[visitorIndex].status = status;

    res.json({
      success: true,
      message: `Visitor status updated to ${status}`,
      data: visitors[visitorIndex]
    });
  } catch (error) {
    console.error('Error updating visitor status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update visitor status'
    });
  }
});

module.exports = visitorRoutes;
