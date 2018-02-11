import React from 'react';
import './Contact.css';

function Contact(){
  return(
    <div className="Contact">
    <div className="formalForm">
      <h3> Feeling Formal? </h3>
      <p>Please, fill out the form below if you have any questions</p>
      <input type="text" placeholder="Name"/>
      <input type="email" placeholder="E-mail"/>
      <input type="number" placeholder="Phone Number"/>
      <input type="text" placeholder="Subject"/>
      <input type="text" placeholder="Message"/>
      <button type="submit">SEND</button>
    </div>
    <div className="informalForm">
      <h3> Feeling creative? </h3>
      <p> Go ahead and contact me!</p>
      <label>E-mail: bisceanudaniel@gmail.com</label><br />
      <label>Phone: 07986918638 </label>
      <p>Still have questions?</p>
      <input type="text" placeholder="What's your mom call you?"/>
      <input type="email" placeholder="Where can I email you back?"/>
      <input type="text" placeholder="Write here your feelings!"/>
      <button type="submit">SEND</button>
    </div>
    </div>
  );
}

export default Contact;
