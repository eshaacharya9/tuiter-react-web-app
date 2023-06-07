import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import {FaTimesCircle} from "react-icons/fa";
import { AiFillCheckCircle } from 'react-icons/ai';
import TuitsStat from "./tuits-stat";

const TuitsItem = (
    { tuit
      // tuit = {
      //   "topic": "Space",
      //   "userName": "SpaceX",
      //   "time": "2h",
      //   "title": `Tesla CyberTruck lands on Mars and
      //             picks up the Curiosity rover on its 6' bed`,
      //   "image": "tesla.png"
      // }
    }
   ) => {
    const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuit(id));
}
    return(
     <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
          <img width={70} className="float-end rounded-circle" src={`/images/${tuit.image}`} alt="User Avatar"/>
        </div>
        <div className="col-9 col-sm-10 col-md-10 col-lg-11 col-xl-10 col-xxl-10">
          <div>
            <FaTimesCircle className="text-secondary float-end"
              onClick={() => deleteTuitHandler(tuit._id)} />
            <strong>{tuit.userName}</strong> <span class="fa fa-check-circle"></span> <AiFillCheckCircle style={{ color: 'blue'}} />  {tuit.handle} . {tuit.time}
          </div>
          <div className="text-wrap text-black mb-1">
            {tuit.tuit}
          </div>
        </div>
        <div className="col-12 col-sm-10 col-md-10 col-lg-11 col-xl-10 col-xxl-10">
        <TuitsStat index={tuit._id}
                   liked={tuit.liked}
                   replies={tuit.replies}
                   retuits={tuit.retuits}
                   likes={tuit.likes}/>
                   </div>
      </div>
     </li>
    );
   };
   export default TuitsItem;