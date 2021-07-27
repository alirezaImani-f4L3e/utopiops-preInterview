import {Link} from 'react-router-dom'

const Post =(props)=>{
    return (
        <Link to={`/post${props.post.id}`} >
            <li className="list-item">
                {props.post.title}
            </li>
        </Link>
    )
}

export default Post;