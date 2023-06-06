import React from "react";
import {useSelector} from "react-redux";
import TuitsItem from "./tuits-item";
import TuitsStat from "./tuits-stat";

const TuitList = () => {
  const tuits  = useSelector(state => state.tuits)



 return(
   <ul className="list-group">
     {
       tuits.map(tuit =>
         <TuitsItem
           key={tuit._id} tuit={tuit}/> )
           
     }
   </ul>
 );
};
export default TuitList;
