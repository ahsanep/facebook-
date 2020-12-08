import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const date = new Date()
const tym = new Date()

ReactDOM.render(
  < >
    <div className="bg">
      <img className="image1" src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" alt="image1" />
      <p style={{ color: "whitesmoke" }} className="name"> AHSAN QURESHI </p>
      <p style={{ color: "whitesmoke" }}>{date.toLocaleDateString()}</p>
      <p style={{ color: "whitesmoke" }}className="tym">{tym.toLocaleTimeString()}</p>
      <img style={{width:"500px"}} src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" alt="image1" />
      <br></br>
      <button className="btn">LIKE</button>
      <button className="btn" >COMMENT</button>
      <button className="btn">SHARE</button>
      <br></br>
      <img className="image1" src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg" alt="image2" />
      <p style={{ color: "whitesmoke" }}  className="name"> SADIQ HUSSAIN </p>
      <p style={{ color: "whitesmoke" }} >{date.toLocaleDateString()}</p>
      <p style={{ color: "whitesmoke" }} className="tym">{tym.toLocaleTimeString()}</p>
      
      <img style={{width:"500px"}} src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg" alt="image2" />
      <br></br>
      <button className="btn">LIKE</button>
      <button className="btn" >COMMENT</button>
      <button className="btn">SHARE</button>" 
    <br></br>
      <img className="image1" src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image1" />
      <p style={{ color: "whitesmoke" }}  className="name"> AHMED QURESHI </p>
      <p style={{ color: "whitesmoke" }}>{date.toLocaleDateString()}</p>
      <p style={{ color: "whitesmoke" }} className="tym">{tym.toLocaleTimeString()}</p>
      
      <img style={{width:"500px"}} src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image1" />
      <br></br>
      <button className="btn">LIKE</button>
      <button className="btn" >COMMENT</button>
      <button className="btn">SHARE</button>
    </div>
  </>,
  document.querySelector('#root')
);


