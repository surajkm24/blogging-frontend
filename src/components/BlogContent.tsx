import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { months } from "../utils/month"
import { BlogDetailsComponents } from "./BlogDetailsComponents/BlogDetailsComponents"

export const BlogContent = () => {
    const { singleBlog: blog } = useSelector((store: RootState) => store.blogs);
    console.log(blog);
    return (
        <Box borderRight='1px solid rgba(0,0,0,0.1)' w={{ base: "100%", lg: '64%', xl: "68%" }}
            px={{ base: "20px", md: "4%", lg: '3.5%', xl: "7%" }} pt='1%'>
            <Flex py='2%'>
                <Flex gap='10px'>
                    <Flex align='center' justify='center' h='45px' w='45px' borderRadius='50%' bg='black'
                        color='white' fontSize='18px'>
                        {blog?.author?.userName[0].toUpperCase()}
                    </Flex>
                    <Box>
                        <Text fontWeight={500}>{blog?.author?.userName}</Text>
                        <Text fontSize='14px' color='gray' fontWeight={500}>
                            {months[blog?.createdOn?.month]} {blog?.createdOn?.date}
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            <Box mt='20px'>
                <Heading fontSize='35px'>{blog?.title}</Heading>
                <Image src={blog?.blogImgUrl} w='100%' h='80%' mt='30px' />
                <BlogDetailsComponents content={blog?.content} />
            </Box>
        </Box>
    )
}