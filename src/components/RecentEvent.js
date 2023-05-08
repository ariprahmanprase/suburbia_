import '../index.css'
import React from 'react';
import FotoRecent from "../Image/vid recent.png";
import GalRecent1 from "../Image/rcnt 1.png";
import GalRecent2 from "../Image/rcnt 2.png";
import GalRecent3 from "../Image/rcnt 3.png";
import GalRecent4 from "../Image/rcnt 4.png";


export default function RecentEvent() {
  return (
    <section>
        <h1 className="section headingrecent">Recent Event Of Suburbia</h1>
      <div className="container recentevent-wrapper">
            <img src={FotoRecent} alt="" className="fotorecent" />
            <div className="deskripsirecent">
              <div className="galerirecent">
                <img src={GalRecent1} alt="" className="fotorecent" />
                <img src={GalRecent2} alt="" className="fotorecent" />
                <img src={GalRecent3} alt="" className="fotorecent" />
                <img src={GalRecent4} alt="" className="fotorecent" />
              </div>
              <h1 className="judulrecent">Kupatisme</h1>
              <p className="parrecent">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
              <div className="buttonrecent">
                <a href="#" className="seegalery">See Galery</a>
                <a href="#" className="uncomingshow">Uncoming Show</a>
              </div>
            </div>
        </div>
    </section>
  )
}
