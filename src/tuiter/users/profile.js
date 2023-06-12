import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { profileThunk, logoutThunk, updateUserThunk } from "../services/auth-thunks";
function ProfileScreen() {
 const { currentUser } = useSelector((state) => state.user);
 const [profile, setProfile] = useState(currentUser);
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const save = () => { dispatch(updateUserThunk(profile)); };
 useEffect(() => {
    const fetchProfile = async() => {
        const { payload } = dispatch(profileThunk());
        setProfile(payload);
    }
    fetchProfile();
    return() => {

    };
},[]);
 return ( <div>
    <h1>Profile Screen</h1>
    {profile && (<div>
      <div>
        console.log("hello");
       <label>First Name</label>
       <input type="text" value={profile.firstName}
        onChange={(event) => {
         const newProfile = {
          ...profile, firstName: event.target.value,
         };
         setProfile(newProfile);
        }}/>
      </div>
      <div>
       <label>Last Name</label>
       <input type="text" value={profile.lastName}
        onChange={(event) => {
         const newProfile = {
          ...profile, lastName: event.target.value,
         };
         setProfile(newProfile);
        }}/>
      </div></div>
    )}
    <button
    className="btn btn-danger"
     onClick={() => {
       dispatch(logoutThunk());
       navigate("/tuiter/login");
     }}>Logout</button>
    <button 
    className="btn btn-success"
    onClick={save}>Save</button>
    {/* <pre>{JSON.stringify(currentUser,null,2)}</pre> */}
   </div> );
}
export default ProfileScreen;