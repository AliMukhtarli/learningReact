import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
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
        <Student name="Ali" age={18} isStudent={true} />
    </div>
  );
  
}

export default App
