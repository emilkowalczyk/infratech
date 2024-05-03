import Link from 'next/link';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';

function SocialMedia() {
  return (
    <div
      className={`my-2 flex gap-6 transition duration-300 text-black lg:ml-6`}
    >
      <Link href={'https://www.instagram.com'} target='_blank'>
        <IoLogoInstagram size={23} />
      </Link>
      <Link href={'https://www.facebook.com'} target='_blank'>
        <IoLogoFacebook size={23} />
      </Link>
    </div>
  );
}

export default SocialMedia;
