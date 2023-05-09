import React from 'react'
import "../index.css";
import Galeri1 from "../Image/galeries-1.png";
import Galeri2 from "../Image/galeries-2.png";
import Galeri3 from "../Image/galeries-3.png";
import Galeri4 from "../Image/galeries-4.png";

export default function Galeries() {
  return (
    <section>
        <h1 className="container headergaleries">
        Galleries Of Suburbia
        </h1>
        <div className="container galerieswrapper">
            <div className="cardgaleries">
                <img src={Galeri1} alt="" className="gbrgaleries" />
                <div className="deskgaleries">
                    <div className="colrightgaleries">
                        <h1 className="judulgaleries">Menelisik #1</h1>
                        <p className="tahungaleries">2021</p>
                    </div>
                        <div className="linkseemoregaleries">  <a href="#" className="seemoregaleries">See More..</a>
                        </div>
                </div>
            </div>
            <div className="cardgaleries">
                <img src={Galeri2} alt="" className="gbrgaleries" />
                <div className="deskgaleries">
                    <div className="colrightgaleries">
                        <h1 className="judulgaleries">Graveyard</h1>
                        <p className="tahungaleries">2021</p>
                    </div>
                        <div className="linkseemoregaleries">  <a href="#" className="seemoregaleries">See More..</a>
                        </div>
                </div>
            </div>
            <div className="cardgaleries">
                <img src={Galeri3} alt="" className="gbrgaleries" />
                <div className="deskgaleries">
                    <div className="colrightgaleries">
                        <h1 className="judulgaleries">Menelisik #2</h1>
                        <p className="tahungaleries">2021</p>
                    </div>
                        <div className="linkseemoregaleries">  <a href="#" className="seemoregaleries">See More..</a>
                        </div>
                </div>
            </div>
            <div className="cardgaleries">
                <img src={Galeri4} alt="" className="gbrgaleries" />
                <div className="deskgaleries">
                    <div className="colrightgaleries">
                        <h1 className="judulgaleries">Kupatisme</h1>
                        <p className="tahungaleries">2021</p>
                    </div>
                        <div className="linkseemoregaleries">  <a href="#" className="seemoregaleries">See More..</a>
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}
