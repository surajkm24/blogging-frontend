import { Box, Icon, Text, Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'
import { BsMedium } from 'react-icons/bs'
import { LoginModal } from './LoginModal';
import { SignUpModal } from './SignUpModal';

export const Navbar = () => {
    const { isOpen: isSignUpModalOpen, onOpen: onSignUpModalOpen, onClose: onSignUpModalClose } = useDisclosure()
    const { isOpen: isLoginModalOpen, onOpen: onLoginModalOpen, onClose: onLoginModalClose } = useDisclosure()
    return (
        <Box w='100%' display='flex' justifyContent={'space-between'} px={{ base: "22px", md: "45px", lg: "60px", xl: "80px" }} bg='#FFC731' h='76px' borderBottom='1px solid black'>
            <Box display='flex' gap='7px' alignItems='center'>
                <Icon as={BsMedium}
                    fontSize='43px'
                />
                <Text fontSize='32px' letterSpacing='-1.5px' fontWeight={900} fontFamily='Segoe-UI'>Medium</Text>
            </Box>
            <Box display='flex' alignItems='center' gap='23px'>
                <Button color='black' variant='unstyled' fontSize='14px' display={{ base: "none", sm: "block" }} fontWeight={500} onClick={onLoginModalOpen}>
                    Sign In
                </Button>
                <Button variant='unstyled' bg='rgba(0,0,0,0.9)' onClick={onSignUpModalOpen} h='37px' w='105px' _hover={{ background: "black" }} _active={{ background: "rgba(0,0,0,0.7)" }} color='white' borderRadius='20px' fontSize='14px' fontWeight={500}>
                    Get started
                </Button>
            </Box>
            <SignUpModal isOpen={isSignUpModalOpen} onOpen={onLoginModalOpen} onClose={onSignUpModalClose} openSignUp={onSignUpModalOpen} />
            <LoginModal isOpen={isLoginModalOpen} onOpen={onSignUpModalOpen} onClose={onLoginModalClose} openLogin={onLoginModalOpen} />
        </Box>
    )
}