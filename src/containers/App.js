import React, {useState} from 'react';
import { BrowserRouter , Route , Link } from 'react-router-dom';
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

    const handleSubmit =()=>{
        setBlogs([
            ...blogs,
            {
                title: "added title 1",
                message: "new mesaage",
                author: "tttt",
                id: "32132",
            }
        ]);
    
    }
    
    return (
        <BrowserRouter >
        <div className="App">
            <section>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link> </li>
                        <li><Link to="/new-post">New Post</Link></li>
                        <li><Link to="/blogpost">BlogPost</Link></li>
                    </ul>
                </nav>
            </section>
            <Route path="/" exact >
            <section>
                <Exhibit blogs={blogs} onClick={(e)=>{handleClick(e) }} />
            </section>
            </Route>

            <Route path="/new-post" component={NewPost}>
            </Route>

            <Route path="/:id">
            <section>
                { selectedOne.loading ?
                <BlogPost 
                    title={selectedOne.blog.title} 
                    author={selectedOne.blog.author}
                    message={selectedOne.blog.message} 
                />
                : "Loading..."
                }
            </section>
            </Route>
        </div>
        </BrowserRouter>
    );
}

const NewPost = ()=>{
    return (
        <section>
            <InputPage />
        </section>
    );

}

export default App;
