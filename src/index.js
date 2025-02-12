// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import BG from './BG';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BG />
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThankYou from './ThankYou'; // Import the ThankYou component
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import BG from './BG';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderPage = () => {
  const pathname = window.location.pathname;

  if (pathname === '/thankyou') {
    return <ThankYou />;
  } else {
    return <App />;
  }
};

root.render(
  <React.StrictMode>
    <BG />
    {renderPage()}
  </React.StrictMode>
);

reportWebVitals();
