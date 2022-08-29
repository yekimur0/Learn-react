import React, {useState, useRef} from 'react'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import Mybutton from './components/UI/button/Mybutton';
import Myinput from './components/UI/input/Myinput';

import "./styles/App.css"

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'}
  ])

  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (e) => {
    e.preventDefault();
    

    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }


  return (
    <div className="App">

      <form>
        <Myinput value={post.title}
                 onChange={e => setPost({...post, title: e.target.value})}
                 type="text" placeholder='Введите заголовок поста'/>

        <Myinput 
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text" 
          placeholder='Введите описание поста'/>


        <Mybutton onClick={addNewPost}>Создать пост</Mybutton>
      </form>


      <PostList posts={posts} title="Посты про JS"/>
    </div>
  );
}

export default App;
