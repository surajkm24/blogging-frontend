import { Box, Button, Flex, Icon } from "@chakra-ui/react"
import { IoMdAdd } from 'react-icons/io';
import { GrNext } from 'react-icons/gr';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from 'react';
import { getBlogsAPI } from "../redux/blogs/blogs.action";
import { BlogCard } from "./BlogCard";

export const Blogs = () => {
    const blogs = useSelector((store: RootState) => store.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<any>(getBlogsAPI()).then((res: any) => {
            console.log(res);
        })
    }, []);

    return (
        <Box borderRight='1px solid rgba(0,0,0,0.1)' w={{base:"100%",lg:'64%',xl:"68%"}}
            px={{base:"20px",md:"4%",lg:'3.5%',xl:"7%"}} pt='1%'>
            <Flex gap='20px' borderBottom='1px solid rgba(0,0,0,0.2)'
                align='center' py='5px' justify='space-between'>
                <Flex gap='20px' align='center'>
                    <Icon as={IoMdAdd} />
                    <Button fontSize='15px' variant='unstyled' fontWeight={400}
                    >For You</Button>
                    <Button fontSize='15px' variant='unstyled' fontWeight={400}
                    >Following</Button>
                </Flex>
                <Icon as={GrNext} />
            </Flex>
            <Box pt='25px'>
                {blogs.data.map((ele: any) => <BlogCard blog={ele} />)}
            </Box>
        </Box>
    )
}