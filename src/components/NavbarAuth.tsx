import { Box, Flex, Icon, Text } from "@chakra-ui/react"
import { BsMedium, BsFillBookmarksFill, BsFillFileTextFill, BsPencilSquare }
    from "react-icons/bs";
import { AiFillHome } from 'react-icons/ai';
import { NavLink } from "react-router-dom";
import { MdNotifications } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { GiStarShuriken } from 'react-icons/gi'
import { Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import { useSelector } from "react-redux";


export const NavbarAuth = () => {
    const { data } = useSelector(store => store.auth);

    return (
        <Box w={{ base: "100%", lg: "80px" }} borderRight={{ base: "none", lg: '1px solid rgba(0,0,0,0.2)' }}
            display='flex' flexDirection={{ base: "row", lg: "column" }} alignItems='center'
            pt={{ base: "0px", lg: "30px" }} justifyContent='space-between'
            pb={{ base: "0px", lg: "30px" }} h={{ base: "60px", md: "75px", lg: "100vh" }}
            px={{ base: '30px', lg: "0px" }} boxShadow={{ base: "lg", lg: "none" }}
            position='sticky' top='0px'>
            <NavLink to='/'><Icon as={BsMedium} fontSize='42px' /></NavLink>
            <Flex display={{ base: "none", lg: "flex" }} flexDirection={'column'}
                alignItems='center' justifyContent='space-between'
                gap='20px'>
                <NavLink to='/' > <Icon as={AiFillHome} fontSize={'24px'} /></NavLink>
                <NavLink to='/me/notifications' >
                    <Icon as={MdNotifications} fontSize={'28px'} /></NavLink>
                <NavLink to='/me/lists' >
                    <Icon as={BsFillBookmarksFill} fontSize={'22px'} /></NavLink>
                <NavLink to='/me/lists' >
                    <Icon as={BsFillFileTextFill} fontSize={'22px'} /></NavLink>
                <Box border='1px solid rgba(0,0,0,0.4)' w='20px' mb='10px'></Box>
                <NavLink to='/me/lists' >
                    <Icon as={BsPencilSquare} fontSize={'22px'} /></NavLink>
            </Flex>
            <Popover placement="top" >
                <PopoverTrigger>
                    <Icon as={FaUserAlt} fontSize='23px' cursor='pointer'
                        display={{ base: "none", lg: "block" }} />
                </PopoverTrigger>
                <PopoverContent bg='white' zIndex={2} px={0}>
                    <PopoverBody zIndex={2} px='0px'>
                        <Text fontSize='15px' px={5} fontWeight={500} my={5}
                            cursor='pointer'>
                            Medium Partner Program
                        </Text>
                        <Text fontSize='15px' px={5} fontWeight={500} my={5}
                            cursor='pointer'>
                            Gift a membership
                        </Text>
                        <Text fontSize='15px' px={5} fontWeight={500} my={5}
                            cursor='pointer' display='flex' alignItems='center' gap='5px'>
                            <GiStarShuriken style={{ color: "#ffc731", fontSize: "20px" }} /> Become a member
                        </Text>
                        <Box w='100%' border='1px solid rgba(0,0,0,0.1)' ></Box>
                        <Text fontSize='15px' px={5} fontWeight={500} my={5}
                            cursor='pointer'>
                            Sign out
                        </Text>
                        <Text fontSize='15px' px={5} fontWeight={500} my={5}
                            cursor='pointer'>
                            Refine recommendations
                        </Text>
                        <Text fontSize='15px' px={5} fontWeight={500} my={5}
                            cursor='pointer'>
                            Manage publications
                        </Text>
                        <Text fontSize='15px' px={5} fontWeight={500} my={5}
                            cursor='pointer'>
                            Stats
                        </Text>
                        <Text fontSize='15px' px={5} fontWeight={500} my={5}
                            cursor='pointer'>
                            Settings
                        </Text>
                        <Box w='100%' border='1px solid rgba(0,0,0,0.1)' ></Box>
                        <Text fontSize='15px' px={5} fontWeight={500} my={5}
                            cursor='pointer'>
                            {/* {data.userName} */}
                        </Text>
                    </PopoverBody>
                </PopoverContent>
            </Popover>

            <Box display={{ base: "block", lg: "none" }} w='fit-content' h='fit-content' >
                <NavLink to='/me/notifications' >
                    <Icon as={MdNotifications} fontSize={'28px'} borderRadius='50%' p='2px'
                        border='1px solid #0a192f' />
                </NavLink>
            </Box>
        </Box>
    )
}