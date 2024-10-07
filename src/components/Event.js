import React, { useState, useEffect } from 'react';

const Event = ({ event, onDelete }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(event.timeStamp));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(event.timeStamp));
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, [event.timeStamp]);

  return (
    <div className="event">
      <h3>{event.name}</h3>
      <p><span>By</span> {event.organizer}</p>
      <p><span>On</span> {event.date}</p>
      <p><span>Time Left</span> {timeLeft}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

const calculateTimeLeft = (eventTimeStamp) => {
  const now = new Date().getTime();
  const timeLeft = eventTimeStamp - now;

  if (timeLeft < 0) return "Event Passed"; // Handle past events

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

export default Event;
