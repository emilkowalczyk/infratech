type Props = {
  label: string;
  color?: string;
  underline?: boolean;
};

function Heading({ label, color = 'black', underline }: Props) {
  return (
    <div className='flex flex-col items-center'>
      <h2 className={`text-4xl font-bold text-center mb-8 text-${color}`}>
        {label}
      </h2>
      {underline && (
        <span className={`block w-[100px] h-[2px] bg-${color}`}></span>
      )}
    </div>
  );
}

export default Heading;
