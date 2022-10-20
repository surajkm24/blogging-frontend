import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import { Box, Button, Text, Icon, Input } from '@chakra-ui/react';
import { FcPrevious } from 'react-icons/fc'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { loginAPI } from '../redux/auth/auth.action';

type params = {
    isOpen: boolean;
    onOpen: Function;
    onClose: Function;
}
export const LoginWithEmailModal = ({ isOpen, onOpen, onClose }: params) => {
    const [email, setEmail] = useState<string>('');
    const { isOpen: confirm, onOpen: confirmOpen, onClose: confirmClose } = useDisclosure();
    const { loading } = useSelector((store: RootState) => store.auth);
    const [emailExs, setEmailExs] = useState<boolean>(false)
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmailExs(false)
        dispatch<any>(loginAPI(email)).then((res: any) => {
            if (res.message === 'User does not exists!') {
                setEmailExs(true);
            }
            else if (res.message === 'Email sent successfully.') {
                confirmOpen();
                onClose();
            }
        })
    }

    return (
        <>
            <Modal size='2xl' isOpen={isOpen} onClose={() => onClose()} >
                <ModalOverlay bg='rgba(255,255,255,0.9)' />
                <ModalContent minH='100vh' m='0px' borderRadius='0px' boxShadow='2xl'>
                    <ModalCloseButton />
                    <ModalHeader fontSize='30px' textAlign='center' mt={{ base: "70px", md: '120px' }} fontWeight={500} fontFamily='Times New Roman'>Sign in with email.</ModalHeader>
                    <ModalBody mb={{ base: "70px", md: '120px' }}>
                        <Text textAlign='center' fontSize='16px' fontWeight={500} display={{ base: "none", md: "block" }}>
                            Enter the email address associated with <br />your account, and we’ll send a magic link to <br />your inbox.
                        </Text>
                        <Text textAlign='center' fontSize='14px' fontWeight={500} mt={{ base: 10, md: 16 }}>Your email</Text>
                        <form style={{ width: "fit-content", margin: "auto", display: "grid" }}
                            onSubmit={(e) => handleSubmit(e)}>
                            <Input variant='unstyled' width={{ base: "85%", sm: '260px' }} type='email'
                                value={email} onChange={(e) => setEmail(e.target.value)}
                                textAlign='center' fontSize='15px' pb='2px' borderBottom='1px solid black'
                                borderRadius='0px' mt='10px' mx='auto' required />
                            <br />
                            <Text mx='auto' color='red' mb='5px' display={emailExs ? 'block' : "none"}>
                                Email is not registered!</Text>
                            <Button isLoading={loading} loadingText='Submitting' type='submit'
                                _loading={{ background: 'rgba(0,0,0,0.9)' }}
                                _hover={{ background: 'rgba(0,0,0,0.8)' }}
                                fontSize='14px' bg='rgba(0,0,0,0.86)' mt='10px'
                                color='white' h='37px' w='220px' borderRadius='20px' mx='auto'>
                                Continue
                            </Button>
                        </form>

                        <Button variant='unstyled' color='blue' fontWeight={400}
                            _hover={{ background: "rgba(0,0,0,0.1)" }}
                            onClick={() => {
                                onClose();
                                onOpen();
                            }} display='flex' p='10px 15px' gap='10px' mx='auto' mt='20px' fontSize='14px'>
                            <Icon as={FcPrevious} color='red' />
                            All sign in options.
                        </Button>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <Modal size='2xl' isOpen={confirm} onClose={() => confirmClose()} >
                <ModalOverlay bg='rgba(255,255,255,0.9)' />
                <ModalContent minH='100vh' m='0px' borderRadius='0px' boxShadow='2xl' >
                    <ModalCloseButton />
                    <ModalBody textAlign='center' display='flex' flexDir='column' justifyContent={'center'}>
                        <ModalHeader fontSize='30px' textAlign='center' mt={{ base: 8, md: 16 }} fontWeight={500} fontFamily='Times New Roman'>Check your inbox.</ModalHeader>
                        <Text textAlign='center' fontSize='16px' fontWeight={500} mt={1} w={{ base: "87%", md: '50%' }} mx='auto'>Click the link we sent to {email} to sign in.</Text>
                        <Button fontSize='14px' _hover={{ background: 'rgba(0,0,0,0.8)' }} bg='rgba(0,0,0,0.86)' mt='60px' color='white' h='37px' w='50px' borderRadius='20px' mx='auto'
                            onClick={() => {
                                setEmail('');
                                setEmailExs(false);
                                confirmClose();
                            }}
                        >
                            Ok
                        </Button>
                    </ModalBody>
                    <ModalFooter>
                        <Box>
                            <img src='https://miro.medium.com/max/1800/1*Xtzi4EuWq2-KKmKqWEbAgw.png' />
                        </Box>
                    </ModalFooter>
                </ModalContent>

            </Modal>
        </>
    )
}