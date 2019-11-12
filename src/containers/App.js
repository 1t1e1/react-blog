import React, {useState} from 'react';
import './App.css';
import Exhibit from '../component/exhibit/exhibit';

const App =() =>{

    const [blogs, setBlogs] = useState([
        {title: "blog 1", message:"message 1", author:"me"},
        {title: "blog 2", message:"message 2", author:"you"},
        {title: "blog 3", message:"message 3", author:"she"},
        {title: "blog 4", message:"message 4", author:"he"},
    ]);

    return (
        <div className="App">
            <h1> home </h1>
            {true && <Exhibit blogs={blogs} />}
        </div>
    );
}

export default App;
