import Users from "./Users"
import Posts from "./Posts"
import NotFound from './NotFound'
import {getPosts} from "../api/api-posts"
import {useState, useEffect, useLayoutEffect} from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import PostEdit from "./PostEdit"




const App =()=>{
  const [users ,setUsers]=useState([]);
  const [chosen ,choose]=useState(1);
  const [posts ,setPosts]=useState([]);
  
  
  useEffect(()=>{
    
  },[]);

  useLayoutEffect(()=>{
    getPosts().then(posts =>{
      setPosts(posts);
      const usersID =[];
      posts.map(post =>{
        if(!usersID.includes(post.userId))usersID.push(post.userId);
      })
      setUsers(usersID);
    })
  },[]);

  function changeUser(evt,id){
    choose(id);
    changeOutline(evt);
  }

  function changeOutline(event){
    const list =document.querySelectorAll(".users-list li");
    for (const value of list){
    value.classList.contains('selected') &&value.classList.remove('selected');
    event.target.classList.add('selected');

    }
    event.target.classList.add('selected');
}


  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route exact path={'/'}>
        <Users usersID={users} changeUser ={changeUser}/>
        <Posts chosen={chosen} posts={posts}/>
      </Route>
      <Route path={`/post:id`} component={PostEdit}/>

      <Route component={NotFound}/>
    </Switch>
    </BrowserRouter>
    </div>
  )
}
export default App;
