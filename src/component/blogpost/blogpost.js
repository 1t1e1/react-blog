import React from 'react';

const blogpost = (props)=>{
    let blogMessage = props.message.trim()
        .split("\n")
        .filter(sent=> sent.length >1)
        .map((sent,index) => (
            <p key={index}> {sent} </p>
            ));

    return (
        <>
        <h1> {props.title} </h1>
        <div>
            { blogMessage }
        </div>
        <div> Author:{props.author}</div>
        </>
    );
}

export default blogpost;
