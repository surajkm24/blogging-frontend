import { Box, Button, Flex, Icon } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from 'react';
import { getBlogsAPI } from "../redux/blogs/blogs.action";
import { BlogCardAuth } from "./BlogCardAuth";

export const BlogAuth = () => {
    const blogs = useSelector((store: RootState) => store.blogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<any>(getBlogsAPI()).then((res: any) => {
            console.log(res);
        })
    }, []);

    return (
        <Box w={{ base: "100%", lg: '64%', xl: "68%" }}
            pt={{ base: "30px", lg: "50px" }}
            order={{ base: 1, lg: 0 }}>
            <Box>
                {blogs.data.map((ele: any) => <BlogCardAuth blog={ele} />)}
            </Box>
        </Box>
    )
}