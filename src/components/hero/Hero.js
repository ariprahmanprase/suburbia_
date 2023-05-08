// import './Hero.css';
import React from 'react'
import fotoCoba from "../hero/Header.png"
import "../../../src/index.css"

export default function Hero() {
  return (
      <div className="row">
        <div className="col">
          <img src={fotoCoba} alt="" className='hero1'/>
        </div>
      </div>
  )
}
