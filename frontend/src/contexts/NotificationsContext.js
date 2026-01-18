import React, { createContext, useContext, useState, useEffect } from 'react';

const NotificationsContext = createContext();

export const useNotifications = () => {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationsProvider');
  }
  return context;
};

export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Visitor Request',
      message: 'Rahul Sharma requested entry for delivery',
      type: 'visitor',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      read: false
    },
    {
      id: 2,
      title: 'System Alert',
      message: 'System update completed for Block A',
      type: 'system',
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      read: false
    },
    {
      id: 3,
      title: 'Payment Received',
      message: 'Monthly service fee paid for unit A-101',
      type: 'payment',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      read: true
    }
  ]);

  const [unreadCount, setUnreadCount] = useState(2);

  // Simulate real-time notifications
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNotifications = [
        { title: 'New Visitor', message: 'Guest arrived at main gate', type: 'visitor' },
        { title: 'System Update', message: 'Scheduled system update completed', type: 'system' },
        { title: 'Payment Reminder', message: 'Monthly payment due in 3 days', type: 'payment' },
        { title: 'System Alert', message: 'Server backup completed successfully', type: 'system' }
      ];

      const randomNotification = randomNotifications[Math.floor(Math.random() * randomNotifications.length)];
      
      setNotifications(prev => [
        {
          id: Date.now(),
          ...randomNotification,
          timestamp: new Date(),
          read: false
        },
        ...prev.slice(0, 9) // Keep only last 10 notifications
      ]);
    }, 30000); // Add notification every 30 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const unread = notifications.filter(n => !n.read).length;
    setUnreadCount(unread);
  }, [notifications]);

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const addNotification = (notification) => {
    setNotifications(prev => [
      {
        id: Date.now(),
        ...notification,
        timestamp: new Date(),
        read: false
      },
      ...prev
    ]);
  };

  const value = {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    addNotification
  };

  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
};
