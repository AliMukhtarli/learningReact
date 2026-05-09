
function UserGreeting(props){
    return (props.isLoggedIn ?<h2>Welcome {props.username}</h2> :<h2>Pleas log in</h2>)
    
}
export default UserGreeting;