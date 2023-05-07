// import './Hero.css';
import React from 'react'
import fotoCoba from "../hero/Header.png"
import "../../../src/index.css"

export default function Hero() {
  return (
    <section>
      <div className="row">
        <div className="col">
          <img src={fotoCoba} alt="" className='hero1'/>
        </div>
        <div className="col-auto">
          <img src={fotoCoba} alt="" />
        </div>
      </div>
   </section>
  )
}
