
function UserGreeting(props){
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>;
    const logIn = <h2 className="login-prompt">Please log in</h2>;
    return (props.isLoggedIn ?welcomeMessage : logIn)
    
}
export default UserGreeting;