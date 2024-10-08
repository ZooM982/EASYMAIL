import axios from "axios";
import React, { useState } from "react";

const SendMail = () => {
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [attachement, setAttachement] = useState(null);

  const handleSend = async () => {
    const formData = new FormData();
    formData.append("to", to);
    formData.append("subject", subject);
    formData.append("message", message);
    if (attachement) {
      formData.append("attachment", attachement);
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/send_attach_email",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error("There was an error sending the email!", error);
    }
  };

  return (
    <div className="bg-white rounded-lg w-[90%] md:w-[99%] h-[95%] shadow-lg border border-[#6298ff]">
      <div className="flex justify-between items-center border-b px-4 py-2">
        <h3 className="text-lg font-semibold">Nouveau message</h3>
      </div>
      <div className="px-4 py-2">
        <input
          type="text"
          placeholder="À"
          className="w-full border-b mb-2 p-2 outline-none"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Objet"
          className="w-full border-b mb-2 p-2 outline-none"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />
        <textarea
          placeholder="Message"
          className="w-full h-32 p-2 border mb-2 outline-none resize-none"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <div className="mt-2">
          <input
            type="file"
            multiple
            className="hidden"
            id="file-input"
            onChange={(e) => setAttachement(e.target.value)}
            value={attachement}
          />
          <label htmlFor="file-input" className="text-blue-500 cursor-pointer">
            Ajouter des pièces jointes
          </label>
        </div>
      </div>
      <div className="flex justify-end p-4 space-x-2">
        <div className="relative">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleSend}
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMail;
