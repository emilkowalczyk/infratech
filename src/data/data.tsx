import {
  IoColorPaletteOutline,
  IoHappy,
  IoHappyOutline,
  IoStarOutline,
} from 'react-icons/io5';

export const navLinks = [
  {
    title: 'O nas',
    path: 'o-nas',
  },
  {
    title: 'Oferta',
    path: 'oferta',
  },
  {
    title: 'Cennik',
    path: 'cennik',
  },
  {
    title: 'Referencje',
    path: 'referencje',
  },
  {
    title: 'Realizacje',
    path: 'realizacje',
  },
  {
    title: 'Kontakt',
    path: 'kontakt',
  },
];

export const homeData = {
  title: 'Twój dom, nasza pasja',
  img: '/images/home.jpg',
  description:
    'W Infratech tworzymy inteligentne domy z pasją. Nowoczesne instalacje,designerski styl, SmartHouse - razem przekształcamy marzenia w rzeczywistość.',
  buttonTitle: 'Poznaj naszą ofertę',
  content: ['lorem ipsum dolor sit amet', 'text2'],
  values: [
    {
      icon: <IoHappyOutline size={56} />,
      title: 'Dbałość o klienta',
      subtitle: 'Indywidualnie traktujemy klienta',
    },
    {
      icon: <IoColorPaletteOutline size={56} />,
      title: 'kreatywność',
      subtitle: 'Nietypowe rozwiązania problemów',
    },
    {
      icon: <IoStarOutline size={56} />,
      title: 'Jakość',
      subtitle: 'Wysoka jakość usług',
    },
  ],
};

export const offerData = [
  {
    title: 'Architektura wnętrz',
    img: '/images/architecture.jpg',
    alt: 'Architektura wnętrz',
    path: '/oferta/architektura-wnetrz',
  },
  {
    title: 'Instalacje elektryczne',
    img: '/images/electrical.jpg',
    alt: 'Instalacje elektryczne',
    path: '/oferta/instalacje-elektryczne',
  },
  {
    title: 'Instalacje smarthome',
    img: '/images/smarthome.jpg',
    alt: 'Instalacje smarthome',
    path: '/oferta/instalacje-smarthome',
  },
  {
    title: 'Świadectwa energetyczne',
    img: '/images/certificates.jpg',
    alt: 'Świadectwa energetyczne',
    path: '/oferta/swiadectwa-energetyczne',
  },
  {
    title: 'Nadzór budowlany',
    img: '/images/safety.jpg',
    alt: 'Nadzór budowlany',
    path: '/oferta/nadzor-budowlany',
  },
];
