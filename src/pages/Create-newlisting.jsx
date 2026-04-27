import React from "react";
import "./Create-newlisting.css";
import { FaCloudUploadAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import previewImg from "../assets/preview1.png"; 
import userImg from "../assets/newlisting-user.png";
import { RiVipDiamondFill } from "react-icons/ri";


const App = () => {
  return (
    <div className="new-listing-container">




<div className="new-listing-header">
  <div className="new-listing-brand">
    <div className="new-listing-brand-logo"></div>





    <div className="new-listing-brand">
  <RiVipDiamondFill className="new-listing-brand-icon" />
  <span>AUREUM ESTATES</span>
</div>




  </div>

  <div className="new-listing-header-right">
    <div className="new-listing-notification-icon">🔔</div>
    <img src={userImg} alt="user" />
  </div>
</div>




      {/* TOP */}
      <div className="new-listing-top">
       

        
        <h2>Create New Listing</h2>
       

        <div className="new-listing-progress">
          <span>Step 1 of 4: Basic Details & Media</span>
          <span className="new-listing-percent">25% Complete</span>
        </div>

        <div className="new-listing-progress-bar">
          <div className="new-listing-progress-fill"></div>
        </div>
      </div>

      {/* MAIN */}
      <div className="new-listing-main">

        {/* LEFT */}
        <div className="new-listing-left">

          <div className="new-listing-card">
            <h3>Property Information</h3>

            <label>Property Title</label>
            <input type="text" placeholder="e.g. The Sapphire Villa" />

            <div className="new-listing-row">
              <div>
                <label>Asset Class</label>
                <select className="new-listing-Select-category">
                  <option>Select category</option>
                </select>
              </div>

              <div>
                <label>Asking Price (USD)</label>
                <input type="text"  className="new-listing-Asking-Price" placeholder="$ 0.00" />
              </div>
            </div>

            <label>Property Description</label>
            <textarea placeholder="Describe the unique features, architectural style, and amenities..."></textarea>
          </div>

          <div className="new-listing-buttons">
            <button className="new-listing-next">
              Next Step <IoIosArrowForward />
            </button>

            <button className="new-listing-draft">
              Save Draft
            </button>
          </div>

        </div>

        {/* RIGHT */}
        <div className="new-listing-right">

          <div className="new-listing-card">
            <h3>Media Gallery</h3>
            <p>Upload high-resolution images for the primary listing showcase.</p>

            <div className="new-listing-upload">
              <FaCloudUploadAlt className="upload-icon" />
              <h4>Drag & drop images here</h4>
              <span>Or click to browse from your computer</span>

              <div className="new-listing-tags">
                <span>JPG</span>
                <span>PNG</span>
                <span>RAW</span>
              </div>
            </div>



            <div className="new-listing-preview">
             
             
                <div className="new-listing-preview-box active">
                <img src={previewImg} alt="preview" />
                </div>


             <div className="new-listing-preview-box">+</div>
             <div className="new-listing-preview-box">+</div>
            </div>
          </div>




          <div className="new-listing-tip">
            <h4>Listing Tip</h4>
            <p>
              Listings with professional high-resolution photos receive 
              <b> 85% more engagement</b>. We recommend at least 10 images including aerial and interior shots.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default App;