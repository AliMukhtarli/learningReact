import "./index.css"
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import Counter from "./Counter.jsx";
import MyComponent from "./MyComponent.jsx";
function App() {
  const fruits = [  {id: 1,name: 'apple', calories: 95},
                            {id: 2,name: 'orange', calories: 45},
                            {id: 3,name: 'banana', calories: 105},
                            {id: 4,name: 'coconut', calories: 150},
                            {id: 5,name: 'pineapple', calories: 82}];

    const vegetables =  [  {id: 6,name: 'apple', calories: 95},
                                      {id: 7,name: 'orange', calories: 45},
                                      {id: 8,name: 'banana', calories: 105},
                                      {id: 9,name: 'coconut', calories: 150},
                                      {id: 10,name: 'pineapple', calories: 82}];

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
        {fruits.length > 0 && <List items={fruits} category="Fruits"/> }
        {vegetables.length >0 ? <List items={vegetables} category="Vegetables"/>: null}
        <Counter />
        <MyComponent />
    </div>
  );
  
}

export default App