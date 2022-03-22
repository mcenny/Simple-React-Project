// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Hello from './App';
// import reportWebVitals from './reportWebVitals';

// const page = (
//   <div>
//     <img src='./react-logo.png' width='50px'/>
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K stars on GitHub</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// )

// ReactDOM.render(
//   page,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
