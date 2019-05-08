import React, { useState } from 'react';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function contactform() {
  const [state, setState] = useState({
    isValidated: false,
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ ...state }),
    })
      .then(() => {
        console.log('form submitted success');
      })
      .catch(error => alert(error));
  };

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={state.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={state.email}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Message"
        value={state.message}
        onChange={handleChange}
      />
      <button className="send-form" type="submit">
        Send
      </button>
    </form>
  );
}
