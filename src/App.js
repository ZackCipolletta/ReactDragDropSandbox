import React from 'react';
import { Draggable } from './Draggable';
import './App.css';

// if/then width/height (if w>h: divide l/r, if h>w: divide top/bottom)


const w = window.innerWidth;
const h = window.innerHeight;

const adjustedW = w * .8;
const adjustedH = h * .8;

let left;
let right;

if (w > h) {
  left = adjustedW * 0.5
} else if (h > w) {
  const top = adjustedH * 0.5
  const bottom = h - adjustedH
}

const Multiple = () => (
  <main>
    <Draggable onDragStart={(rect) => { console.log('onDragStart => ', rect) }} style={{ left: Math.floor(Math.random() * left), top: Math.floor(Math.random() * adjustedH) }} >
      <div>Draggable 1</div>
      
    </Draggable>
  </main>
);

export default Multiple;