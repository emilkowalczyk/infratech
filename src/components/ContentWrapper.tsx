type Props = {
  children: React.ReactNode;
};

function ContentWrapper({ children }: Props) {
  return (
    <div className='px-5 py-6 mt-16 flex flex-col items-center md:mx-auto md:max-w-5xl md:w-full'>
      {children}
    </div>
  );
}

export default ContentWrapper;
