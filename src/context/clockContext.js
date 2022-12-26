import React, { useState } from 'react';

const ClockContext = React.createContext({
  value: null,
  setValue: () => {},
  delay: null,
  jump: null,
  delayDD: null,
  jumpDD: null,
});

export const ClockContextProvider = (props) => {

  const [clockValue, setClockValue] = useState(new Date());
  // eslint-disable-next-line
  const [delayValue, setDelayValue] = useState(0.1);
  // eslint-disable-next-line
  const [jumpValue, setJumpValue] = useState(35000);
  // eslint-disable-next-line
  const [delayValueDD, setDelayValueDD] = useState(1000);
  // eslint-disable-next-line
  const [jumpValueDD, setJumpValueDD] = useState(1000);

  // para operaciones día a día: delay = jump;
  // para simulación a 7 días: delay = 0.01; jump = n; 
  // para simulación hasta el colapso: delay = 0.01; jump = n; 
  
  const setClockHandler = (value) => {
    setClockValue(value);
  };

  return (
    <ClockContext.Provider 
      value={{
        value: clockValue,
        setValue: setClockHandler,
        delay: delayValue,
        jump: jumpValue,
        delayDD: delayValueDD,
        jumpDD: jumpValueDD,
      }}>
      {props.children}
    </ClockContext.Provider>
  );
}

export default ClockContext;