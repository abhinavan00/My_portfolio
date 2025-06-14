import React from 'react';
import BlogsIconLink from "./BlogsIconLink";
import {Box} from "@mui/material";

function BlogsBlock(props) {
   const {image, link, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <BlogsIconLink link={link} title={'Dev.to'} icon={'fa fa-safari'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default BlogsBlock;