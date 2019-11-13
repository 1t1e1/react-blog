import React from 'react';
import BlogCard from './blogCard';

const exhibit = (props) =>{

    const blogCarts = props.blogs.map((blog,index)=> <BlogCard
                title={blog.title} 
                message={blog.message}
                author={blog.author}
                key={blog.id}
                onClick={ ()=>props.onClick(blog.id)}
            />        
    );

    return (
        <div className="Exhibit">
            <h1> exhibit </h1>
            {blogCarts}
        </div>
    );
}

export default exhibit;
