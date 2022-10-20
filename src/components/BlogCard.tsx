import {
    Box, Flex, Text, Heading, Image, Button, Icon, Tooltip, Popover, PopoverTrigger,
    PopoverContent, PopoverBody, PopoverArrow
} from "@chakra-ui/react"
import { BsBookmarks, BsThreeDots } from 'react-icons/bs';
import { MdBlock } from 'react-icons/md'
import { useNavigate } from "react-router-dom";
import { months } from "../utils/month";

export const BlogCard = ({ blog }: { blog: any }) => {
    const navigate = useNavigate();
    return (
        <Box py='20px' borderBottom='1px solid rgba(0,0,0,0.2)'>
            <Flex align='center' gap='10px' cursor='pointer'>
                <Box display='flex' justifyContent='center' bg='#0a192f' color='white' alignItems='center'
                    h='25px' w='25px' borderRadius='50%'>
                    {blog?.author?.userName[0].toUpperCase()}
                </Box>
                <Text fontSize='15px'>{blog?.author?.userName}</Text>
                <Text fontSize='15px' color='gray' ml='-5px'>- {months[blog?.createdOn?.month]} {blog?.createdOn.date}</Text>
            </Flex>
            <Flex mt='8px' justifyContent={'space-between'} gap='20px'>
                <Box w={{ base: "95%", md: '78%' }} flexShrink={1}>
                    <Box>
                        <Heading fontSize={{ base: "18px", md: '23px' }} cursor='pointer'
                            onClick={() => navigate(`/blog/${blog._id}`)}
                        >{blog.title}</Heading>
                        <Text mt='8px' cursor='pointer' display={{ base: "none", md: "block" }}
                            onClick={() => navigate(`/blog/${blog._id}`)}
                        >{blog.content[0][1]}</Text>
                    </Box>
                    <Flex mt={{ base: "16px", md: '24px' }} align='center' gap='10px' justifyContent='space-between'>
                        <Flex align='center' gap='10px'>
                            <Button variant='unstyled' fontWeight={400} fontSize='14px' bg='rgba(0,0,0,0.06)'
                                h='26px' p='0px 10px' borderRadius='20px' _hover={{ background: "rgba(0,0,0,0.1)" }}>{blog.topic || 'General'}</Button>
                            <Text display={{ base: "none", sm: "block" }} cursor='pointer' _hover={{ color: "black" }} fontWeight={400} fontSize='14px' color='rgba(0,0,0,0.65)'>Selected for you</Text>
                        </Flex>
                        <Flex align='center' gap='15px'>

                            <Tooltip label='Save'>
                                <Box>
                                    <Icon cursor='pointer' as={BsBookmarks} fontSize='20px' color='rgba(0,0,0,0.7)' _hover={{ color: "black" }} />
                                </Box>
                            </Tooltip>
                            <Tooltip label='Show less like this'>
                                <Box>
                                    <Icon cursor='pointer' as={MdBlock} fontSize='20px' color='rgba(0,0,0,0.7)' _hover={{ color: "black" }} />
                                </Box>
                            </Tooltip>
                            <Popover placement='bottom-start'>
                                <PopoverTrigger>
                                    <Box>
                                        <Icon as={BsThreeDots} cursor='pointer' />
                                    </Box>
                                </PopoverTrigger>
                                <PopoverContent w='170px' p='0'>
                                    <PopoverArrow />
                                    <PopoverBody p='15px'>
                                        <Text mb='15px' color='rgba(0,0,0,0.78)' fontSize='14.5px'
                                            _hover={{ color: "rgb(0,0,0)" }} cursor='pointer'>Mute this author</Text>
                                        <Text color='rgba(0,0,0,0.78)' fontSize='14.5px'
                                            _hover={{ color: "rgb(0,0,0)" }} cursor='pointer'>Report</Text>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
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