import React from "react";
import {useSelector} from "react-redux";
import TuitsItem from "./tuits-item";
import TuitsStat from "./tuits-stat";
const TuitList = () => {
  const { tuits } = useSelector(state => state.tuits)
 return(
   <ul className="list-group">
     {
       tuits.map(tuit =>
        <div>
         <TuitsItem
           key={tuit._id} tuit={tuit}/> 
     <TuitsStat
                      key={tuits._id} tuit={tuit}/>
          </div> )
           
     }
   </ul>
 );
};
export default TuitList;
