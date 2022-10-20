import { Box, Button, Heading, Text, Icon, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getUsersAPI } from '../redux/users/users.action';
import { FollowUserCard } from './FollowUserCard';
import { BsBookmark } from 'react-icons/bs';

const recommendedTopics = ['Programming', 'Data Science', 'Technology', 'Self Improvement',
    'Writing', 'Relationships', 'Machine Learning']

const footerLinks = ['Home', 'Status', 'Writers', 'Blog', 'Careers', 'Privacy', 'About', 'Knowable']
export const HomepageSidebar = () => {
    const users = useSelector((store: RootState) => store.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<any>(getUsersAPI())
    }, [])
    return (
        <Box pt='35px' px='3vw' w='400px' display={{ base: "none", lg: "block" }}
        position='sticky' top='-150px' h='fit-content'>
            <Button variant='unstyled' bg='black' color='white' fontSize='15px' fontWeight={450}
                h='36px' p='0px 5vw' borderRadius='20px'>
                Get unlimited access
            </Button>
            <Box py='20px'>
                <Heading fontSize='16px' fontWeight={600}>Recommended topics</Heading>
                <Box display='flex' gap='10px' flexWrap='wrap' mt='15px'>
                    {recommendedTopics.map(ele => (
                        <Button variant='unstyled' fontSize='14px' fontWeight={400}
                            bg='rgba(0,0,0,0.07)' h='35px' p='0px 15px' borderRadius='20px'
                            _hover={{ background: "rgba(0,0,0,0.15)" }}>{ele}</Button>
                    ))}
                </Box>
            </Box>
            <Box py='20px'>
                <Heading fontSize='16px' fontWeight={600}>Who to follow</Heading>
                <Box mt='10px'>
                    {users.data.map((ele: any) => (
                        <FollowUserCard user={ele} />
                    ))}
                </Box>
                <Text mt='15px' color='darkgreen' fontSize='14px' fontWeight={600}
                    cursor='pointer'
                >See more suggestions</Text>
            </Box>
            <Box>
                <Heading fontSize='16px' fontWeight={600}>Reading list</Heading>
                <Text fontSize='15px' color='rgba(0,0,0,0.7)' mt='10px' lineHeight={'180%'}>
                    Click the <BsBookmark style={{ display: 'inline' }} /> on any story
                    to easily add it to your reading list
                    or a custom list that you can share.</Text>
            </Box>
            <Flex wrap='wrap' gap='10px' py='15px'>
                {footerLinks.map(ele => (
                    <Button variant='unstyled' fontSize='13px'
                    fontWeight={400} color='rgba(0,0,0,0.7)' h='20px'
                    _hover={{color:"black"}}>{ele}</Button>
                ))}
            </Flex>
        </Box>
    )
}