import React from 'react';
import './App.css'; // import CSS stylesheets

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav>
          <div className="left-link">
            <a className="tab" href="/">Ema Pop</a>
          </div>
          <a className="tab active" href="/projects">Projects</a>
        </nav>
      </header>

      <br/><br/><br/><br/><br/><br/>

      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="cell equal-height small-12 large-6">
            <div className="card">
              <h4><a href="https://emapop28.wixsite.com/qm2group15" target="_blank">Air Pollution and Happiness: a geopolitical issue?</a></h4>
              <p><i>Data Analysis - January 2023</i><br/>
                This enquiry will explore the relationship between different indicators of air pollution (PM2.5 &amp; PM10 levels) and happiness (using scored ‘happy means' data), across the years 2011-2021. The spatial variation of the relationship between pollution and happiness will be visualised geospatially, using <a href="https://www.qgis.org/en/site/" target="_blank">QGIS</a>. The data <a href="https://emapop28.wixsite.com/qm2group15/s-projects-basic" target="_blank">collection</a>, <a href="https://emapop28.wixsite.com/qm2group15/about-8" target="_blank">cleaning</a>, <a href="https://emapop28.wixsite.com/qm2group15/general-5" target="_blank">translation</a> and <a href="https://emapop28.wixsite.com/qm2group15/copy-of-data-cleaning" target="_blank">visualisation</a> were done as a team.
              </p>
              <a href="https://emapop28.wixsite.com/qm2group15" target="_blank">
                <img className="image" src="Images/2012_PM25_ pollution_jpg.jpg" alt="Air pollution map" />
              </a>
            </div>
          </div>
          <div className="cell equal-height small-12 large-6">
            <div className="card">
              <h4><a href="/Breathworld">Breathworld</a></h4>
              <p><i>App Development - 2023</i><br/>
                I created the whole user interface and user journey of the app and and have participated at user research, impact analysis and competition research. The app prototype was pitched at <a href="https://initiator.vc/" target="_blank">Initiator VC</a> and it is currently in the proccess of developing a fully functional iOS app.
              </p>
              <a href="/Breathworld">
                <img className="image" src="Images/Artboard – 11@2x.png" alt="Breathworld app prototype" />
              </a>
            </div>
          </div>
          <div className="cell equal-height small-12 large-6">
            <div className="card">
              <h4><a href="/Through The Loop">Through The Loop</a></h4>
              <p><i>Augmented Reality experimentations - 2021</i><br/></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
               
