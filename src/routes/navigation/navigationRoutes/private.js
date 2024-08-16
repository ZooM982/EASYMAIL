/* eslint-disable react/react-in-jsx-scope */
import HomePage from "pages/Home/HomePage";
import MessageEnvoyé from "pages/MsgSend/MessageEnvoyé";
import {
  BROUILLON_PATH,
  CONTACT_PATH,
  DOCUMENTS_PATH,
  ENVOYE_PATH,
  RECEPTION_PATH,
  SEND_PATH,
  SETTINGS_PATH,
} from "../navigationPaths";
import RequireAuth from "layouts/RequireAuth";
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import { Navigate } from "react-router-dom";
import SplitShell from "layouts/AppShells/SplitShell";
import SendMail from "pages/New message/SendMail";
import ContactPage from "pages/Contacts/ContactPage";

/*
|---------------------------------------------------------------
| Les routes privates
|---------------------------------------------------------------
| Toute page qui necessite une authentification doit etre ici
|
*/
export const privateRoutes = [
  {
    path: RECEPTION_PATH,
    errorElement: <ErrorBoundary />,
    element: <RequireAuth />,
    children: [
      {
        path: "",
        element: <SplitShell />,
        children: [
          {
            path: "*",
            element: <Navigate to={RECEPTION_PATH} />,
          },
          {
            path: "",
            element: <HomePage />,
          },
          {
            path: ENVOYE_PATH,
            element: <MessageEnvoyé />,
          },
          {
            path: BROUILLON_PATH,
            element: <p>Vos Brouillons s'afficheront ici</p>,
          },
          {
            path: DOCUMENTS_PATH,
            element: <p>Vos Documents sauvegarder s'afficheront ici</p>,
          },
          {
            path: CONTACT_PATH,
            element: <ContactPage />,
          },
          {
            path: SETTINGS_PATH,
            element: <p>Ici vous allez pouvoir modifier vos infos</p>,
          },
          {
            path: SEND_PATH,
            element: <SendMail />,
          },
        ],
      },
    ],
  },
];
