import Link from 'next/link';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';

function SocialMedia() {
  return (
    <div className={`ml-4 flex gap-2 transition duration-300 text-black`}>
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
