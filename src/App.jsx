import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import "./index.css"
function App() {
  return(
    <div>
        <Header />
        <Footer />
        <Food />
        <Card />
        <Card />
        <Card />
        <Card />
        <br />
        <br />
        
        <Button />
        <br />
        <Student name="Ali" age={18} isStudent={true} />
        <Student name="Aytac" age={18} isStudent={true} />
        <Student name="Azade" age={42} isStudent={false} />
        <Student />
        <br />
        <UserGreeting isLoggedIn={true} username="Ali"  />
    </div>
  );
  
}

export default App