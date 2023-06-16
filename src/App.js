import React from 'react';
import { Draggable } from './Draggable';
import './App.css';

// export const Single = () => (
//   <Draggable
//     onDragStart={(rect) => { console.log('onDragStart => ', rect) }}
//     onDragEnd={(rect) => { console.log('onDragEnd => ', rect) }}
//   >
//     <div>Draggable</div>
//   </Draggable>
// );


const w = window.innerWidth;
const h = window.innerHeight;

const adjustedW = w * .8;
const adjustedH = h * .8;

export const Multiple = () => (
  <main>
        <Draggable onDragStart={(rect) => { console.log('onDragStart => ', rect) }} 
    style={{ left: Math.floor(Math.random() * adjustedW), top: Math.floor(Math.random() * adjustedH) }} 
    >
      <div>Draggable 1</div>
    </Draggable>

    <Draggable
      style={{ left: '200px', top: '200px' }}
    >
      <div style={{ backgroundColor: '#2196f3' }}>Draggable 2</div>
    </Draggable>
  </main>
);
