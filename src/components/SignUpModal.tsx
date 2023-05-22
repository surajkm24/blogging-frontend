import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc';
import { RiFacebookBoxFill } from 'react-icons/ri';
import { TfiEmail } from 'react-icons/tfi';
import { Box, Button, Text } from '@chakra-ui/react';
import { SignUpWithEmailModal } from './SignUpWithEmailModal';

type params = {
    isOpen: boolean;
    onOpen: Function;
    onClose: Function;
    openSignUp: Function;
}
export const SignUpModal = ({ isOpen, onOpen, onClose, openSignUp }: params) => {
    const {
        isOpen: isSignUpWithEmailModalOpen,
        onOpen: onSignUpWithEmailModalOpen,
        onClose: onSignUpWithEmailModalClose
    } = useDisclosure()
    return (
        <>
            <Modal size='2xl' isOpen={isOpen} onClose={() => onClose()} >
                <ModalOverlay bg='rgba(255,255,255,0.9)' />
                <ModalContent minH='100vh' m='0px' borderRadius='0px' boxShadow='2xl'>
                    <ModalCloseButton />
                    <ModalHeader fontSize='30px' textAlign='center' mt={{ base: "50px", md: '95px' }} fontWeight={500} fontFamily='Times New Roman'>Join Medium.</ModalHeader>
                    <ModalBody>
                        <Box display='flex' flexDir='column' gap='10px' alignItems='center' mt={{ base: 5, md: 10 }}>
                            <Button borderColor='rgba(0,0,0,0.3)' variant='outline' display='flex'
                                justifyContent='flex-start' alignItems='center' gap='8px' fontSize='13px'
                                borderRadius='20px' _hover={{ borderColor: "#0a192f" }} w='210px'>
                                <FcGoogle style={{ fontSize: "20px" }} /> Sign up with Google
                            </Button>
                            <Button borderColor='rgba(0,0,0,0.3)' variant='outline' display='flex'
                                justifyContent='flex-start' alignItems='center' gap='8px' fontSize='13px'
                                borderRadius='20px' _hover={{ borderColor: "#0a192f" }} w='210px'>
                                <RiFacebookBoxFill style={{ fontSize: "20px", color: "darkblue", borderRadius: "0px", background: "white" }} /> Sign up with Facebook
                            </Button>
                            <Button borderColor='rgba(0,0,0,0.3)' variant='outline' display='flex'
                                justifyContent='flex-start' alignItems='center' gap='8px' fontSize='13px'
                                borderRadius='20px' _hover={{ borderColor: "#0a192f" }} w='210px'
                                onClick={() => { 
                                    onClose()
                                    onSignUpWithEmailModalOpen()
                                    }}>
                                <TfiEmail style={{ fontSize: "17px" }} /> Sign up with Email
                            </Button>
                        </Box>
                        <Text mt={{ base: 4, md: 8 }} display='flex' alignItems='center' gap='4px' justifyContent='center' fontSize='15px' fontWeight={500}>Already have an account?<Button variant='unstyled' color='green' fontWeight={700} _hover={{ color: "darkgreen" }} onClick={() => {
                            onClose();
                            onOpen();
                        }} fontSize='15px'>Sign in</Button></Text>
                        <Text mt={{ base: 10, md: 20 }} w='80%' mb={{ base: 4, md: 8 }} mx='auto' fontSize='13px' lineHeight='20px' textAlign='center' color='rgba(0,0,0,0.7)'>
                            Click "Sign Up" to agree to Medium's &nbsp;<span style={{ textDecoration: "underline", cursor: 'pointer' }}>Terms of Service</span>&nbsp;
                            and acknowledge that Medium's &nbsp;<span style={{ textDecoration: "underline", cursor: "pointer" }}>Privacy Policy</span>&nbsp; applies to you.
                        </Text>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <SignUpWithEmailModal isOpen={isSignUpWithEmailModalOpen} onOpen={openSignUp} onClose={onSignUpWithEmailModalClose} />
        </>
    )
}