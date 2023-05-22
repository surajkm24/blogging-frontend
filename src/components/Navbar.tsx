import { Box, Icon, Text, Button, Flex, Heading } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'
import { BsMedium } from 'react-icons/bs'
import { LoginModal } from './LoginModal';
import { SignUpModal } from './SignUpModal';
import { useState, useEffect } from 'react';
let str = '      MM M M M  M  M   M   M   M    MMMM    MM  M M M M M M  M M M  M  M M M  M M M    M MM    M MMMM   M M  M M  M MM M   M M M M M M   MMMMM  M M M   MMM  MMM  MMMM MM  M M MMMM  MMMM  MMM  MM M M M  MM M M    M  M M  M M M MMM M MMM MMM M MM   MM   M  M MM  MMM MM   MMM  MMMM   M  MM  M M MM  MM M M M M MM M M MM MMMM M M M MMM M M M M M MMM MM    MM MM MM MMM    MM   MM MMMM    M MMM  MM MM M MM M M M MMMMM  M MM M M MMM MMM    M  M  MMM  MMM   M M MM MMM  MM MM  MM  MMMMM   M M MM   M  MMMM  MM  MM M MMM MMM MM'
const chars = str.split('');

export const Navbar = () => {
    const [manimate, setManimate] = useState<Array<string>>(chars);
    const [navColor, setNavColor] = useState<boolean>(false)
    const { isOpen: isSignUpModalOpen,
        onOpen: onSignUpModalOpen,
        onClose: onSignUpModalClose } = useDisclosure()
    const { isOpen: isLoginModalOpen,
        onOpen: onLoginModalOpen,
        onClose: onLoginModalClose } = useDisclosure()

    useEffect(() => {
        setInterval(() => {
            let temp = Math.floor(Math.random() * manimate.length);
            setManimate(prev => {
                let arr = [...prev];
                arr = arr.map((ele, i) => {
                    if (i === temp) {
                        if (ele === ' ') return 'M'
                        return ' ';
                    }
                    else {
                        return ele
                    }
                })
                return arr;
            })
        }, 100)
    }, [])
    window.onscroll = () => {
        let h = document.getElementById('navBottom')?.offsetHeight || 0;
        let navh = document.getElementById('nav')?.offsetTop || 0;
        if (h <= navh) {
            setNavColor(true);
        }
        else {
            setNavColor(false);
        }
    }
    useEffect(() => {
        let h = document.getElementById('navBottom')?.offsetHeight || 0;
        let navh = document.getElementById('nav')?.offsetTop || 0;
        if (h <= navh) {
            setNavColor(true);
        }
        else {
            setNavColor(false);
        }
    }, [])
    return (
        <>
            <Box w='100%' display='flex' justifyContent={'space-between'}
                px={{ base: "22px", md: "45px", lg: "60px", xl: "80px" }} bg={navColor ? "white" : '#FFC731'}
                h='76px' borderBottom='1px solid black' id='nav'
                position='sticky' top='0px' zIndex={2}>
                <Box display='flex' gap='7px' alignItems='center'>
                    <Icon as={BsMedium}
                        fontSize='43px'
                    />
                    <Text fontSize='32px' letterSpacing='-1.5px' fontWeight={900} fontFamily='Segoe-UI'>Medium</Text>
                </Box>
                <Box display='flex' alignItems='center' gap='23px'>
                    <Button color='black' variant='unstyled' fontSize='13.2px' display={{ base: "none", md: "block" }} fontWeight={450} >
                        Our Story
                    </Button>
                    <Button color='black' variant='unstyled' fontSize='13.2px' display={{ base: "none", md: "block" }} fontWeight={450} >
                        Membership
                    </Button>
                    <Button color='black' variant='unstyled' fontSize='13.2px' display={{ base: "none", md: "block" }} fontWeight={450} >
                        Write
                    </Button>
                    <Button color='black' variant='unstyled' fontSize='13.2px' display={{ base: "none", sm: "block" }} fontWeight={450} onClick={onLoginModalOpen}>
                        Sign In
                    </Button>
                    <Button variant='unstyled' bg={navColor ? "green" : 'rgba(0,0,0,0.9)'}
                        onClick={onSignUpModalOpen} h='37px' w='105px'
                        _hover={{ background: navColor ? "darkgreen" : "black" }}
                        _active={{ background: navColor ? "lightgreen" : "rgba(0,0,0,0.7)" }}
                        color='white' borderRadius='20px'
                        fontSize='13.2px' fontWeight={450} >
                        Get started
                    </Button>
                </Box>
                <SignUpModal isOpen={isSignUpModalOpen} onOpen={onLoginModalOpen} onClose={onSignUpModalClose} openSignUp={onSignUpModalOpen} />
                <LoginModal isOpen={isLoginModalOpen} onOpen={onSignUpModalOpen} onClose={onLoginModalClose} openLogin={onLoginModalOpen} />
            </Box>
            <Flex px={{ base: "22px", md: "45px", lg: "60px", xl: "80px" }}
                pr={{ md: "0px", lg: "0px", xl: "0px" }} bg='#FFC731'
                borderBottom='1px' gap={{ md: "50px", lg: "70px", xl: "15vw" }} align='center'
                id='navBottom'>
                <Box py='90px' flexShrink={{ base: 1, md: 0 }}>
                    <Heading fontSize={{ base: "60px", sm: '70px', md: "80px", lg: "95px" }}
                        fontFamily='cursive'
                        fontWeight={500} lineHeight={'105%'}>
                        Stay curious.
                    </Heading>
                    <Text fontSize='20px' fontWeight={500} mt='35px' w={{ base: "100%", sm: "420px" }}
                        lineHeight={'110%'}>
                        Discover stories, thinking, and expertise from writers on any topic.
                    </Text>
                    <Button borderRadius='20px' w='210px' fontSize='18px'
                        variant='unstyled' bg='rgba(0,0,0,0.85)' color='white' fontWeight={400}
                        _hover={{ bg: "black" }} mt='45px' onClick={onSignUpModalOpen}>
                        Start reading
                    </Button>
                </Box>
                <Flex wrap='wrap' gap='0px' display={{ base: "none", md: "flex" }}
                    h='390px' overflow='hidden'>
                    {manimate.map((ele, i) => (
                        <Box w='30px' h='30px' fontSize='22px' key={i}
                            fontWeight={500}>
                            {ele}
                        </Box>))}
                </Flex>
            </Flex>
        </>
    )
}