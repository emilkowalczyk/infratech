import Link from 'next/link';

type Props = {
  label: string;
  path: string;
  invert?: boolean;
};

function Button({ label, path, invert }: Props) {
  return (
    <Link
      href={path}
      className={`block w-full ${
        invert
          ? 'text-black border-black hover:text-white hover:bg-black'
          : 'text-white border-white hover:text-black hover:bg-white'
      } text-center border-2 px-5 py-4 font-semibold transition md:w-max md:min-w-64`}
    >
      {label}
    </Link>
  );
}

export default Button;
