type Props = {
  label: string;
  textColor?: string;
  bgColor: string;
  underline?: boolean;
};

function Heading({
  label,
  textColor = 'black',
  bgColor = 'black',
  underline,
}: Props) {
  return (
    <div className={`flex flex-col items-center`}>
      <h2 className={`text-3xl font-bold text-center ${textColor}`}>{label}</h2>
      {underline && (
        <span className={`block w-[150px] h-[1px] my-5 ${bgColor}`}></span>
      )}
    </div>
  );
}

export default Heading;
