import React, {useState} from 'react';
import './App.css';
import Exhibit from '../component/exhibit/exhibit';
import InputPage from '../component/input/input';
import BlogPost from '../component/blogpost/blogpost';
import Data from './Data';

const App =() =>{

    const [blogs, setBlogs] = useState(Data); 
    const [selectedOne, setTheOne ] = useState( {
        loading: false, 
    });
    
    const handleClick = (selected)=>{ 
        let index = blogs.findIndex(el=>el.id === selected)
        setTheOne({
            loading:true,
            blog: blogs[index]
        });
    }

    return (
        <div className="App">
            <h1> home </h1>
            {true && <Exhibit blogs={blogs} onClick={(e)=>{handleClick(e) }} />}
            <InputPage />
            { selectedOne.loading &&             
            <BlogPost 
                title={selectedOne.blog.title} 
                author={selectedOne.blog.author}
                message={selectedOne.blog.message} 
            />
            }
        </div>
    );
}

export default App;
