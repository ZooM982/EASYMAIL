import React, { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  return(
    <div>
      <p>fggg</p>
    </div>
  )
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios.post('http://127.0.0.1:8000/api/send')
      .then(response => {
        console.log("Email envoyé avec succés:", response);
      })
      .catch(error => {
        console.error("Une erreur s'est produite lors de l'envoi de l'e-mail:", error);
      });

    axios.get('http://127.0.0.1:8000/api/emails/all', {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json, text/plain, */*"
      },
    })
      .then(response => {
        setEmails(response.data);
        console.log(response);
      })
      .catch(error => {
        console.error("Une erreur s'est produite lors de la récupération des e-mails:", error);
      });
  }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <ul className="space-y-4">
//         {emails.map(email => (
//           <li
//             key={email.id}
//             className=" p-4 cursor-pointer"
//             onClick={() => handleEmailClick(email.id)}
//           >
//             <div className="flex gap-12 mb-1">
//               <span className="font-semibold">{email.from}</span>
//               <span className="text-gray-600 text-sm">{new Date(email.created_at).toLocaleString()}</span>
//             </div>
//             <div className="flex">
//               <div className="flex-1">
//                 <div className="text-lg font-bold">{email.subject}</div>
//               </div>
//               {cachebody === email.id && (
//                 <div className="flex-1 mt-2 text-gray-700">{email.body}</div>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
}
export default HomePage;

