import React from 'react';
import { AiTwotoneCloud } from 'react-icons/ai';
import { GrCube } from 'react-icons/gr';

const Side = () => {
  const logos = [1, 2, 3, 4, 5,6].map((index) => (
    <GrCube size={25} color="white"  key={index}/>
  ));

  return (
    <div className="sidebar">
      <div className="logos">
        <AiTwotoneCloud size={50} color="blue" />
        {logos}
      </div>
      <div className="name">DK</div>
    </div>
  );
}
export default Side;
