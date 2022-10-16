import { Box } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { LoginHomePage } from "./LogInHomePage";
import { LogoutHomePage } from "./LogoutHomePage";

export const Homepage = () => {

    const { primaryToken } = useSelector(store => store.auth);

    if (primaryToken) {
        return <LoginHomePage />
    }
    else return <LogoutHomePage />

}