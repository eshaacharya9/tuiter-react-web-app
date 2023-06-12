import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { profileThunk} from "../services/auth-thunks";
//const [profile, setProfile] = useState(currentUser);
function UsersContextLoader({children}) {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProfile = async() => {
            const { payload } = dispatch(profileThunk());
          //  setProfile(payload);
        }
        fetchProfile();
        return() => {
    
        };
    },[]);
    return children;
}
export default UsersContextLoader;