import { RECEPTION_PATH, ENVOYE_PATH, BROUILLON_PATH, DOCUMENTS_PATH, CONTACT_PATH, SETTINGS_PATH, SEND_PATH } from "./navigationPaths";
import { IoMdDocument, IoIosSend, IoIosMailUnread, IoMdContacts, IoMdSettings } from "react-icons/io";
import { RiDraftFill } from "react-icons/ri";
import { IoPencil } from "react-icons/io5";


/*
|--------------------------------------------------------------------------
! Sidebar Items
|--------------------------------------------------------------------------
|
| Ici se trouve tous les liens et icons qui doivent etre sur le sidebar
| de SplitShell
*/
export const links = [
    { path: SEND_PATH, icon: IoPencil, label: "Nouveau message" },
    { path: RECEPTION_PATH, icon: IoIosMailUnread, label: "Boite de reception" },
    { path: ENVOYE_PATH, icon: IoIosSend, label: "Envoyés" },
    { path: BROUILLON_PATH, icon: RiDraftFill, label: "Brouillons" },
    { path: DOCUMENTS_PATH, icon: IoMdDocument, label: "Documents" },
    { path: CONTACT_PATH, icon: IoMdContacts, label: "Contacts" },
    { path: SETTINGS_PATH, icon: IoMdSettings, label: "Paramètres" },
]
