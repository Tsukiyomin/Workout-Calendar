import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Workout from "./Workout";

const Day = ({ day, workouts }) => (
  <Droppable droppableId="day.id">
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.droppableProps}
        className={`day-container ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
      >
        <h2 className="day-of-week">{day.name}</h2>
        <h3 className="day-of-month">{day.date}</h3>
        {workouts.map((workout, index) => (
          <Workout key={workout.id} workout={workout} index={index}/>
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export default Day;