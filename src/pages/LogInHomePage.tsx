import { Box, Flex, Icon } from "@chakra-ui/react"
import { NavbarAuth } from "../components/NavbarAuth"
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillBookmarksFill }
    from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getUserData, refreshToken } from "../redux/auth/auth.action";
import { AppDispatch, RootState } from "../redux/store";

export const LoginHomePage = () => {

    const auth = useSelector((store: RootState) => store.auth);
    const dispatch = useDispatch<AppDispatch>();
    // console.log(auth);
    useEffect(() => {
        dispatch(getUserData(auth.primaryToken)).then((res: any) => {
            if (res === 'Invalid token!') {
                dispatch(refreshToken(auth.refreshToken)).then((res: any) => {
                    if (res.message === 'Token regenerated successfully!') {
                        dispatch(getUserData(res.primaryToken));
                    }
                })
            }
        })
    }, [])

    return (
        <Box>
            <NavbarAuth />
        </Box>
    )
}