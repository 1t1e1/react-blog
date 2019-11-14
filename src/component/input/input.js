import React from 'react';

const input = (props)=>{

    return (
        <>
        <h1> Input Page  </h1>
        <input className="inputText" type="text" placeholder="title" required value="title" name="title"/>
        <input className="inputText" type="text" placeholder="Blog Post" required value="blogmessage" name="blogmessage"/>
        <input className="inputText" type="text" placeholder="author" required value="author" name="author"/>
        <button onClick={props.handleSubmit}> Submit </button>
        </>
    );
}

export default input;
