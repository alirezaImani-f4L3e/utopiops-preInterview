import '../styles/form.css'
import { useState } from 'react';
import { useLayoutEffect } from 'react';
import { getPost, put } from '../api/api-posts';
import { Link } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostEdit =(props)=>{
    const [input ,setInput] =useState('');
    const [post ,setPost] =useState('');
    const [userId ,setUserId]=useState('');
    const [emptyTitle ,setEmptyTitle]=useState(false);
    const [emptyPost ,setEmptyPost]=useState(false);
    

    useLayoutEffect(()=>{
        getPost(window.location.pathname.slice(5)).then(post =>{
            setPost(post.body);
            setInput(post.title);
            setUserId(post.userId);
          })
          
    },[]);

    function changeInput(evt){
        setInput(evt.target.value);
        if(evt.target.value =='')setEmptyTitle(true);
        else setEmptyTitle(false);
        
    }

    function changePost(evt){
        setPost(evt.target.value)
        if(evt.target.value =='')setEmptyPost(true);
        else setEmptyPost(false);
    }

    function edit(evt){
        evt.preventDefault();
        if(emptyPost || emptyTitle ) {
            toast.warning("please fill required fields");
            return;
        }
        const newPost ={
            body:post ,
            title:input,
            userId:userId,
            id:window.location.pathname.slice(5)
            
        }
        const response= put(`https://jsonplaceholder.typicode.com/posts/${window.location.pathname.slice(5)}`,
        newPost);
        response.then(data =>{
            toast.success('successful update');
            
            })
            .catch(err=>{
                toast.warning('update failed');
                throw new Error(err);
            })
        ;
    }

    return(
        <div className="form">
            <label htmlFor="title">title</label>
            <input type="text" className="title-edit border" id="title" placeholder="title" value={input}
             onChange={evt=>changeInput(evt)}/>
             {emptyTitle && <p className="danger">this field is required </p>}
            <label htmlFor="body" id="body-label">Post</label>
            <textarea className="body-edit border"  id="body" cols="30" rows="10" placeholder="body" value={post}
            onChange={evt=>changePost(evt)}>
            
            </textarea>
            {emptyPost && <p className="danger">this field is required </p>}
            <div className="controls">
                <Link to={'/'}><button>Cancel</button></Link>
                <button onClick={(evt)=>edit(evt)}>Save</button>
            </div>
            <ToastContainer
                position="bottom-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
/>
        </div>
    )
}

export default PostEdit;