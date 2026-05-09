import "./index.css"
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
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
        <UserGreeting isLoggedIn={false} username="Ali"  />
        <List />
    </div>
  );
  
}

export default App