import React from "react";
const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.jpg' }
 }
) => {
 return(
  <li className="list-group-item list-group-item-action col-4">
   <div className="row">
     <div className="col-3">
       <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`}/>
     </div>
     <div className="col-6">
       <div className="fw-bold mr-2 text-wrap">{who.userName}</div>
       <div className="mr-2 text-secondary text-wrap">@{who.handle}</div>
     </div>
     <div className="col-3">
       <button className="btn btn-primary rounded-pill float-end mt-1">Follow</button>
     </div>
   </div>
  </li>
 );
};
export default WhoToFollowListItem;