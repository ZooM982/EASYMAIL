import React, { useState } from "react";
import SendMail from "../SendMail";
import MessageEnvoyé from "../MessageEnvoyé";

const EmailPage = () => {
  const [message, setMessage] = useState(null);

  const handleMessageSent = (messageData) => {
    setMessage(messageData);
  };

  return (
    <div className="p-4">
      <SendMail onMessageSent={handleMessageSent} />
      {message && <MessageEnvoyé message={message} />}
    </div>
  );
};

export default EmailPage;
