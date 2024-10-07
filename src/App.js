import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AddEvent from './components/AddEvent';
import EventList from './components/EventList';

function App() {
  const [events, setEvents] = useState([]);

  // Load events from localStorage when the app loads
  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  // Update localStorage whenever the events array changes
  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const addEvent = (event) => {
    setEvents([...events, { ...event, timeStamp: new Date(event.date).getTime() }]);
  };

  const deleteEvent = (index) => {
    const newEvents = events.filter((_, i) => i !== index);
    setEvents(newEvents);
  };

  return (
    <div className="container">
      <Header />
      <AddEvent onAddEvent={addEvent} />
      <EventList events={events} onDeleteEvent={deleteEvent} />
    </div>
  );
}

export default App;
