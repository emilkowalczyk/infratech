import React from 'react';

type TextProps = {
  content: string;
};

function Text({ content }: TextProps) {
  return <p className='text-grey-700 text-center mt-8'>{content}</p>;
}

export default Text;
