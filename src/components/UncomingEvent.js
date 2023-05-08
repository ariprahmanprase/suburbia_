import '../index.css'
import React from 'react'
import GbrUncoming from "../Image/uncoming event-1.png";

export default function UncomingEvent() {
  return (
    <section>
      <h1 className="container headinguncoming">Uncoming Event</h1>
      <div className="container uncomingwrapper">
        <img src={GbrUncoming} alt="" className="gbruncoming" />
        <div className="ketuncoming">
          <h1 className="juduluncoming">Pahing Gig's</h1>
          <p className="ketuncoming">by Suburbia</p>
          <p className="performer">Performer :</p>
          <p className="artist">Lunarways, Burner , Shewn ,Seringai , Girl and Her Badmood</p>
        </div>
      </div>
    </section>
  )
}
