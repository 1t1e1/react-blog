import React from 'react';

const BlogCard = ({title, message, author, onClick})=>{

    return (
        <div className="BlogCard"  onClick={onClick}>
        <h3 className="titleBlogCard"> {title} </h3>
        <p className="messageBlogCard"> {message.trim().slice(0,100)} </p>
        <p className="titleBlogCard"> author:{author} </p>
        </div>
    );
}

export default BlogCard;
