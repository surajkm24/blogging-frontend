import { Box } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store";
import { LoginHomePage } from "./LogInHomePage";
import { LogoutHomePage } from "./LogoutHomePage";

export const Homepage = () => {

    const { primaryToken } = useSelector((store: RootState) => store.auth);

    if (primaryToken) {
        return <LoginHomePage />
    }
    else return <LogoutHomePage />

}