

const User =(props)=>{

    function changeUser(evt,id){
        evt.preventDefault();
        props.changeUser(evt,id);
        
    }
    return (
        <a href="#" onClick ={(evt)=>changeUser(evt ,props.id)}>
            <li className={`list-item ${props.id==1 && 'selected'}`}>
                {`User ${props.id}`}
            </li>
        </a>
    )
}

export default User;