import React, { useState } from 'react';
import Plus from './Plus';
import Exercise from './Exercise';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Workout = ({ workout, index }) => {
  const [exercises, setExercises] = useState(workout.exercises);

  const handleAddExercise = (exercise) => {
    setExercises([...exercises, exercise]);
  };

  return (
    <Draggable draggableId={workout.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`workout-container ${snapshot.isDragging ? 'dragging' : ''}`}
        >
          <div>
            <h3>{workout.name}</h3>
            {workout.exercise.map((exercise, index) => (
              <Exercise key={index} exercise={exercise} />
            ))}
            <Plus onAddExercise={handleAddExercise} />
            <Droppable droppableId={workout.id} type="exercise">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {exercises.map((exercise, index) => (
                    <Exercise key={exercise.id} exercise={exercise} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Workout;
