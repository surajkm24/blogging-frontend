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
export const BlogContentSidebar = () => {
    const { singleBlog: blog } = useSelector((store: RootState) => store.blogs);
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
            <Box py='25px'>
                <Flex w='60px' h='60px' justify='center' align={'center'} bg='black' color='white' 
                borderRadius='50%' fontSize='20px'>
                    {blog?.author?.userName[0].toUpperCase()}
                </Flex>
                <Text fontWeight={600} mt='10px'>{blog?.author.userName}</Text>
                <Text color='gray' fontWeight={500}>{blog?.author?.followers.length||'0'} Followers</Text>
                <Text fontSize='15px' fontWeight={500} color='gray' mt='10px'>{blog?.author?.about}</Text>
            </Box>
            <Flex wrap='wrap' gap='10px' py='15px'>
                {footerLinks.map(ele => (
                    <Button variant='unstyled' fontSize='13px'
                        fontWeight={400} color='rgba(0,0,0,0.7)' h='20px'
                        _hover={{ color: "black" }}>{ele}</Button>
                ))}
            </Flex>
        </Box>
    )
}