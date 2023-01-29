import React, { useState } from "react";
import { DragDropContext,Droppable } from "react-beautiful-dnd";
import Day from './Day';

const Calendar = () => {
  const [days, setDays] = useState([
    { id: 'Monday', date: 1, workouts: [] },
    { id: 'Tuesday', date: 2, workouts: [] },
    { id: 'Wednesday', date: 3, workouts: [] },
    { id: 'Thursday', date: 4, workouts: [] },
    { id: 'Friday', date: 5, workouts: [] },
    { id: 'Saturday', date: 6, workouts: [] },
    { id: 'Sunday', date: 7, workouts: [] },
  ]);
  
  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startDay = days.find((day) => day.id === source.droppableId);
    const endDay = days.find((day) => day.id === destination.droppableId);
    const workout = startDay.workouts.splice(source.index, 1)[0];
    endDay.workouts.splice(destination.index, 0, workout);

    setDays([...days]);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="calendar" direction="horizontal" type="day">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {days.map((day, index) => (
              <Day key={day.id} day={day} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};


export default Calendar;