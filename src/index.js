import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
// import "./assets/vendor/icofont/icofont.min.css" 
// import "./assets/vendor/boxicons/css/boxicons.min.css"
// import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css"
// import "./assets/vendor/venobox/venobox.css" 
// import "./assets/vendor/remixicon/remixicon.css"
// import "./assets/vendor/aos/aos.css"




// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();