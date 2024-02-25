import React, { ReactNode } from 'react';

type Props = {
  children: React.ReactNode;
};

function ContentWrapper({ children }: Props) {
  return (
    <div className='px-6 my-20 flex flex-col items-center'>{children}</div>
  );
}

export default ContentWrapper;
