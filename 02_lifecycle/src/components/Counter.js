import React from "react";
import { useState, useEffect } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
    const [name, setName] = useState("İlhan");
    
    useEffect(() => {
        console.log("Component mount edildi.");

        const interval = setInterval(() => {
            setNumber((n) => n + 1);
        }, 1000)

        return ()=>clearInterval(interval)
    }, []);    

  useEffect(() => {
    console.log("Number State Güncellendi!");
  }, [number]);

  useEffect(() => {
    console.log("Name State Güncellendi!");
  }, [name]);

  // useEffect(() => {
  //   console.log("Component mount edildi.");
  // }, []);  
    
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click me!</button>
      <hr />

      <h1>{name}</h1>
      <button onClick={() => setName("Osman Emre")}>Click me!</button>
    </div>
  );
}
