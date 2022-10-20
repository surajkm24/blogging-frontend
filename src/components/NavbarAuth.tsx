import { Box, Flex, Icon, Text, Button, Input } from "@chakra-ui/react"
import { BsMedium, BsBookmarks, BsFileText, BsPencilSquare, BsBell }
    from "react-icons/bs";
import { VscGraphLeft } from 'react-icons/vsc';
import { AiOutlineUser, AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { NavLink } from "react-router-dom";
import { MdNotifications } from 'react-icons/md';
import { GiStarShuriken } from 'react-icons/gi'
import { Popover, PopoverBody, PopoverContent, PopoverTrigger, PopoverArrow, PopoverCloseButton } from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import { logoutAPI } from "../redux/auth/auth.action";
import { AppDispatch, RootState } from "../redux/store";


export const NavbarAuth = () => {
    const auth = useSelector((store: RootState) => store.auth);
    const dispatch = useDispatch();

    const signout = () => {
        dispatch<any>(logoutAPI(auth.primaryToken, auth.refreshToken))
    }

    return (
        <Box w='100%' display='flex' alignItems='center' justifyContent='space-between'
            h='60px' px={{ base: '25px', lg: "25px" }} boxShadow={{ base: "lg", lg: "none" }}
            position='sticky' top='0px' borderBottom='1px solid rgba(0,0,0,0.1)' bg='white' zIndex={2}>
            <Flex alignItems='center' gap='20px'>
                <NavLink to='/'><Icon as={BsMedium} fontSize='42px' /></NavLink>
                <Flex alignItems='center' bg='rgba(0,0,0,0.05)' p='8px 15px'
                    borderRadius='20px' gap='10px' display={{ base: "none", md: "flex" }}>
                    <Icon as={AiOutlineSearch} fontSize='20px' />
                    <Input variant='unstyled' placeholder='Search Medium' _placeholder={{ color: "gray", fontSize: "14px" }} />
                </Flex>
            </Flex>
            <Flex alignItems={'center'} gap='25px'>
                <Flex alignItems={'center'} color='rgba(0,0,0,0.7)'
                    cursor='pointer' display={{ base: "none", md: "flex" }}
                    gap='10px' _hover={{ cursor: "pointer", color: "black" }}>
                    <Icon as={BsPencilSquare} fontSize={'22px'} color='rgba(0,0,0,0.65)'
                        _hover={{ cursor: "pointer", color: "black" }} />
                    <Text fontSize='14.5px'
                    >Write</Text>
                </Flex>
                <Icon as={AiOutlineSearch} fontSize={'24px'} color='rgba(0,0,0,0.65)'
                    _hover={{ cursor: "pointer", color: "black" }}
                    display={{ base: "block", md: "none" }} />
                <Icon as={BsBell} fontSize={'24px'} color='rgba(0,0,0,0.65)'
                    _hover={{ cursor: "pointer", color: "black" }} />

                <Popover>
                    <PopoverTrigger>
                        <Button variant='unstyled' p='0' m='0'>
                            <Box cursor='pointer' bg='black' color='white' w='30px' h='30px'
                                fontSize='16px' borderRadius='50%'
                                display='flex' alignItems='center' justifyContent={'center'}>
                                {auth.data?.userName ? auth.data.userName[0].toUpperCase() : ''}
                            </Box>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent bg='white' px={0} w='260px'
                        borderColor='rgba(0,0,0,0.1)' mr={5} maxH={'90vh'} overflowY='auto'
                        outlineColor={'white'}>
                        <PopoverArrow />
                        <PopoverBody p='0' >
                            <Flex alignItems={'center'} color='rgba(0,0,0,0.7)' mb={'-10px'}
                                cursor='pointer' display={{ base: "flex", md: "none" }}
                                gap='18px' _hover={{ cursor: "pointer", color: "black" }}
                                p='20px 15px 0px 15px'>
                                <Icon as={BsPencilSquare} fontSize={'20px'} color='rgba(0,0,0,0.65)'
                                    _hover={{ cursor: "pointer", color: "black" }} />
                                <Text fontSize='14.5px'
                                >Write</Text>
                            </Flex>
                            <Box borderBottom='1px solid rgba(0,0,0,0.1)' p='20px 15px'>
                                <Flex gap='15px' color={'rgba(0,0,0,0.7)'} _hover={{ color: "black" }} cursor='pointer'>
                                    <Icon as={AiOutlineUser} fontSize='24px' />
                                    <Text fontSize='15px'>Profile</Text>
                                </Flex>
                                <Flex gap='15px' color={'rgba(0,0,0,0.7)'} mt='14px' _hover={{ color: "black" }} cursor='pointer'>
                                    <Icon as={BsBookmarks} fontSize='22px' />
                                    <Text fontSize='15px'>Lists</Text>
                                </Flex>
                                <Flex gap='15px' color={'rgba(0,0,0,0.7)'} mt='14px' _hover={{ color: "black" }} cursor='pointer'>
                                    <Icon as={BsFileText} fontSize='22px' />
                                    <Text fontSize='15px'>Stories</Text>
                                </Flex>
                                <Flex gap='15px' color={'rgba(0,0,0,0.7)'} mt='14px' _hover={{ color: "black" }} cursor='pointer'>
                                    <Icon as={VscGraphLeft} fontSize='22px' transform={'rotate(180deg)'} />
                                    <Text fontSize='15px'>Stats</Text>
                                </Flex>
                            </Box>
                            <Box borderBottom='1px solid rgba(0,0,0,0.1)' p='20px 15px'>
                                <Flex gap='15px' color={'rgba(0,0,0,0.7)'} _hover={{ color: "black" }} cursor='pointer'>
                                    <Text fontSize='15px'>Settings</Text>
                                </Flex>
                                <Flex gap='15px' color={'rgba(0,0,0,0.7)'} mt='14px' _hover={{ color: "black" }} cursor='pointer'>
                                    <Text fontSize='15px'>Refine recommendations</Text>
                                </Flex>
                                <Flex gap='15px' color={'rgba(0,0,0,0.7)'} mt='14px' _hover={{ color: "black" }} cursor='pointer'>
                                    <Text fontSize='15px'>Manage publications</Text>
                                </Flex>
                            </Box>
                            <Box borderBottom='1px solid rgba(0,0,0,0.1)' p='20px 15px'>
                                <Flex gap='15px' color={'rgba(0,0,0,0.7)'} justify='space-getween'
                                    _hover={{ color: "black" }} cursor='pointer' align='center'>
                                    <Text fontSize='15px'>Become a member</Text>
                                    <Icon as={GiStarShuriken} color='#ffc731' fontSize='20px' />
                                </Flex>
                                <Flex gap='15px' color={'rgba(0,0,0,0.7)'} mt='14px' _hover={{ color: "black" }} cursor='pointer'>
                                    <Text fontSize='15px'>Apply to the Partner Program</Text>
                                </Flex>
                                <Flex gap='15px' color={'rgba(0,0,0,0.7)'} mt='14px' _hover={{ color: "black" }} cursor='pointer'>
                                    <Text fontSize='15px'>Gift a membership</Text>
                                </Flex>
                            </Box>
                            <Box p='20px 15px'>
                                <Flex gap='15px' color={'rgba(0,0,0,0.7)'}
                                    _hover={{ color: "black" }} cursor='pointer'
                                    onClick={() => signout()}>
                                    <Text fontSize='15px'>Sign out</Text>
                                </Flex>
                                <Flex gap='15px' color={'rgba(0,0,0,0.7)'} mt='4px' _hover={{ color: "black" }} cursor='pointer'>
                                    <Text fontSize='15px'>{auth?.data?.email}</Text>
                                </Flex>
                            </Box>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Flex>
        </Box>
    )
}