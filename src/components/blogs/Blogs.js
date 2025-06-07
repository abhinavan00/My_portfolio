import React from 'react';
import BlogsBlock from './BlogsBlock';
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Blogs({innerRef}) {
    return (      
        <Box id={'blogs'} ref={innerRef}>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.blogs.map((blog, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <BlogsBlock image={blog.image} link={blog.link} title={blog.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};