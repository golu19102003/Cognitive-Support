const express = require('express');
const financeRoutes = express.Router();

let transactions = [
  {
    id: 1,
    type: 'maintenance_fee',
    description: 'Monthly maintenance charges',
    amount: 1500,
    status: 'paid',
    dueDate: '2024-01-05',
    paidDate: '2024-01-03',
    unit: 'A-301',
    residentName: 'John Resident'
  },
  {
    id: 2,
    type: 'parking_fee',
    description: 'Monthly parking charges',
    amount: 500,
    status: 'pending',
    dueDate: '2024-01-15',
    paidDate: null,
    unit: 'B-205',
    residentName: 'Jane Smith'
  },
  {
    id: 3,
    type: 'utility_bill',
    description: 'Electricity bill for December',
    amount: 2500,
    status: 'pending',
    dueDate: '2024-01-20',
    paidDate: null,
    unit: 'C-105',
    residentName: 'Mike Johnson'
  }
];

financeRoutes.get('/', (req, res) => {
  try {
    const { status, type, unit } = req.query;
    
    let filteredTransactions = transactions;
    
    if (status && status !== 'all') {
      filteredTransactions = filteredTransactions.filter(t => t.status === status);
    }
    
    if (type && type !== 'all') {
      filteredTransactions = filteredTransactions.filter(t => t.type === type);
    }
    
    if (unit && unit !== 'all') {
      filteredTransactions = filteredTransactions.filter(t => t.unit === unit);
    }

    const totalAmount = filteredTransactions.reduce((sum, t) => sum + t.amount, 0);
    const paidAmount = filteredTransactions.filter(t => t.status === 'paid').reduce((sum, t) => sum + t.amount, 0);
    const pendingAmount = filteredTransactions.filter(t => t.status === 'pending').reduce((sum, t) => sum + t.amount, 0);

    res.json({
      success: true,
      data: filteredTransactions,
      summary: {
        total: totalAmount,
        paid: paidAmount,
        pending: pendingAmount,
        count: filteredTransactions.length
      },
      filters: { status, type, unit }
    });
  } catch (error) {
    console.error('Error fetching financial data:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch financial data'
    });
  }
});

financeRoutes.post('/payment', (req, res) => {
  try {
    const { transactionId, amount, paymentMethod } = req.body;

    if (!transactionId || !amount || !paymentMethod) {
      return res.status(400).json({
        success: false,
        message: 'Transaction ID, amount, and payment method are required'
      });
    }

    const transactionIndex = transactions.findIndex(t => t.id === parseInt(transactionId));
    
    if (transactionIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Transaction not found'
      });
    }

    transactions[transactionIndex].status = 'paid';
    transactions[transactionIndex].paidDate = new Date().toISOString();
    transactions[transactionIndex].paymentMethod = paymentMethod;

    res.json({
      success: true,
      message: 'Payment processed successfully',
      data: transactions[transactionIndex]
    });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({
      success: false,
      message: 'Payment processing failed'
    });
  }
});

financeRoutes.get('/summary', (req, res) => {
  try {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    
    const monthlyTransactions = transactions.filter(t => {
      const transactionDate = new Date(t.dueDate);
      return transactionDate.getMonth() === currentMonth && transactionDate.getFullYear() === currentYear;
    });

    const monthlyIncome = 0;
    const monthlyExpenses = monthlyTransactions.reduce((sum, t) => sum + t.amount, 0);

    res.json({
      success: true,
      data: {
        month: currentMonth + 1,
        year: currentYear,
        income: monthlyIncome,
        expenses: monthlyExpenses,
        net: monthlyIncome - monthlyExpenses,
        transactionCount: monthlyTransactions.length
      }
    });
  } catch (error) {
    console.error('Error generating financial summary:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate financial summary'
    });
  }
});

module.exports = financeRoutes;
