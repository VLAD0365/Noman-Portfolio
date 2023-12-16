import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [text, setText] = useState('');
  const [textarea, setTextarea] = useState('');
  const formRef = useRef();

  const sendEmail = () => {

    emailjs.send('service_bjpgkqi', 'template_qjfh8yw', {
      to_name: `${name}`,
      number: `${number}`,
      subject: `${text}`,
      message: `${textarea}`,
    }, 'ZKDb-KTJxDluMblPe')
      .then(
        (response) => {
          console.log('Email sent:', response);
          Swal.fire({
            title: 'Success!',
            text: 'Email Sent Successfully!',
            icon: 'success',
          });
        },
        (error) => {
          console.error('Email send failed:', error);
          Swal.fire({
            title: 'Error!',
            text: 'Failed to send email',
            icon: 'error',
          });
        }
      );

    // Clear the form fields after sending the email
    setName('');
    setEmail('');
    setNumber('');
    setText('');
    setTextarea('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  return (
    <>
      <div className="Contact-Section">
        <h1><span>Contact</span> Me!</h1>
      </div>

      <section>
        <form id="form" ref={formRef} action="/" onSubmit={handleSubmit}>
          <div className="input-box">
            <div className="input-field">
              <input
                type="text"
                name="Name"
                id="name"
                placeholder="Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className='foucs'></span>
            </div>
            <div className="input-field">
              <input
                type="email"
                name="Email"
                id="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className='foucs'></span>
            </div>
          </div>
          <div className="input-box">
            <div className="input-field">
              <input
                type="number"
                name="Number"
                id="number"
                placeholder="Phone Number"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <span className='foucs'></span>
            </div>
            <div className="input-field">
              <input
                type="text"
                name="Text"
                id="text"
                placeholder="Email Subject"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <span className='foucs'></span>
            </div>
          </div>
          <div className="textarea-field">
            <textarea
              name="Textarea"
              id="textarea"
              cols="60"
              rows="10"
              placeholder="Your Message"
              required
              value={textarea}
              onChange={(e) => setTextarea(e.target.value)}
            ></textarea>
            <span className='foucs'></span>
          </div>
          <button type="submit" className="btn3">Send Message</button>
        </form>
      </section>
    </>
  );
}

export default Contact;
