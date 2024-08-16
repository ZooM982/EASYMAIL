import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/contacts')
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the contacts!', error);
      });
  }, []);

  const handleSendEmail = () => {
    axios.post('http://localhost:8000/api/send-email', {
      email: selectedContact,
      subject: subject,
      message: message,
    })
    .then(response => {
      alert(response.data.message);
    })
    .catch(error => {
      console.error('There was an error sending the email!', error);
    });
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Select Contact:
          <select value={selectedContact} onChange={(e) => setSelectedContact(e.target.value)}>
            <option value="">--Select a contact--</option>
            {contacts.map(contact => (
              <option key={contact.id} value={contact.email}>
                {contact.name} ({contact.email})
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Subject:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSendEmail}>
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
