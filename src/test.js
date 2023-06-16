import React from 'react';
import { Draggable } from './Draggable';
import './App.css';

const w = window.innerWidth;
const h = window.innerHeight;

const adjustedW = w * 0.8;
const adjustedH = h * 0.8;

const left = adjustedW * 0.5;
const right = w - adjustedW * 0.5;

const leftPosition = Math.floor(Math.random() * (left * 0.8));
const rightPosition = Math.floor(Math.random() * (right * 0.8));

const Multiple = () => (
  <main>

        // Left side
  <Draggable
    style={{ left: leftPosition, top: Math.floor(Math.random() * adjustedH) }}
  >
    <div>Element on Left</div>
  </Draggable>

  // Right side
  <Draggable
    style={{ left: left + rightPosition, top: Math.floor(Math.random() * adjustedH) }}
  >
    <div>Element on Right</div>
  </Draggable>

    </main>
  );

export default Multiple;









const w = window.innerWidth;
const h = window.innerHeight;

const adjustedW = w * .8;
const adjustedH = h * .8;

let left;
let right;

if (w > h) {
  left = adjustedW * 0.5
  right = w - adjustedW * 0.5
} else if (h > w) {
  const top = adjustedH * 0.5

}

// function rightPosition () { 
//   return left + Math.floor(Math.random() * (right * 0.8));
// }

function rightPosition () { 
  if (left + Math.floor(Math.random() * (right * 0.8)) > (left)) {
    return (left + Math.floor(Math.random) * (right * 0.8)) + (left * 0.1)
  }
}