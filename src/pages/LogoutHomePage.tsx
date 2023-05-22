import { Navbar } from "../components/Navbar"
import { Flex, Box, Text, Button, useMediaQuery } from '@chakra-ui/react';
import { Blogs } from "../components/Blogs";
import { BlogAuth } from "../components/BlogAuth";

const recommendedTopics = ['Programming', 'Data Science', 'Technology', 'Self Improvement',
    'Writing', 'Relationships', 'Machine Learning']

const footerLinks = ['Help', 'Status', 'Writers', 'Blog', 'Careers', 'Privacy', 'Terms', 'About', 'Knowable']

export const LogoutHomePage = () => {
    return (
        <>
            <Navbar />
            <Flex px={{ base: "22px", md: "45px", lg: "60px", xl: "80px" }} justify='space-between'
                flexDir={{ base: "column", lg: "row" }}
                gap={{base:"0px",lg:"5vw"}}
            >
                <BlogAuth />
                <Box w={{ lg: '300px', base: "100%",xl:"400px" }} pt={{ base: "30px", lg: "50px" }}
                    borderTop={{base:'1px solid rgba(0,0,0,0.2)',lg:"none"}}
                    position='sticky' top='-800px'>
                    <Text fontWeight={700} fontSize='13px'>
                        DISCOVER MORE OF WHAT MATTERS OF YOU
                    </Text>
                    <Flex wrap='wrap' gap='10px' mt='15px' pb='30px'
                        borderBottom='1px solid rgba(0,0,0,0.2)'>
                        {recommendedTopics.map(ele => (
                            <Button variant='outline' fontSize='12px' fontWeight={450}
                                h='35px' borderColor='rgba(0,0,0,0.2)'
                                borderRadius={'3px'}>
                                {ele}
                            </Button>
                        ))}
                    </Flex>
                    <Flex wrap='wrap' gap='10px' py='20px'
                        display={{ base: "none", lg: "flex" }}>
                        {footerLinks.map(ele => (
                            <Button variant='unstyled' fontSize='13px'
                                fontWeight={500} color='rgba(0,0,0,0.7)' h='20px'
                                _hover={{ color: "black" }}  >
                                {ele}
                            </Button>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}