import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import Welcome from './Welcome'

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
// ReactDOM.render(
//   <h1>Hello react</h1>,
//   document.getElementById('root')
// )

// function tick() {
//   const element = (
//     <div>
//       <h1>hello react</h1>
//       <h2>{new Date().toLocaleTimeString()}</h2>
//     </div>
//   )
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   )
// }

// setInterval(tick, 1000)

ReactDOM.render(
  <Welcome name="hua"/>,
  document.getElementById('root')
)