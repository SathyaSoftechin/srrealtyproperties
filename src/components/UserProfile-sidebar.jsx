    
       import React from "react";
       import "./UserProfile-sidebar.css";
       import {
  FaThLarge,
  FaFileAlt,
  FaCog,
  FaHeart,
} from "react-icons/fa";
        
       const sidebar = () => {
         return (
    
     
      <div className="UserProfile-sidebar">

        
        <div className="UserProfile-menu active">
          <FaThLarge /> Portfolio
        </div>
        <div className="UserProfile-menu">
          <FaFileAlt /> Briefings
        </div>
        <div className="UserProfile-menu">
          <FaCog /> Settings
        </div>

       <a href="/listproperty"> <button className="UserProfile-list-btn">LIST PROPERTY</button></a>
      </div>



      )
   };
   
   export default sidebar;
   