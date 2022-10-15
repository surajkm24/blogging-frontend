import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import { Box, Button, Text, Icon, Input } from '@chakra-ui/react';
import { FcPrevious } from 'react-icons/fc'

type params = {
    isOpen: boolean;
    onOpen: Function;
    onClose: Function;
}
export const LoginWithEmailModal = ({ isOpen, onOpen, onClose }: params) => {

    return (
        <Modal size='2xl' isOpen={isOpen} onClose={() => onClose()} >
            <ModalOverlay bg='rgba(255,255,255,0.9)' />
            <ModalContent minH='100vh' m='0px' borderRadius='0px' boxShadow='2xl'>
                <ModalCloseButton />
                <ModalHeader fontSize='30px' textAlign='center' mt={{ base: "70px", md: '120px' }} fontWeight={500} fontFamily='Times New Roman'>Sign in with email.</ModalHeader>
                <ModalBody mb={{ base: "70px", md: '120px' }}>
                    <Text textAlign='center' fontSize='16px' fontWeight={500} display={{ base: "none", md: "block" }}>
                    Enter the email address associated with <br/>your account, and we’ll send a magic link to <br/>your inbox.
                    </Text>
                    <Text textAlign='center' fontSize='14px' fontWeight={500} mt={{ base: 10, md: 16 }}>Your email</Text>
                    <form style={{ width: "fit-content", margin: "auto", display: "grid" }}>
                        <Input variant='unstyled' width={{ base: "85%", sm: '260px' }} textAlign='center' fontSize='15px' pb='2px' borderBottom='1px solid black' borderRadius='0px' mt='10px' mx='auto' />
                        <br />
                        <Button fontSize='14px' variant='unstyled' bg='rgba(0,0,0,0.86)' mt='10px' color='white' h='37px' w='220px' borderRadius='20px' mx='auto'>
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
    )
}