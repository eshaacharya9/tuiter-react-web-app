import React from "react";
import TuitSummaryList from "../tuiter-summary-list";
import { AiOutlineSearch } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import "./index.css";
function ExploreScreen() {
 return(
   <>
     <div className="row">
       <div className="col-11 position-relative col-10 col-sm-3 col-md-6 col-lg-8 col-xl-10 col-xxl-10">
         <input placeholder="Search Tuiter" className="form-control rounded-pill ps-5"/>
         <AiOutlineSearch className="fs-4 position-absolute wd-nudge-up m-sm-1 m-lg-3 m-xl-3 m-xxl-3"/>
       </div>
       <div className="col-1">
         <GoGear className="wd-top-4 float-end fs-3 position-relative"/>
       </div>
     </div>

     <ul className="nav nav-pills mb-2 mt-2">
       <li className="nav-item d-none d-sm-none d-md-inline d-lg-inline d-xl-inline d-xxl-inline">
         <a className="nav-link active">For You</a>
       </li>
       <li className="nav-item d-none d-sm-none d-md-inline d-lg-inline d-xl-inline d-xxl-inline">
         <a className="nav-link">Trending</a>
       </li>
       <li className="nav-item d-none d-sm-none d-md-inline d-lg-inline d-xl-inline d-xxl-inline">
         <a className="nav-link">News</a>
       </li>
       <li className="nav-item d-none d-sm-none d-md-inline d-lg-inline d-xl-inline d-xxl-inline">
         <a className="nav-link">Sports</a>
       </li>
       <li className="nav-item d-none d-sm-none d-md-inline d-lg-inline d-xl-inline d-xxl-inline">
         <a className="nav-link">Entertainment</a>
       </li>
     </ul>

     <div className="position-relative mb-2">
       <img src="/images/starship1.jpg" className="w-100"/>
       <h1 className="position-absolute wd-nudge-up text-white m-lg-3 m-sm-2">SpaceX Starship</h1>
     </div>

     <TuitSummaryList/>
   </>
 );
};
export default ExploreScreen;