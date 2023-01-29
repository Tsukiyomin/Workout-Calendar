import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

const DragDrop = ({ list, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="drag-drop-container">
        {list.map((item, index) => {
          return (
            <div
              key={item.id}
              className="drag-drop-item"
              draggable={true}
              index={index}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default DragDrop;
