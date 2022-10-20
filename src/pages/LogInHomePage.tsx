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
import { RootState } from "../redux/store";
import { Blogs } from "../components/Blogs";
import { HomepageSidebar } from "../components/HomepageSidebar";

export const LoginHomePage = () => {

    // const auth = useSelector((store: RootState) => store.auth);
    // const dispatch = useDispatch();
    // // console.log(auth);
    // useEffect(() => {
    //     dispatch<any>(getUserData(auth.primaryToken)).then((res: any) => {
    //         if (res === 'Invalid token!') {
    //             dispatch<any>(refreshToken(auth.refreshToken)).then((res: any) => {
    //                 if (res.message === 'Token regenerated successfully!') {
    //                     dispatch<any>(getUserData(res.primaryToken));
    //                 }
    //             })
    //         }
    //     })
    // }, [])

    return (
        <Box>
            <NavbarAuth />
            <Box display='flex'>
                <Blogs />
                <HomepageSidebar />
            </Box>
        </Box>
    )
}