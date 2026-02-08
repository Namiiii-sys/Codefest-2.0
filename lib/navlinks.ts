import { Telescope, Download, User, Contact, LogIn } from "lucide-react";


interface NavLink {
    id: number;
    name: string;
    link: string;
    icon:any;
}
export const navlinks: NavLink[] = [
    {
        id: 1,
        name: "Home",
        link: "/",
        icon:Telescope
    },
    {
        id: 2,
        name: "About",
        link: "/#about",
        icon:Download
    },
    {
        id: 3,
        name: "Timeline",
        link: "/#timeline",
        icon:User
    },
    {
        id: 4,
        name: "Events",
        link: "/events",
        icon:Contact
    },
    {
        id: 5,
        name: "Prizes",
        link: "/events/#prizes",
        icon:Contact
    },
    {
        id: 6,
        name: "Sponsors",
        link: "/#sponsors",
        icon:Contact
    },
    {
        id: 7,
        name: "Team",
        link: "/#team",
        icon:Contact
    },
    {
        id: 8,
        name: "Contact",
        link: "/#contact",
        icon:Contact
    },
  
];


