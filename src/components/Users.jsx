import User from "./User"


const Users =(props)=>{
    const users = props.usersID.map(id => <User id={id} changeUser={props.changeUser} key={id}/>);

    

    return(
        <div className="users-list">
            <ul className="lists-container">
                
                {users}
            </ul>
        </div>
    )
}

export default Users;