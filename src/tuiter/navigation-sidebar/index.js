import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTwitter, FaHome, FaSearch, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsisH,FaHashtag} from 'react-icons/fa';

const NavigationSidebar = () => {
 const { pathname } = useLocation();
 const [ignore, tuiter, active] = pathname.split("/");
 const links = [
  { name: "home", icon: <FaHome />, text: "Home" },
  { name: "explore", icon: <FaHashtag />, text: "Explore" },
  { name: "notifications", icon: <FaBell />, text: "Notifications" },
  { name: "messages", icon: <FaEnvelope />, text: "Messages" },
  { name: "bookmarks", icon: <FaBookmark />, text: "Bookmarks" },
  { name: "lists", icon: <FaList />, text: "Lists" },
  { name: "profile", icon: <FaUser />, text: "Profile" },
  { name: "more", icon: <FaEllipsisH />, text: "More" },
];

 return (
   <div className="list-group">
    <div class="fa-1x text-black list-group-item list-group-item-action"><FaTwitter /></div>
     {links.map((link) => (
          <Link
          key={link.name}
          to={`/tuiter/${link.name}`}
          className={`list-group-item d-flex align-items-center text-capitalize ${
            active === link.name ? "active" : ""
          }`}
        >
          <div className="me-2">{link.icon}</div>
          <span className="d-none d-xl-inline d-xxl-inline text-wrap">{link.text}</span>
        </Link>
      ))}
   </div>
 );
};
export default NavigationSidebar;