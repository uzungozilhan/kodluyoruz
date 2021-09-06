import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("İlhan");
  const [age, setAge] = useState(40);
  const [friends, setFriends] = useState(["ahmet", "mehmet", "ali"])
  const [address, setAddress] = useState({city:"Tekirdağ", zip: 59000})


  return (
    <div className="App">
      <h1>Props</h1>
      <Person name="İlhan" surname='Uzungöz' age="40'tır" />
      <hr></hr>
      <h1>State</h1>
      <p>{ name }</p>
      <button onClick={()=>{setName("Osman Emre")}}>Change Name</button>
      <hr></hr>
      <p>{ age }</p>
      <button onClick={()=>{setAge(45)}}>Change Age</button>
      <hr></hr>
      <p>Friends</p>
      {friends.map((friend, index) => <div key={index}>{ friend }</div>)}
      <button onClick={()=>{setFriends(["ilhan", ...friends, "ayşe"])}}>Add New Friends</button>
      <hr></hr>
      <p>Address</p>
      <div>{ address.city } { address.zip } { address.abc } </div>
      <button onClick={() => { setAddress({  city: "Kütahya", abc: 43 })}}>Change Address</button>
      {/* , zip: 43000 */}
    </div>
  );
}

export default App;
