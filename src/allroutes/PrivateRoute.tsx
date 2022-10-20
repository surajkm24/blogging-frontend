import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";

export const PrivateRoute = ({ children }: { children: any }) => {
    const auth = useSelector((store: RootState) => store.auth)
    const navigate = useNavigate()
    if (auth.primaryToken === '') {
        navigate('/');
    }
    return children;
}