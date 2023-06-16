import React from 'react';
import { Draggable } from './Draggable';
import './App.css';

export const Single = () => (
  <Draggable
    onDragStart={(rect) => { console.log('onDragStart => ', rect) }}
    onDragEnd={(rect) => { console.log('onDragEnd => ', rect) }}
  >
    <div>Draggable</div>
  </Draggable>
);

export const Multiple = () => (
  <main>
    <Draggable onDragStart={(rect) => { console.log('onDragStart => ', rect) }}>
      <div>Draggable 1</div>
    </Draggable>

    <Draggable
      style={{ left: '200px', top: '200px' }}
    >
      <div style={{ backgroundColor: '#2196f3' }}>Draggable 2</div>
    </Draggable>
  </main>
);

export default Multiple;