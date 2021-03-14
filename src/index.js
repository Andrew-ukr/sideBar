import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ReactProvider } from "./context";
import App from './App'
ReactDOM.render(
  <React.StrictMode>
    <ReactProvider>
      <App />
    </ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
