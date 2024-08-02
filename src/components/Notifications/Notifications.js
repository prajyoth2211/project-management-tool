// components/Notifications/Notifications.js
import React from 'react';

const Notifications = ({ notifications = [] }) => { // Default to an empty array
  return (
    <div>
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications available</p>
      ) : (
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification.message}</li> // Assuming each notification has a 'message' property
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
