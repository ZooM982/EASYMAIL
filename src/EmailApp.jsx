// import React, { useState } from "react";
// import SendMail from "pages/New message/SendMail";
// import MessageEnvoyé from "pages/MsgSend/MessageEnvoyé";

// const MailDashboard = () => {
//   const [sentMessages, setSentMessages] = useState([]);

//   const handleNewSentMessage = (newMessage) => {
//     setSentMessages([...sentMessages, newMessage]);
//   };

//   return (
//     <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//       <div className="w-full md:w-1/2">
//         <SendMail onNewSentMessage={handleNewSentMessage} />
//       </div>
//       <div className="w-full md:w-1/2">
//         <MessageEnvoyé sentMessages={sentMessages} />
//       </div>
//     </div>
//   );
// };

// export default MailDashboard;
