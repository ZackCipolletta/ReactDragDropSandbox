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
  right = w - adjustedW * .5
  // wide = [left, right];
  // return wide;
  //place className 'question' in left
} else if (h > w) {
  const top = adjustedH * 0.5
  const bottom = h - adjustedH
}

// make object appear anywhere in the page
// style={{ left: Math.floor(Math.random() * adjustedW), top: Math.floor(Math.random() * adjustedH) }}



const Multiple = () => (
  <main>

    <Draggable onDragStart={(rect) => { console.log('onDragStart => ', rect) }} 
    
      style={{
        left: Math.floor(Math.random() * (left * .8)),
        top: Math.floor(Math.random() * adjustedH)
      }} 
    >
      <div>question 1</div>
      
    </Draggable>

    <Draggable
      style={{
        left: Math.floor(Math.random() * (left * .8)),
        top: Math.floor(Math.random() * adjustedH)
      }}
    >
      <div style={{ backgroundColor: '#2196f3' }}>question 2</div>
    </Draggable>

    <Draggable
      style={{
        left: Math.floor(Math.random() * (left * .8)),
        top: Math.floor(Math.random() * adjustedH)
      }}
    >
      <div style={{ backgroundColor: '#1fb230' }}>question 3</div>
    </Draggable>


    <Draggable
      style={{
        left: left + Math.floor(Math.random() * (right * .8)),
        top: Math.floor(Math.random() * adjustedH)
      }}
    >
      <div style={{ backgroundColor: '#7a1fb2' }}>Answer 1</div>
    </Draggable>

    <Draggable 
      style={{
        left:
          left + Math.floor(Math.random() * (right * .8)), 
          top: Math.floor(Math.random() * adjustedH)
      }} 
    >
    <div style={{ backgroundColor: '#e928a9'}}>Answer 2</div>
    </Draggable>  

  </main>
);

export default Multiple;


