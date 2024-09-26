import React from 'react';
import { useLocation } from 'react-router-dom';

function NavigatePage() {
  const location = useLocation();
  const dataReceived = location.state?.message; // Access the message from the passed state

  return (
    <div>
      <h1>Details Component</h1>
      {dataReceived ? <p>{dataReceived}</p> : <p>No data received.</p>}
    </div>
  );
}

export default NavigatePage;
