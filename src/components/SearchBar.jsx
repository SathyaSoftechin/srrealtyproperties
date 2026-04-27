   
   import React from "react";
   import "./SearchBar.css";
    
   const SearchBar = () => {
     return (
       
 
             <div className="home-search-box">
            <div className="search-item">
              <label>Location</label>
              <select>
                <option>Beverly Hills, CA</option>
              </select>
            </div>

            <div className="search-item">
              <label>Property Type</label>
              <select>
                <option>Modern Villa</option>
              </select>
            </div>

            <div className="search-item">
              <label>Price Range</label>
              <select>
                <option>$5M - $10M</option>
              </select>
            </div>

            <div className="search-item">
              <label>Bedrooms</label>
              <select>
                <option>4+ Beds</option>
              </select>
            </div>

            <a href="/browseexclusive"><button className="search-btn">Search</button></a>
          </div>

      )
   };
   
   export default SearchBar;
   
   
   
  