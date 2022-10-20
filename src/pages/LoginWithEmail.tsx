import { Box, Flex, useToast, Icon, Text, Button, Heading } from "@chakra-ui/react"
import { BsMedium } from "react-icons/bs";
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginConfirmAPI } from "../redux/auth/auth.action";
import { RootState } from "../redux/store";

export const LoginWithEmail = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [params] = useSearchParams();
    const token: string = params.get('token') || '';
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toast = useToast();
    const { primaryToken } = useSelector((store: RootState) => store.auth);

    useEffect(() => {
        if (primaryToken !== '') {
            navigate('/')
        }
        setTimeout(() => {
            dispatch<any>(loginConfirmAPI(token)).then((res: any) => {
                if (res.message === 'Login successful!') {
                    toast({
                        title: 'Login successful!',
                        description: "Welcome back.",
                        status: 'success',
                        duration: 2000,
                        isClosable: true,
                        variant: 'subtle'
                    })
                    setTimeout(() => {
                        navigate('/');
                    }, 2000)
                }
                else if (res.message === 'Link expired!') {
                    console.log(res)
                    setLoading(false);
                }
            })
        }, 1000)
    }, [])

    return (primaryToken === '') ? (
        <Box>
            <Flex align='center' justify='center' gap='7px' h='70px' >
                <Icon as={BsMedium} fontSize='43px' />
                <Text fontSize='32px' letterSpacing='-1.5px' fontWeight={900} fontFamily='Segoe-UI'>Medium</Text>
            </Flex>
            {loading ? (
                <Box mx='auto' w={{ base: "90%", sm: "85%", md: "70%" }} maxH='80vh'>
                    <video autoPlay loop muted style={{ width: "100%" }}>
                        <source src="https://cdn.dribbble.com/users/414694/videos/869/shot.mp4" type='video/mp4' />
                    </video>
                </Box>
            ) : (
                <Box display='flex' flexDir='column' justifyContent={'center'} alignItems='center' minH='80vh' boxShadow='xl' borderRadius={'10px'} w={{ base: '90%', sm: "80%", md: "70%", lg: "55%" }} mx='auto'>
                    <Box textAlign='center' mb={{ base: 5, md: 12 }}>
                        <Heading fontSize={{ base: "25px", md: '34px' }} textAlign='center' mt={{ base: 6, md: 14 }} fontWeight={500} fontFamily='Times New Roman'>Your link has expired!!</Heading>
                        <Text fontSize='17px' mt='20px' fontWeight={500} fontFamily='sans-serif' textAlign='center' w='90%' mx='auto'>Checkout to Medium's Homepage and signin again!</Text>
                        <Button fontSize='14px' _hover={{ background: 'darkgreen' }} bg='green'
                            mt='20px' color='white' h='37px' w='50px' borderRadius='20px' mx='auto'
                            onClick={() => navigate('/')}
                        >
                            Ok
                        </Button>
                    </Box>
                </Box>
            )}
        </Box>
    ) : (
        <></>
    )
}