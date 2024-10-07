// src/components/EventList.js
import React from 'react';
import Event from './Event';

const EventList = ({ events, onDeleteEvent }) => {
  return (
    <div className="events">
      {events.map((event, index) => (
        <Event
          key={index}
          event={event}
          onDelete={() => onDeleteEvent(index)}
        />
      ))}
    </div>
  );
};

export default EventList;
