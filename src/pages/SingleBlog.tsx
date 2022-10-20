import { Box } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { BlogContent } from "../components/BlogContent"
import { NavbarAuth } from "../components/NavbarAuth"
import { useEffect } from 'react';
import { getSingleBlogAPI } from "../redux/blogs/blogs.action"
import { BlogContentSidebar } from "../components/BlogContentSidebar"

export const SingleBlog = () => {
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        const id = params.id || '';
        dispatch<any>(getSingleBlogAPI(id));
    }, [])
    return (
        <Box>
            <NavbarAuth />
            <Box display='flex'>
                <BlogContent />
                <BlogContentSidebar />
            </Box>
        </Box>
    )
}