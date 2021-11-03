import { useContext } from "react";
import { userContext } from "../Context/AuthContext";

const useAuth = () => {
    return useContext(userContext)
}

export default useAuth;