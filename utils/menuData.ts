import { AiOutlineHome, AiOutlineProject, AiOutlineSetting, AiOutlineLogin, AiOutlineUserAdd, AiOutlineBug } from "react-icons/ai";

export const loggedInMenuItems = [
    { id : 1 , href: "/dashboard", icon: AiOutlineHome, label: "Dashboard" },
    { id : 2 , href: "/projects", icon: AiOutlineProject, label: "Projects" },
    { id : 3 , href: "/all-bugs", icon: AiOutlineBug, label: "All Bugs" },
    { id : 4 , href: "/settings", icon: AiOutlineSetting, label: "Settings" },
  ];

  export const menuItems = [
    { id : 1 , href: "/", icon: AiOutlineLogin, label: "Login" },
    { id : 2 , href: "/register", icon: AiOutlineUserAdd, label: "Register" },
  ]
