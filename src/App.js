import React from 'react';
import { Draggable } from './Draggable';
import './App.css';

// if/then width/height (if w>h: divide l/r, if h>w: divide top/bottom)

// if w > h
const w = window.innerWidth;
const h = window.innerHeight;

let left;
let right;

// if h > w
const adjustedW = w * .8;
const adjustedH = h * .8;

let top;
let bottom;

if (w > h) {
  left = adjustedW * 0.5
  right = w - adjustedW * 0.5
  } else if (h > w) {
  top = adjustedH * 0.5
  bottom = h - adjustedH * 0.5
}

// if w > h
function rightPosition() {
  const position = left + Math.floor(Math.random() * (right * 0.8));
  
  if (position > (w * .85) || position < (w * .5)) {
    return rightPosition(); // Call itself again
  }
  
  return position;
}

function leftPosition() {
  return Math.floor(Math.random() * (left * 0.9));
}

// if h > w
function topPosition() {
  return Math.floor(Math.random() * (top * 0.9));
}

function bottomPosition() {
  const position = top + Math.floor(Math.random() * (bottom * 0.8));
  
  if (position > (h * .85) || position < (h * .5)) {
    return bottomPosition(); // Call itself again
  }
  
  return position;
}

let Multiple;
if (w > h) {

  Multiple = () => (
    <main>
  
  
      <Draggable onDragStart={(rect) => { console.log('onDragStart => ', rect) }} 
      style={{left: leftPosition(), top: Math.floor(Math.random() * adjustedH)
      }}
      >
        <div>question 1</div>
      </Draggable>
  
      <Draggable
        style={{ left: leftPosition(), top: Math.floor(Math.random() * adjustedH) }}
      >
        <div style={{ backgroundColor: '#2196f3' }}>question 2</div>
      </Draggable>
  
      <Draggable
        style={{ left: leftPosition(), top: Math.floor(Math.random() * adjustedH) }}
      >
        <div style={{ backgroundColor: '#1fb230' }}>question 3</div>
      </Draggable>
  
  
  
  {/* answer divs */}
      <Draggable
        // style={{ left: left + Math.floor(Math.random() * (right *.8) ), top: Math.floor(Math.random() * adjustedH) }}
        style={{ left: rightPosition(), top: Math.floor(Math.random() * adjustedH) }}
      >
        <div style={{ backgroundColor: '#7a1fb2' }}>Answer 1</div>
      </Draggable>
  
      <Draggable 
        style={{ left: rightPosition(), top: Math.floor(Math.random() * adjustedH) }}
      >
      <div style={{ backgroundColor: '#e928a9'}}>Answer 2</div>
      </Draggable>  
  
    </main>
  );
  
} else if (h > w) {
  
  Multiple = () => (
    <main>
  
  
      <Draggable onDragStart={(rect) => { console.log('onDragStart => ', rect) }} 
      style={{left: Math.floor(Math.random() * adjustedW), top: topPosition()
      }}
      >
        <div>question 1</div>
      </Draggable>
  
      <Draggable
        style={{ left: Math.floor(Math.random() * adjustedW), top: topPosition()
        }}
      >
        <div style={{ backgroundColor: '#2196f3' }}>question 2</div>
      </Draggable>
  
      <Draggable
        style={{ left: Math.floor(Math.random() * adjustedW), top: topPosition()
        }}
      >
        <div style={{ backgroundColor: '#1fb230' }}>question 3</div>
      </Draggable>
  
  
  
  {/* answer divs */}
      <Draggable
        // style={{ left: left + Math.floor(Math.random() * (right *.8) ), top: Math.floor(Math.random() * adjustedH) }}
        style={{ left: Math.floor(Math.random() * adjustedW), top: bottomPosition()
        }}
      >
        <div style={{ backgroundColor: '#7a1fb2' }}>Answer 1</div>
      </Draggable>
  
      <Draggable 
        style={{ left: Math.floor(Math.random() * adjustedW), top: bottomPosition()
        }}
      >
      <div style={{ backgroundColor: '#e928a9'}}>Answer 2</div>
      </Draggable>  
  
    </main>
  );
}

export default Multiple;