import React from 'react';

import { Cube } from 'Components/Cube';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  return (
    <Main
      meta={<Meta title="gh pages example" description="gh pages example" />}
    >
      <div className="flex justify-center items-center h-screen gap-x-8">
        <div className="flex flex-col justify-center h-screen gap-y-4">
          <Cube variant="purple"></Cube>
          <Cube variant="orange"></Cube>
          <Cube variant="green"></Cube>
          <Cube variant="purple"></Cube>
          <Cube variant="orange"></Cube>
        </div>
        <div className="flex flex-col justify-center h-screen gap-y-4">
          <Cube variant="orange"></Cube>
          <Cube variant="green"></Cube>
          <Cube variant="purple"></Cube>
          <Cube variant="orange"></Cube>
          <Cube variant="purple"></Cube>
        </div>
        <div className="flex flex-col justify-center h-screen gap-y-4">
          <Cube variant="purple"></Cube>
          <Cube variant="orange"></Cube>
          <Cube variant="green"></Cube>
          <Cube variant="purple"></Cube>
          <Cube variant="orange"></Cube>
        </div>
        <div className="flex flex-col justify-center h-screen gap-y-4">
          <Cube variant="orange"></Cube>
          <Cube variant="purple"></Cube>
          <Cube variant="orange"></Cube>
          <Cube variant="green"></Cube>
          <Cube variant="purple"></Cube>
        </div>
      </div>
    </Main>
  );
};

export default Index;
