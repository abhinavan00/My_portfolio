import React from 'react';

function BlogsIconLink(props) {
   const {link, title, icon} = props;
   return (
      <a href={link} target={"_blank"} rel="noopener noreferrer">
         <i className={icon}/> {title}
      </a>
   );
}

export default BlogsIconLink;