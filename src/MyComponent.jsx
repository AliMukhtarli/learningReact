


import Recat, {useState} from 'react';

function MyComponent() {

    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(18);
    function handleChange(event) {
        setName(event.target.value);
    }

    function handleAgeChange(event){
        setAge(event.target.value);
    }
 
    return (<div>
            <input value={name} onChange={handleChange} />
            <p>Name: {name}</p>
            <input type="number" value={age} onChange={handleAgeChange} />
            <p>Age: {age}</p>
            </div>)


}
export default MyComponent;