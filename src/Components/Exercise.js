import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Exercise = ({ exercise, index }) => (
  <Draggable draggableId={exercise.id} index={index}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={`exercise-container ${snapshot.isDragging ? 'dragging' : ''}`}
      >
        <h4 className="exercise-name">{exercise.name}</h4>
        <p className="exercise-description">{exercise.description}</p>
      </div>
    )}
  </Draggable>
);

export default Exercise;