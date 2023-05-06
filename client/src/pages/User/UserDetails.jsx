import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/userReducer";
import { removeToken } from "../../helpers";

export default function UserDetails() {
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(removeUser())
        removeToken();
    }

    return(
        <button onClick={handleLogout}>Log Out</button>
    )
    
}