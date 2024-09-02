import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

function HomePage() {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [notifications, setNotifications] = useState(0);

  const handleEmailClick = async (email) => {
    if (email.read) {
      setSelectedEmail(email);
      return; 
    }

    setSelectedEmail(email);

    try {
      await axios.put(`http://127.0.0.1:8000/api/emails/${email.id}/read`, {}, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json, text/plain, */*",
        },
      });
      
      setEmails((prevEmails) => {
        const updatedEmails = prevEmails.map((e) =>
          e.id === email.id ? { ...e, read: true } : e
        );
        
        const unreadCount = updatedEmails.filter((e) => !e.read).length;
        setNotifications(unreadCount);
        
        return updatedEmails;
      });
      
    } catch (error) {
      console.error("Error marking email as read:", error);
    }
  };

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/emails", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text/plain, */*",
          },
        });
        const fetchedEmails = response.data.data;
        setEmails(fetchedEmails);
        
        const unreadCount = fetchedEmails.filter(email => !email.read).length;
        setNotifications(unreadCount);
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    };

    fetchEmails();

    const interval = setInterval(fetchEmails, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-4 flex">
      <Sidebar notifications={notifications} />
      <ul className="space-y-4 w-1/2">
        {emails.map((email) => (
          <li
            key={email.id}
            className={`p-4 cursor-pointer border-b ${
              selectedEmail?.id === email.id ? 'bg-blue-100 border-blue-500' : ''
            } ${!email.read ? 'font-bold' : ''}`}
            onClick={() => handleEmailClick(email)}
          >
            <div className="flex justify-between">
              <span className="font-semibold">
                {email.user?.prenom || 'Unknown'} {email.user?.nom || ''}
              </span>
              <span className="text-sm">
                {new Date(email.created_at).toLocaleString()}
              </span>
            </div>
            <div className="flex gap-1">
              <div className={`text-lg ${email.read ? '' : 'font-bold'}`}>{email.subject}</div>
            </div>
          </li>
        ))}
      </ul>
      
      {selectedEmail && (
        <div className="w-1/2 p-4">
          <h2 className="text-xl font-bold">{selectedEmail.subject}</h2>
          <div className="flex gap-2">
          <span>De</span>
          <span className="font-semibold">
                {selectedEmail.user?.prenom || 'Unknown'} {selectedEmail.user?.nom || ''}
              </span>
              <span className="text-sm">
                {new Date(selectedEmail.created_at).toLocaleString()}
              </span>
          </div>
          <p className="mt-2">{selectedEmail.body}</p>
          
        </div>
      )}
    </div>
  );
}

export default HomePage;
