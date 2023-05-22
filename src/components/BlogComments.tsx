import {
    Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,
    Box, Flex, Text, Icon, Divider, Textarea, Button, useMediaQuery
} from '@chakra-ui/react'
import { AiOutlineLike, AiOutlineMessage, AiTwotoneLike } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { months } from '../utils/month'
import { useEffect, useState } from 'react';
import { colors } from '../utils/colors';
import { likeCommentAPI, postCommentAPI } from '../redux/blogs/blogs.action'

export const BlogComments = ({ isOpen, onClose }: { isOpen: boolean, onClose: Function }) => {
    const { auth, blogs: { singleBlog, comments, cLoading } } = useSelector((store: RootState) => store);
    const [text, setText] = useState<string>('')
    const [showInput, setShowInput] = useState<boolean>(true);
    const [textStyles, setTextStyles] = useState<{ style: string }>({ style: "none" })
    const [isLargerThan720px] = useMediaQuery('(min-width: 720px)')
    const dispatch = useDispatch()

    const postComment = () => {
        dispatch<any>(postCommentAPI(auth.data._id || "", singleBlog._id || "", text)).then(() => {
            setText('');
            setShowInput(false);
        })
    }

    const likeComment = (id: string) => {
        dispatch<any>(likeCommentAPI(id || "", auth?.data?._id || ""))
    }

    return (
        <>
            {/* <Box > */}
            <Drawer
                isOpen={isOpen}
                placement={isLargerThan720px ? "right" : "bottom"}
                onClose={() => onClose()}
                size='sm'
            >
                <DrawerOverlay bg='rgba(0,0,0,0.1)' />
                <DrawerContent h={isLargerThan720px ? "100vh" : "90vh"}
                    borderRadius={isLargerThan720px ? "0px" : "20px 20px 0px 0px"}>
                    <DrawerCloseButton mt='5px' />
                    <DrawerHeader px='2vw'>Responses ({comments.length})</DrawerHeader>

                    <DrawerBody px='0px'>
                        <Box px='2vw' pb='30px'>
                            <Box boxShadow='lg' borderRadius='5px' border='0.5px solid rgba(0,0,0,0.05)'
                                p='15px' display={showInput ? 'block' : "none"}>
                                <Flex gap='12px' align='center'>
                                    <Button colorScheme={colors[Math.floor(Math.random() * colors.length)]}
                                        h='38px' w='38px' fontSize='14px'
                                        p='0px 0px' borderRadius='50%'>

                                        {auth.data?.userName ? auth.data?.userName[0].toUpperCase() : ''}
                                    </Button>
                                    <Text fontSize='13px' fontWeight={500}>{auth?.data?.userName}</Text>
                                </Flex>
                                <Textarea variant='unstyled' placeholder='What are your thoughts?'
                                    fontSize='13px' my='10px' autoFocus={true} value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                                <Flex justify='space-between'>
                                    <Flex gap='10px'>
                                        <Button bg='rgba(0,0,0,0.06)'>B</Button>
                                        <Button bg='rgba(0,0,0,0.06)' fontStyle='italic'>i</Button>
                                    </Flex>
                                    <Flex gap='10px' align='center'>
                                        <Button variant='unstyled' fontSize='13px' fontWeight={500}
                                            onClick={() => {
                                                setShowInput(false);
                                                setText('')
                                            }}>
                                            Cancel</Button>
                                        <Button variant='unstyled' fontSize='13px' bg='green' color='white'
                                            fontWeight={400} h='30px' p='0px 10px' borderRadius='20px'
                                            disabled={text === ''} _hover={{ background: "green" }}
                                            onClick={() => postComment()} isLoading={cLoading}
                                            display='flex' justifyContent='center'
                                            alignItems={'center'}>
                                            Respond
                                        </Button>
                                    </Flex>
                                </Flex>
                            </Box>
                            <Box boxShadow='lg' borderRadius='5px' border='0.5px solid rgba(0,0,0,0.05)'
                                p='15px' display={showInput ? 'none' : "block"} fontSize='13px'
                                onClick={() => setShowInput(true)}>
                                What are your thoughts?
                            </Box>
                        </Box>
                        <Divider />
                        <Box px='2vw'>
                            {comments.map((ele: any) => (
                                <Box py='20px' borderBottom='1px solid rgba(0,0,0,0.1)'>
                                    <Flex align='center'>
                                        <Flex gap='12px'>
                                            <Button colorScheme={colors[Math.floor(Math.random() * colors.length)]}
                                                h='38px' w='38px' fontSize='14px'
                                                p='0px 0px' borderRadius='50%'>
                                                {ele?.author?.userName[0].toUpperCase()}
                                            </Button>
                                            <Box>
                                                <Flex align='center' gap='5px' wrap='wrap'>
                                                    <Text fontSize='13px' fontWeight={500}>
                                                        {ele?.author?.userName}
                                                    </Text>
                                                    <Box display={auth.data?._id === ele?.author?._id ?
                                                        "block" : "none"}
                                                        fontSize='12px' h='16px' w='32px'
                                                        borderRadius='2px' textAlign='center'
                                                        bg='rgba(0,0,0,0.4)' color='white'
                                                    >YOU</Box>
                                                </Flex>
                                                <Text fontSize='13px' color='gray'>{months[ele?.createdOn?.month]} {ele?.createdOn?.date}</Text>
                                            </Box>
                                        </Flex>
                                    </Flex>
                                    <Text fontSize='14px' mt='13px'>
                                        {ele?.content}
                                    </Text>
                                    <Flex align='center' justify='space-between' mt='15px'>
                                        <Flex gap='25px'>
                                            <Flex gap='3px' align='center' cursor='pointer'
                                                onClick={() => likeComment(ele._id)}>
                                                <Icon as={!ele?.likes?.includes(auth.data._id) ?
                                                    AiOutlineLike : AiTwotoneLike} fontSize='22px' />
                                                <Text fontSize='13px'>{ele?.likes?.length || '0'}</Text>
                                            </Flex>
                                            <Flex gap='3px' align='center' cursor='pointer' >
                                                <Icon as={AiOutlineMessage} fontSize='22px' />
                                                <Text fontSize='13px'>{ele?.comments?.length || '0'} replies</Text>
                                            </Flex>
                                        </Flex>

                                        <Text fontSize='13px' _hover={{ textDecoration: "underline" }}
                                            cursor='pointer' fontWeight={500}>
                                            Reply</Text>
                                    </Flex>
                                </Box>
                            ))}
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}