import { Box, Flex, Heading, Icon, Text, Input, Button } from "@chakra-ui/react"
import { BsMedium } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { signupConfirmLinkAPI, signupSuccessAPI } from "../redux/auth/auth.action";

export const AccountSetup = () => {
    const dispatch = useDispatch();
    const [params] = useSearchParams();
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [showLoader, setShowLoader] = useState<boolean>(true);
    const [expired, setExpired] = useState<boolean>(false);
    const token: string = params.get('token') || '';
    const navigate = useNavigate();

    const { loading } = useSelector(store => store.auth);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(signupSuccessAPI({ name, email })).then((res: any) => {
            if (res.message === 'Signup successful!') {
                navigate('/customize-topics')
            }
        })
    }

    useEffect(() => {
        dispatch(signupConfirmLinkAPI(token)).then((res: any) => {
            setTimeout(() => {
                setShowLoader(false);
            }, 2000
            )
            if (res.message === 'Link verified!') {
                setEmail(res.email)
            }
            else if (res.message === 'Link expired!') {
                setExpired(true);
            }
        })
    }, [])

    return (
        <Box>
            <Flex align='center' justify='center' gap='7px' h='70px' >
                <Icon as={BsMedium} fontSize='43px' />
                <Text fontSize='32px' letterSpacing='-1.5px' fontWeight={900} fontFamily='Segoe-UI'>Medium</Text>
            </Flex>
            {showLoader ? (
                <Box mx='auto' w={{ base: "90%", sm: "85%", md: "70%" }} maxH='80vh'>
                    <video autoPlay loop muted style={{ width: "100%" }}>
                        <source src="https://cdn.dribbble.com/users/414694/videos/869/shot.mp4" type='video/mp4' />
                    </video>
                </Box>
            ) : expired ? (
                <Box display='flex' flexDir='column' justifyContent={'center'} alignItems='center' minH='80vh' boxShadow='xl' borderRadius={'10px'} w={{ base: '90%', sm: "80%", md: "70%", lg: "55%" }} mx='auto'>
                    <Box textAlign='center' mb={{ base: 5, md: 12 }}>
                        <Heading fontSize='34px' textAlign='center' mt={{ base: 6, md: 14 }} fontWeight={500} fontFamily='Times New Roman'>Your link has expired!!</Heading>
                        <Text fontSize='17px' mt='20px' fontWeight={500} fontFamily='sans-serif' textAlign='center' w='90%' mx='auto'>Checkout to Medium's Homepage and signup again!</Text>
                        <Button fontSize='14px' _hover={{ background: 'darkgreen' }} bg='green'
                            mt='20px' color='white' h='37px' w='50px' borderRadius='20px' mx='auto'
                            onClick={() => navigate('/')}
                        >
                            Ok
                        </Button>
                    </Box>
                </Box>
            ) : email ? (
                <Box display='flex' flexDir='column' justifyContent={'center'} alignItems='center' minH='90vh'>
                    <Box textAlign='center' mb={{ base: 8, md: 16 }}>
                        <Heading fontSize='34px' textAlign='center' fontWeight={500} fontFamily='Times New Roman'>Almost there!</Heading>
                        <Text fontSize='17px' mt='10px' fontWeight={400} fontFamily='sans-serif' textAlign='center' w='90%' mx='auto'>Finish creating your account for the full Medium experience.</Text>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <Text textAlign='center' fontSize='14px' fontWeight={500} mt={12}>Your full name</Text>
                            <Input variant='unstyled' type='text' width={{ base: "85%", md: '420px' }} textAlign='center' fontSize='18px'
                                pb='2px' borderBottom='1px solid rgba(0,0,0,0.2)' borderRadius='0px' mt='10px' mx='auto'
                                required value={name} onChange={(e) => setName(e.target.value)}
                            />
                            <Text textAlign='center' fontSize='14px' fontWeight={500} mt={'15px'}>Your email</Text>
                            <Text w='90%' mx='auto' fontSize='18px' mt='10px' mb='20px' fontFamily='sans-serif' fontWeight={400}>{email}</Text>
                            <Button isLoading={loading} loadingText='Submitting' type='submit' _loading={{ background: 'darkgreen' }} fontSize='14px' _hover={{ background: 'darkgreen' }} bg='green' mt='10px' color='white' h='37px' w='170px' borderRadius='20px' mx='auto'>
                                Create account
                            </Button>
                        </form>
                    </Box>
                </Box>
            ) : null}
        </Box>
    )
}