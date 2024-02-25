import React from 'react';

type HeadingProps = {
  label: string;
  underline?: boolean;
};

function Heading({ label, underline }: HeadingProps) {
  return (
    <>
      <h2 className='text-4xl font-bold text-center mb-8'>{label}</h2>
      {underline && <span className='block w-[100px] h-[2px] bg-black'></span>}
    </>
  );
}

export default Heading;
