type Props = {
  content: string;
};

function Text({ content }: Props) {
  return <p className='text-grey-700 text-center mt-8'>{content}</p>;
}

export default Text;
