import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img1 from './images/emmanuel-ikwuegbu-VC6MGt9ZoBA-unsplash.jpg';
import img2 from './images/zoe-schaeffer-hmoDcZnB7uw-unsplash.jpg';
import img3 from './images/markus-spiske-fDvokTkwEZ8-unsplash.jpg';
import img4 from './images/jan-kopriva-LTMaAwxanGk-unsplash (1).jpg';
import "./style.css";
function App() {

  const [image, setImage] = useState('');

  function handleImage(e) {
    setImage(e.target.files[0]);
  }

  function handleApi() {
    const formData = new FormData();
    formData.append('image', image);

    
    // edit api


    axios.post('https://example.com/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((res) => {
        console.log(res.data.url);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="App">
      <header>
        <div id="head">
          <div id="logo">
            <h1>Food-संज्ञा</h1>
            <p>A Lane to Goodness</p>
          </div>
          <div id="navitems">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section id="home">
          <div class="bg-image"></div>
          <div class="bg-text">
            <h2>Welcome to Food-संज्ञा</h2>
            <p>We are committed to ending hunger, achieving food security, and improving nutrition through sustainable agriculture.</p>
            <h4>Food - Image - Inspect</h4>
            <p>Upload an image to show your problem and solution:</p>
            <div class="input">
              <input type="file" id="image" name="image" accept="image/*" onChange={handleImage} />
              <button onClick={handleApi}>Submit</button>
            </div>
          </div>

        </section>

        <section id="about">
          <h2>About Us</h2>
          <p>Food-संज्ञा is a company that is dedicated to ending hunger, achieving food security, and improving nutrition through sustainable agriculture. We believe that everyone deserves access to healthy, nutritious food, and we are working to make that a reality.</p>
          <p>Sustainable agriculture is farming in sustainable ways meeting society's present food and textile needs, without compromising the ability for current or future generations to meet their needs.
            It can be based on an understanding of ecosystem services. </p>
        </section>

        <section id="services">
          <h2>Our Services</h2>
          <p>At Food-संज्ञा, we offer a variety of services to help promote sustainable agriculture and ensure that everyone has access to nutritious, healthy food. Our services include:</p>
          <div class="service-section">
            <div class="service-card">
              <p>Food education and awareness programs</p>
              <img class="services-img" src={img1} />
            </div>
            <div class="service-card">
              <p>Community gardens and urban farming initiatives</p>
              <img class="services-img" src={img2} />
            </div>
            <div class="service-card">
              <p>Food waste reduction and composting programs</p>
              <img class="services-img" src={img3} />
            </div>
            <div class="service-card">
              <p>Healthy meal planning and nutrition counseling</p>
              <img class="services-img" src={img4} />
            </div>
          </div>

        </section>
      </main>

      <footer>
        <p>&copy; 2023 Food-संज्ञा. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


