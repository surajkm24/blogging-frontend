import { Box, Flex, Heading, Text, Image, Icon, Tooltip, useDisclosure, Button } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { months } from "../utils/month"
import { BlogDetailsComponents } from "./BlogDetailsComponents/BlogDetailsComponents"
import { AiOutlineLike, AiOutlineMessage, AiFillMessage, AiTwotoneLike } from 'react-icons/ai'
import { BlogComments } from "./BlogComments"
import { RiHandHeartLine } from 'react-icons/ri'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { colors } from "../utils/colors";
import { likeBlogAPI } from "../redux/blogs/blogs.action"

export const BlogContent = () => {
    const { isOpen, onOpen, onClose }: { isOpen: boolean, onOpen: Function, onClose: Function } = useDisclosure()
    const { auth, blogs: { singleBlog: blog, comments } } = useSelector((store: RootState) => store);
    const dispatch = useDispatch()

    const likeBlog = () => {
        dispatch<any>(likeBlogAPI(blog._id, auth.data._id))
    }
    return (
        <Box borderRight='1px solid rgba(0,0,0,0.1)' w={{ base: "100%", lg: '64%', xl: "68%" }}
            px={{ base: "20px", md: "4%", lg: '3.5%', xl: "7%" }} pt='1%'>
            <Flex py='2%'>
                <Flex gap='10px'>
                    <Button colorScheme={colors[Math.floor(Math.random() * colors.length)]}
                        h='45px' w='45px' fontSize='13px'
                        p='0px 0px' borderRadius='50%'>
                        {blog?.author?.userName[0].toUpperCase()}
                    </Button>
                    <Box>
                        <Flex gap='10px' align={'center'} justify='space-between'>
                            <Text fontWeight={500} fontSize='14px'>{blog?.author?.userName}</Text>
                            <Button colorScheme='purple' h='25px' borderRadius='20px'
                                fontSize='13px' display={{ base: "block", lg: "none" }}>
                                Follow</Button>
                        </Flex>
                        <Text fontSize='12.5px' color='gray' fontWeight={500}>
                            {months[blog?.createdOn?.month]} {blog?.createdOn?.date}
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            <Box mt='20px'>
                <Heading fontSize='35px'>{blog?.title}</Heading>
                <Image src={blog?.blogImgUrl} w='100%' h='80%' mt='30px' />
                <BlogDetailsComponents content={blog?.content} />
                <Flex pt='20px' pb='40px' borderBottom='1px solid blue'>
                    <Flex gap='25px'>
                        <Tooltip label='Like' hasArrow>
                            <Flex gap='3px' align='center' cursor='pointer' onClick={() => likeBlog()}>
                                <Icon as={!blog?.likes?.includes(auth.data._id) ?
                                    AiOutlineLike : AiTwotoneLike} fontSize='22px' />
                                <Text>{blog?.likes?.length || '0'}</Text>
                            </Flex>
                        </Tooltip>
                        <Tooltip label='Comment' hasArrow>
                            <Flex gap='3px' align='center' cursor='pointer' onClick={() => onOpen()}>
                                <Icon as={AiOutlineMessage} fontSize='22px' />
                                <Text>{comments?.length}</Text>
                            </Flex>
                        </Tooltip>
                    </Flex>
                </Flex>
                <Box pt='20px' pb='40px' borderBottom='1px solid black'>
                    <Text fontFamily='Segoe-UI' fontSize='21px'>
                        Enjoy the read? Reward the writer.</Text>
                    <Flex mt='10px' justify='space-between' gap={{ base: "15px", md: "100px" }}
                        flexDir={{ base: "column", md: "row" }} >
                        <Text fontSize='12px' fontWeight={500}>Your tip will go to {blog?.author?.userName} through a third-party
                            platform of their choice,
                            letting them know you appreciate their story.</Text>

                        <Button colorScheme='purple' h='40px' borderRadius='20px' w='150px'
                            fontSize='13px' fontWeight={400} leftIcon={<RiHandHeartLine />}
                            flexShrink={0}>
                            Give a tip
                        </Button>
                    </Flex>
                </Box>
                <Box pt='20px' pb='40px'>
                    <Text fontFamily='Segoe-UI' fontSize='21px'>
                        Get NOTIFIED!</Text>
                    <Text fontSize='12px' fontWeight={500} mt='8px'>
                        Whenever {blog?.author?.userName?.split(' ')[0]} post new story.
                    </Text>
                    <Flex mt='10px' justify='space-between' gap={{ base: "15px", md: "100px" }}
                        flexDir={{ base: "column", md: "row" }} align={{ md: "center" }}>
                        <Text fontSize='12px' fontWeight={500} color='rgba(0,0,0,0.7)'>
                            Emails will be sent to {auth?.data?.email}.
                            &nbsp;<span style={{ textDecoration: "underline", cursor: "pointer" }}>Not you?</span>
                        </Text>

                        <Button colorScheme='green' h='40px' borderRadius='20px' w='150px'
                            fontSize='15px' fontWeight={500} leftIcon={<MdOutlineMarkEmailRead />}
                            flexShrink={0} variant='outline'>
                            Subscribe
                        </Button>
                    </Flex>
                </Box>
                <Flex borderBottom='1px' borderTop={'1px'}
                    borderColor='rgba(0,0,0,0.2)' py='20px' align='center' justify='center'
                    gap='10px' flexDir={{ base: "column", md: "row" }}>
                    <Text fontSize='15px'>Share your ideas with millions of readers.</Text>
                    <Button bg='rgba(0,0,0,0.9)' color='white' variant='unstyled' fontSize={'13px'}
                        fontWeight={400} w='150px' h='40px' borderRadius='20px'
                        _hover={{ bg: 'rgba(0,0,0,1)' }}>
                        Write on Medium
                    </Button>
                </Flex>
            </Box>
            <BlogComments isOpen={isOpen} onClose={onClose} />
        </Box>
    )
}