import { homeData } from '@/data/data';

function CompanyValues() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center w-full flex-wrap'>
      {homeData.values.map((value) => (
        <div
          key={value.title}
          className='py-5 w-full flex flex-col justify-center items-center gap-2 basis-1/3'
        >
          {value.icon}
          <h3 className='font-bold text-md uppercase mt-4 text-center'>{value.title}</h3>
          <p className='text-sm text-center'>{value.subtitle}</p>
        </div>
      ))}
    </div>
  );
}

export default CompanyValues;
