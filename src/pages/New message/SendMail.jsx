import React from "react";

const SendMail = () => {
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
        />
        <input
          type="text"
          placeholder="Objet"
          className="w-full border-b mb-2 p-2 outline-none"
        />
        <textarea
          placeholder="Message"
          className="w-full h-32 p-2 border mb-2 outline-none resize-none"
        />
        <div className="mt-2">
          <input type="file" multiple className="hidden" id="file-input" />
          <label htmlFor="file-input" className="text-blue-500 cursor-pointer">
            Ajouter des pièces jointes
          </label>
        </div>
      </div>
      <div className="flex justify-end p-4 space-x-2">
        <div className="relative">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMail;
