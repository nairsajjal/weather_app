import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Commonstyle.css';
function App() {
  return (
    <div className="App">
    

    <div className="row">
        <div className="column"> 
          <div className="card">
            <div className="location">
              <h1 className="location-timezone">Timezone</h1>
              <canvas className="icon" width={128} height={128} />
            </div>
            <div className="temperature">
              <div className="degree-section">
                <h2 className="temperature-degree">40 </h2>
                <span>F</span>
              </div>
              <div className="temperature-description">Its HOT</div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;
