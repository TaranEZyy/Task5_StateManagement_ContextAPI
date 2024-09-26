import React, { useContext, useState } from 'react';
import { MyContext } from './Context';
import { useNavigate } from 'react-router-dom';

function DataSender() {
  const [data, setData] = useState("My name is Taran:: here navigate data is used");
  const navigate = useNavigate();
  const { setUser,setAman } = useContext(MyContext);

  const handleClick = () => {
    setUser("Taran");
  };

  const handleContext = () => {
    setAman("Now it is Aman");
  };

  const handleNavigate = () => {
    navigate("/navigatePage", { state: { message: data } }); // Pass data as an object
  };

  return (
    <div>
      <button onClick={handleClick}>CLICK ME TO USE 1st CONTEXT API DATA</button> <br /><br />
      <button onClick={handleContext}>CLICK ME TO USE 2nd CONTEXT API DATA</button> <br /><br />
      <button onClick={handleNavigate}>CLICK TO NAVIGATE AND SHOW DATA</button>
    </div>
  );
}

export default DataSender;
