import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

function App() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/phones`)
      .then((res) => {
        console.log("resspones", res);
        setPhones(res.data);
      })
      .catch((e) => console.log("Error get phones", e));
  }, []);

  const handleSelected = (phone) => {
    console.log(phone);
    setSelectedPhone(phone);
  };

  return (
    <>
      <h1>Phones list</h1>
      {phones.map((e) => {
        return (
          <ul key={e.id}>
            <li onClick={() => handleSelected(e)}>{e.name}</li>
          </ul>
        );
      })}
      <div>
        <h2>Selected phone</h2>
        <h4>Name: {selectedPhone.name}</h4>
        <h4>manufacturer: {selectedPhone.manufacturer}</h4>
        <h4>description: {selectedPhone.description}</h4>
        <h4>color: {selectedPhone.color}</h4>
        <h4>imageFileName: {selectedPhone.imageFileName}</h4>
        <h4>screen: {selectedPhone.screen}</h4>
        <h4>processor: {selectedPhone.processor}</h4>
        <h4>ram: {selectedPhone.ram}</h4>
      </div>
    </>
  );
}

export default App;
