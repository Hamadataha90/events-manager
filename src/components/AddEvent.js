import React, { useState, useEffect } from 'react';

const AddEvent = ({ onAddEvent }) => {
  const [eventName, setEventName] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [eventDate, setEventDate] = useState('');

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setEventDate(today);
  }, []);

  const handleAddEvent = () => {
    const today = new Date().toISOString().split("T")[0];

    if (eventName && eventDate && organizer) {
      if (eventDate >= today) {
        onAddEvent({ name: eventName, date: eventDate, organizer });
        setEventName('');
        setOrganizer('');
        setEventDate(today);
      } else {
        alert("Please select a date that is today or in the future.");
      }
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="add-box">
      <h2>Add Event</h2>
      <input
        type="text"
        className="event-name"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input
        type="text"
        className="organizer"
        placeholder="Event Organizer"
        value={organizer}
        onChange={(e) => setOrganizer(e.target.value)}
      />
      <input
        type="date"
        className="event-date"
        value={eventDate}
        min={new Date().toISOString().split("T")[0]}  // Set min date to today
        onChange={(e) => setEventDate(e.target.value)}
      />
      <button className="add" onClick={handleAddEvent}>Add Event</button>
    </div>
  );
};

export default AddEvent;
