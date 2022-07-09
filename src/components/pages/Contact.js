import React from 'react';
// import ShoesPic from '../../assets/cropped-shoes-pic.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import "../../App.css"

export default function Contact() {
  const contactBox = {
    width: 500,
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100
    
  }

  return (
    <div className="contact page">
      <Card style={contactBox} >
        <h2>Get in touch, stay in touch</h2>
        <h5>claytronweber@gmail.com</h5>
        <h5>github.com/claytonweber</h5>
        <h5>linkedin.com/in/claytonweber</h5>

      </Card>
    </div>
  );
}