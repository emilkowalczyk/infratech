import { homeData } from '@/data/data';

function CompanyValues() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center w-full'>
      {homeData.values.map((value) => (
        <div
          key={value.title}
          className='w-full py-6 flex flex-col justify-center items-center gap-1'
        >
          {value.icon}
          <h3 className='font-bold text-md uppercase mt-4'>{value.title}</h3>
          <p className='text-sm'>{value.subtitle}</p>
        </div>
      ))}
    </div>
  );
}

export default CompanyValues;
