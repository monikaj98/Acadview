import React from 'react';
import ColorChanger from '../HOC/ColorChanger';


const About = () => {
  return(
    <div>
      <div className='center container'>
        <h4>About Page</h4>
        <p> This my About page. </p>
      </div>
    </div>
  )
}

export default ColorChanger(About);