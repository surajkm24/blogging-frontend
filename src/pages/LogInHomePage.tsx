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

export const LoginHomePage = () => {

    const auth = useSelector(store => store.auth);
    const dispatch = useDispatch();
    console.log(auth);
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
        <Box display='flex' flexDir={{ base: "column", lg: "row" }}>
            <NavbarAuth />
            <Box h='2300px' w='50px' border='1px solid red'></Box>
            <Flex display={{ base: "flex", lg: "none" }} w='100%' justify={'space-around'}
                position='sticky' bottom='0px' h='50px' align='center' boxShadow='lg'
            >
                <NavLink to='/me/lists' >
                    <Icon as={AiFillHome} fontSize={'22px'} /></NavLink>
                <NavLink to='/me/lists' >
                    <Icon as={AiOutlineSearch} fontSize={'22px'} /></NavLink>
                <NavLink to='/me/lists' >
                    <Icon as={BsFillBookmarksFill} fontSize={'22px'} /></NavLink>
                <NavLink to='/me/lists' >
                    <Icon as={FaUserAlt} fontSize={'22px'} /></NavLink>
            </Flex>
        </Box>
    )
}