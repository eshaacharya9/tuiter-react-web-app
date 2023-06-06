import React from "react";
const TuitsItem = (
    {
      tuit = {
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": `Tesla CyberTruck lands on Mars and
                  picks up the Curiosity rover on its 6' bed`,
        "image": "tesla.png"
      }
    }
   ) => {
    return(
     <li className="list-group-item">
      <div className="row">
      <div className="col-2">
          <img width={70} className="float-end rounded-circle" src={`/images/${tuit.image}`}/>
        </div>
        <div className="col-10">
          <div>
            <strong>{tuit.userName}</strong> <span class="fa fa-check-circle"></span> {tuit.topic} {tuit.time}
          </div>
          <div>{tuit.title}</div>
        </div>
      </div>
     </li>
    );
   };
   export default TuitsItem;