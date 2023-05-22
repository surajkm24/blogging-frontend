import { Box, Button, Heading, Text, Icon, Flex, Image } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { getUsersAPI } from '../redux/users/users.action';
import { FollowUserCard } from './FollowUserCard';
import { BsBookmark } from 'react-icons/bs';
import { colors } from '../utils/colors';

const recommendedTopics = ['Programming', 'Data Science', 'Technology', 'Self Improvement',
    'Writing', 'Relationships', 'Machine Learning']

const footerLinks = ['Home', 'Status', 'Writers', 'Blog', 'Careers', 'Privacy', 'About', 'Knowable']
export const BlogContentSidebar = () => {
    const { singleBlog: blog, data } = useSelector((store: RootState) => store.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<any>(getUsersAPI())
    }, [])
    return (
        <Box pt='35px' px='3vw' w='400px' display={{ base: "none", lg: "block" }}
            position='sticky' top='-150px' h='fit-content'>
            <Button variant='unstyled' bg='black' color='white' fontSize='13px' fontWeight={450}
                h='36px' p='0px 5vw' borderRadius='20px' w='100%'>
                Get unlimited access
            </Button>
            <Box py='30px'>
                <Button colorScheme={colors[Math.floor(Math.random() * colors.length)]}
                    h='80px' w='80px' fontSize='20px'
                    p='0px 0px' borderRadius='50%'>

                    {blog?.author?.userName[0].toUpperCase()}
                </Button>
                <Text fontWeight={600} mt='10px' cursor='pointer'>{blog?.author?.userName}</Text>
                <Text color='rgba(0,0,0,0.7)' fontWeight={500} cursor='pointer'
                    _hover={{ color: "black" }} fontSize='13px' mt='4px'>
                    {blog?.author?.followers.length || '0'} Followers</Text>
                <Text fontSize='13px' fontWeight={500} color='rgba(0,0,0,0.7)' mt='10px'>{blog?.author?.about}</Text>
                <Button colorScheme='purple' h='35px' mt='20px' borderRadius='20px' fontSize='13px'>
                    Follow</Button>
            </Box>
            <Box>
                <Heading fontSize='15px'>More from Medium</Heading>

                <Box mt='10px'>
                    {data.map((ele: any) => (
                        <Flex justify='space-between' py='15px'>
                            <Box>
                                <Flex gap='10px'>
                                    <Button colorScheme={colors[Math.floor(Math.random() * colors.length)]}
                                        h='38px' w='38px' fontSize='13px'
                                        p='0px 0px' borderRadius='50%'>
                                        {ele?.author?.userName[0].toUpperCase()}
                                    </Button>
                                    <Text fontSize='13px' fontWeight={600}>{ele?.author?.userName}</Text>
                                </Flex>
                                <Text fontWeight={700} fontSize='15px' mt='8px'
                                >{ele?.title}</Text>
                            </Box>
                            <Box flexShrink={0}>
                                <Image src={ele?.blogImgUrl} h='50px' w='50px' />
                            </Box>
                        </Flex>
                    ))}
                </Box>
            </Box>
            <Flex wrap='wrap' gap='10px' py='15px'>
                {footerLinks.map(ele => (
                    <Button variant='unstyled' fontSize='12px'
                        fontWeight={500} color='rgba(0,0,0,0.7)' h='20px'
                        _hover={{ color: "black" }}>{ele}</Button>
                ))}
            </Flex>
        </Box>
    )
}