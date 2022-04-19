import React, { useEffect, useState } from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Battery = () => {
  const [lvl, setLvl] = useState();
  const [charging, setCharging] = useState();
  const update = (battery) => {
    console.log(battery);
    setCharging(battery.charging);
    setLvl(battery.level * 100);
  };

  useEffect(() => {
    navigator.getBattery().then((battery) => {
      update(battery);
      battery.addEventListener('levelchange', (e: Event) => {
        update(e.target);
      });
      battery.addEventListener('chargingchange', (e: Event) => {
        update(e.target);
      });
    });
  });
  return (
    <Main
      meta={<Meta title="My battery level" description="My battery level" />}
    >
      <div className="gap-2 flex flex-col items-center justify-center w-full h-screen">
        <h2 className="text-2xl">Your battery status</h2>
        <div className="border-2 overflow-hidden p-0.5 border-black rounded-lg w-80 h-24">
          <div
            className="h-full rounded-md bg-green-600 text-white flex items-center justify-end pr-2"
            style={{
              width: `${lvl}%`,
            }}
          >
            <span>{lvl}%</span>
            {charging && <span>&#9889;</span>}
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Battery;
