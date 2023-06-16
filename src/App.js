import React from 'react';
import { Draggable } from './Draggable';
import './App.css';

// const randoNum = Math.floor(Math.random() * 1000);

const w = window.innerHeight;
const h = window.innerHeight;

const adjustedW = w * .9;
const adjustedH = h * .9;


// const randoNum = Math.floor(Math.random() * 100);


const Multiple = () => (
  <main>
    <Draggable onDragStart={(rect) => { console.log('onDragStart => ', rect) }} style={{ left: Math.floor(Math.random() * adjustedW), top: Math.floor(Math.random() * adjustedH) }}>
      <div>Draggable 1</div>
      
    </Draggable>

    <Draggable
      style={{ left: Math.floor(Math.random() * adjustedW), top: Math.floor(Math.random() * adjustedH) }}
    >
      <div style={{ backgroundColor: '#2196f3' }}>Draggable 2</div>
    </Draggable>
  </main>
);

export default Multiple;
