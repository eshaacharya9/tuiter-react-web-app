import React from "react";
import {useSelector} from "react-redux";
import WhoToFollowListItem from "./who-to-follow-list-item";
const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who);
 return(
   <ul className="list-group col-4 d-none d-sm-none d-md-none d-lg-inline d-xl-inline d-xxl-inline">
     <li className="list-group-item">
       <h3>Who to follow</h3>
     </li>
     {
       whoArray.map(who =>
         <WhoToFollowListItem
           key={who._id}
           who={who}/>
       )
     }
   </ul>
 );
};
export default WhoToFollowList;