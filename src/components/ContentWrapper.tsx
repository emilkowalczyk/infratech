type Props = {
  children: React.ReactNode;
};

function ContentWrapper({ children }: Props) {
  return (
    <div className='px-6 my-20 flex flex-col items-center md:max-w-5xl md:mx-auto'>
      {children}
    </div>
  );
}

export default ContentWrapper;
