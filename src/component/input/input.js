import React from 'react';

const input = (props)=>{

    return (
        <>
        <h1> Input Page  </h1>
        <input className="inputText" type="text" placeholder="title" required value="title" name="title"/>
        <textarea className="textarea" placeholder="Blog Post">
        </textarea>
        <input className="inputText" type="text" placeholder="author" required value="author" name="author"/>
        <div> <button onClick={props.handleSubmit}> Submit </button> </div>
        </>
    );
}

export default input;
