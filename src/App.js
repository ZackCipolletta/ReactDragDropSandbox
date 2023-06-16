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

let top;
let bottom;

if (w > h) {
  left = adjustedW * 0.5
  right = w - adjustedW * 0.5
  } else if (h > w) {
  top = adjustedH * 0.5
  bottom = h - adjustedH * 0.5
}

// make object appear anywhere in the page
// style={{ left: Math.floor(Math.random() * adjustedW), top: Math.floor(Math.random() * adjustedH) }}


// This one stays to the right half of the screen.
{/* <Draggable onDragStart={(rect) => { console.log('onDragStart => ', rect) }} style={{ left: left + Math.floor(Math.random() * left ), top: Math.floor(Math.random() * adjustedH) }} >
<div>Draggable 2</div>

</Draggable> */}


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


const style = { left: leftPosition(), top: Math.floor(Math.random() * adjustedH) };

// if h > w
const Multiple = () => (
  <main>


    <Draggable onDragStart={(rect) => { console.log('onDragStart => ', rect) }} 
    style={style
    }
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

// else if w > h
// stuff with vertical format

export default Multiple;

// const style1 = horizontal format
// const style2 = vertical format
// if (h > w) { style1 } else if (w > h) { style2}