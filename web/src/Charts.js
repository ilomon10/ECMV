import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Colors } from '@blueprintjs/core';

function Charts({ className, style }) {
  const [chartsOption] = useState([{
    type: "line",
    chart: {
      id: "pressure-chart",
      toolbar: { show: false },
      zoom: { enabled: false }
    },
    colors: [Colors.GOLD5],
    grid: { show: false },
    title: {
      text: "Pressure",
      align: "left",
      style: { color: Colors.WHITE }
    }
  }, {
    type: "line",
    chart: {
      id: "flow-chart",
      toolbar: { show: false },
      zoom: { enabled: false }
    },
    colors: [Colors.ROSE5],
    grid: { show: false },
    title: {
      text: "Flow",
      align: "left",
      style: { color: Colors.WHITE }
    }
  }]);
  const [chartsSeries] = useState([[{
    name: "cmH2O",
    data: [1, 2, 1, 4, 5, 6, 5, 8, 9, 10]
  }], [{
    name: "L/min",
    data: [1, 2, 1, 4, 5, 6, 5, 8, 9, 10]
  }]]);
  return (
    <div className={`${className} flex flex--col`} style={style}>
      {chartsOption.map(({ type, ...c }, i) => (
        <div className="flex-grow" style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 21, right: 21, bottom: 0 }}>
            <Chart width="100%" height="100%" type={type} options={c} series={chartsSeries[i]} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Charts;