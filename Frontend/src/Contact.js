import React, { useState } from 'react';
import './Contact.css'; // Adjust the path as needed

function EmailForm() {
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');

  const handleSubmit = async (event) => {
    console.log('in handleSubmit')

    event.preventDefault();
    // Here you would send the data to your backend endpoint
    const response = await fetch('http://localhost:4000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ senderEmail, senderName, subject, message }),
    });
    console.log(response)
    const data = await response.json();
    // Handle response data
    console.log(data);
  };

  return (
    <div className="email-form-container">
  <div className="email-form-box">
    <h1>Email us:</h1>
    <form onSubmit={handleSubmit} className="email-form">
      <input
        type="text"
        value={senderName}
        onChange={(e) => setSenderName(e.target.value)}
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        value={senderEmail}
        onChange={(e) => setSenderEmail(e.target.value)}
        placeholder="Your Email"
        required
      />
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
        required
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your message"
        required
      ></textarea>
      <button type="submit">Send Email</button>
    </form>
  </div>
</div>
  );
}

export default EmailForm;
