import Link from 'next/link';

type Props = {
  label: string;
  path: string;
};

function Button({ label, path }: Props) {
  return (
    <Link
      href={path}
      className='block mt-8 text-white text-center border-2 border-white px-4 py-4 font-bold hover:text-black hover:bg-white transition'
    >
      {label}
    </Link>
  );
}

export default Button;
