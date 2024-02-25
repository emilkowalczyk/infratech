import Link from 'next/link';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5';

function SocialMedia() {
  return (
    <div className={`mx-2 flex gap-2 z-40 transition duration-300`}>
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
