import React from 'react';
import './App.css';

import Assets from './utils/Assets';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function App() {
  return (
    <div className="ctnr">
      <div className="bg-white rounded-xl p-10 w-80 flex flex-col items-center justify-center">
        <div className='items-center py-2'>
          <img src={Assets.Icon} className="w-10 h-full mr-3 inline-block" alt="logo" />
          <img src={Assets.IconWord} className="w-32 bg-contain inline-block" alt="logo" />
        </div>

        <React.Fragment>
          <h1 className="text-2xl font-bold">Log-in</h1>
          <input className="w-full p-3 my-3 border border-gray-300 rounded" type="text" placeholder="Username" />
          <input className="w-full p-3 my-3 border border-gray-300 rounded" type="password" placeholder="Password" />
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
