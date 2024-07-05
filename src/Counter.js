import React from 'react';
import { useCounter } from './hook-components/useCounter';
import { useState } from 'react';

export default function Counter() {
    const [delay, SetDelay] = useState(1000);
    const count = useCounter();
    return (
      <>
        <label>
          Tick duration: {delay} ms
          <br />
          <input
            type = "range"
            value = {delay}
            min= "10"
            max="2000"
            onChange={e => SetDelay(Number(e.target.value))}
            />
        </label>
        <hr />
          <h1>Ticks: {count}</h1>
      </>
    );
  }