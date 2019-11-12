import React from 'react';

const BlogCard = ({title, message, author})=>{

    return (
        <div className="BlogCard">
        <h3 className="titleBlogCard"> {title} </h3>
        <p className="messageBlogCard"> {message} </p>
        <p className="titleBlogCard"> author:{author} </p>
        </div>
    );
}

export default BlogCard;
