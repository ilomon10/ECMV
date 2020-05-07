import React, { useState } from 'react';
import { Colors, Classes } from '@blueprintjs/core';
import Charts from './Charts';
import Topbar from './Topbar';

function App() {
  const [controls] = useState([{
    title: "I:E",
    value: "1:4",
  }, {
    title: "BPM",
    value: "20",
  }, {
    title: "TV",
    value: "20%",
  }]);
  return (
    <div className={`flex flex--col`}
      style={{ height: '100%', backgroundColor: Colors.COBALT1, paddingBottom: 21, paddingLeft: 0 }}>
      <Topbar className={`flex-shrink-0`} />
      <div className={`flex-grow flex flex--row`}>
        <Charts className="flex-grow"
          style={{ backgroundColor: Colors.BLACK, borderRadius: "0px 12px 12px 0", border: "4px solid white", borderLeft: 'none' }} />
        <div className="flex-shrink-0 flex flex--col flex--j-center"
          style={{ textAlign: "center" }}>
          {controls.map((c, i) => (
            <div key={i} className={`${Classes.DARK}`}
              style={{ padding: 21, borderTop: (i !== 0 ? '2px solid white' : 'none') }}>
              <h1 className={Classes.HEADING}>{c.value}</h1>
              <p style={{ margin: 0 }}>{c.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
