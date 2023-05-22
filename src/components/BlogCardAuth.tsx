import {
    Box, Flex, Text, Heading, Image, Button, Icon, Tooltip, Popover, PopoverTrigger,
    PopoverContent, PopoverBody, PopoverArrow
} from "@chakra-ui/react"
import { BsBookmarks, BsThreeDots } from 'react-icons/bs';
import { MdBlock } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import { months } from "../utils/month";
import { colors } from "../utils/colors";

export const BlogCardAuth = ({ blog }: { blog: any }) => {
    const navigate = useNavigate();
    return (
        <Box py='15px'>
            <Flex align='center' gap='10px' cursor='pointer'>
                <Button colorScheme={colors[Math.floor(Math.random() * colors.length)]}
                    h='40px' w='40px' fontSize='13px'
                    p='0px 0px' borderRadius='50%'>
                    {blog?.author?.userName[0].toUpperCase()}
                </Button>
                <Text fontSize='13px' fontWeight={600}>
                    {blog?.author?.userName}
                </Text>
            </Flex>
            <Flex mt='8px' justifyContent={'space-between'} gap='20px'>
                <Box w={{ base: "95%", md: '78%' }} flexShrink={1}>
                    <Box>
                        <Heading fontSize={{ base: "18px", md: '23px' }} cursor='pointer'
                            onClick={() => navigate(`/blog/${blog._id}`)}
                        >{blog.title}</Heading>
                        <Text mt='8px' cursor='pointer' display={{ base: "none", md: "block" }}
                            onClick={() => navigate(`/blog/${blog._id}`)} fontSize='14px'
                            color='rgba(0,0,0,0.8)'
                        >{blog.content[0][1].substring(0, 100)}...</Text>
                    </Box>
                    <Flex mt={{ base: "6px", md: '10px' }} align='center' gap='10px' justifyContent='space-between'>
                        <Flex align='center' gap='10px'>
                            <Text fontSize='12px' color='rgba(0,0,0,0.8)' fontWeight={500}>
                                {months[blog?.createdOn?.month]} {blog?.createdOn.date}
                            </Text>
                            <Button variant='unstyled' fontWeight={500} fontSize='12px' bg='rgba(0,0,0,0.06)'
                                h='26px' p='0px 10px' borderRadius='20px' _hover={{ background: "rgba(0,0,0,0.1)" }}>{blog.topic || 'General'}</Button>
                        </Flex>
                        <Flex align='center' gap='15px'>
                            <Box>
                                <Icon cursor='pointer' as={BsBookmarks} fontSize='20px' color='rgba(0,0,0,1)' />
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
                <Box w={{ base: "50px", md: '100px' }} flexShrink={0}>
                    <Image cursor='pointer' src={blog.blogImgUrl} w={{ base: "50px", md: '100px' }}
                        h={{ base: "50px", md: '100px' }} onClick={() => navigate(`/blog/${blog._id}`)} />
                </Box>
            </Flex >
        </Box >
    )
}