import React, { useState } from 'react';
import './App.css';


const ColorPicker = () => {
    const [bgColor, setBgColor] = useState("black");

  return (
    <div className='bgChange' style={{backgroundColor : bgColor}}>
      <ul className='colorPicker'>
        <li><button onClick={()=>setBgColor('red')} className='red'>RED</button></li>
        <li><button onClick={()=>setBgColor('blue')} className='blue'>BLUE</button></li>
        <li><button onClick={()=>setBgColor('green')} className='green'>GREEN</button></li>
        <li><button onClick={()=>setBgColor('white')} className='white'>WHITE</button></li>
        <li><button onClick={()=>setBgColor('yellow')} className='yellow'>YELLOW</button></li>
      </ul>
    </div>
  )
}

export default ColorPicker;
