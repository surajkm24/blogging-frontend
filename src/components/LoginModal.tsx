import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { TfiEmail } from 'react-icons/tfi';
import { DiApple } from 'react-icons/di'
import { Box, Button, Text } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa'
import { LoginWithEmailModal } from './LoginEmailWithModal';

type params = {
    isOpen: boolean;
    onOpen: Function;
    onClose: Function;
    openLogin: Function;
}

export const LoginModal = ({ isOpen, onOpen, onClose, openLogin }: params) => {
    const {
        isOpen: isLoginWithEmailModalOpen,
        onOpen: onLoginWithEmailModalOpen,
        onClose: onLoginWithEmailModalClose
    } = useDisclosure()

    return (
        <>
            <Modal size='2xl' isOpen={isOpen} onClose={() => onClose()} >
                <ModalOverlay bg='rgba(255,255,255,0.9)' />
                <ModalContent minH='100vh' m='0px' borderRadius='0px' boxShadow='2xl'>
                    <ModalCloseButton />
                    <ModalHeader fontSize='30px' textAlign='center' mt={6} fontWeight={500} fontFamily='Times New Roman'>Welcome back.</ModalHeader>
                    <ModalBody>
                        <Box display='flex' flexDir='column' gap='10px' alignItems='center' mt={{ base: 5, md: 10 }}>
                            <Button borderColor='rgba(0,0,0,0.3)' variant='outline' display='flex' justifyContent='flex-start' alignItems='center' gap='8px' fontSize='14px' borderRadius='20px' _hover={{ borderColor: "#0a192f" }} w='210px'>
                                <FcGoogle style={{ fontSize: "20px" }} /> Sign in with Google
                            </Button>
                            <Button borderColor='rgba(0,0,0,0.3)' variant='outline' display='flex' justifyContent='flex-start' alignItems='center' gap='8px' fontSize='14px' borderRadius='20px' _hover={{ borderColor: "#0a192f" }} w='210px'>
                                <RiFacebookBoxFill style={{ fontSize: "20px", color: "darkblue", borderRadius: "0px", background: "white" }} /> Sign in with Facebook
                            </Button>
                            <Button borderColor='rgba(0,0,0,0.3)' variant='outline' display='flex' justifyContent='flex-start' alignItems='center' gap='8px' fontSize='14px' borderRadius='20px' _hover={{ borderColor: "#0a192f" }} w='210px'>
                                <DiApple style={{ fontSize: "20px", color: "#0a192f" }} /> Sign in with Apple
                            </Button>
                            <Button borderColor='rgba(0,0,0,0.3)' variant='outline' display='flex' justifyContent='flex-start' alignItems='center' gap='8px' fontSize='14px' borderRadius='20px' _hover={{ borderColor: "#0a192f" }} w='210px'>
                                <FaTwitter style={{ fontSize: "20px", color: "#56aecc" }} /> Sign in with Twitter
                            </Button>
                            <Button borderColor='rgba(0,0,0,0.3)' variant='outline' display='flex'
                                justifyContent='flex-start' alignItems='center' gap='8px'
                                fontSize='14px' borderRadius='20px' _hover={{ borderColor: "#0a192f" }}
                                w='210px' onClick={() => {
                                    onClose();
                                    onLoginWithEmailModalOpen();
                                }}>
                                <TfiEmail style={{ fontSize: "17px" }} /> Sign in with Email
                            </Button>
                        </Box>
                        <Text mt={{ base: 4, md: 8 }} display='flex' alignItems='center' gap='4px' justifyContent='center' fontSize='16px' fontWeight={500}>No account?<Button variant='unstyled' color='green' fontWeight={700} _hover={{ color: "darkgreen" }} onClick={() => {
                            onClose();
                            onOpen();
                        }}>Create one</Button></Text>
                        <Text mt={{ base: 7, md: 14 }} mb={{ base: 4, md: 8 }} fontSize='14px' lineHeight='20px' textAlign='center' color='rgba(0,0,0,0.7)'>
                            Forgot email or trouble signing in?&nbsp;<span style={{ textDecoration: "underline", cursor: 'pointer' }}>Get help</span>
                        </Text>
                        <Text mt={{ base: 3, md: 7 }} w='80%' mb={{ base: 4, md: 8 }} mx='auto' fontSize='14px' lineHeight='20px' textAlign='center' color='rgba(0,0,0,0.7)'>
                            Click "Sign Up" to agree to Medium's &nbsp;<span style={{ textDecoration: "underline", cursor: 'pointer' }}>Terms of Service</span>&nbsp;
                            and acknowledge that Medium's &nbsp;<span style={{ textDecoration: "underline", cursor: "pointer" }}>Privacy Policy</span>&nbsp; applies to you.
                        </Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <LoginWithEmailModal isOpen={isLoginWithEmailModalOpen} onOpen={openLogin} onClose={onLoginWithEmailModalClose} />
        </>
    )
}