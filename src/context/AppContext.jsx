import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const AppContext = createContext();

// Create the provider for the context
export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState(0);
    const [emails, setEmails] = useState([]);

    // Function to fetch emails and update notifications count
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

    // Function to mark email as read
    const markEmailAsRead = async (emailId) => {
        try {
            await axios.put(`http://127.0.0.1:8000/api/emails/${emailId}/read`, {}, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json, text/plain, */*",
                },
            });

            setEmails((prevEmails) => {
                const updatedEmails = prevEmails.map((email) =>
                    email.id === emailId ? { ...email, read: true } : email
                );

                const unreadCount = updatedEmails.filter(email => !email.read).length;
                setNotifications(unreadCount);

                return updatedEmails;
            });
        } catch (error) {
            console.error("Error marking email as read:", error);
        }
    };

    useEffect(() => {
        fetchEmails();

        const interval = setInterval(fetchEmails, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <AppContext.Provider value={{ notifications, emails, markEmailAsRead }}>
            {children}
        </AppContext.Provider>
    );
};
