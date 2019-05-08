import React from 'react';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class ContactForm extends React.Component {
  state = {
    isValidated: false,
    name: '',
    email: '',
    message: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ ...this.state }),
    })
      .then(() => {
        console.log('form submitted success');
      })
      .catch(error => alert(error));
  };
  render() {
    return (
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button className="send-form" type="submit">
          Send
        </button>
      </form>
    );
  }
}

export default ContactForm;
