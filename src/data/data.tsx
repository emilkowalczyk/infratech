import {PiLightbulb, PiPuzzlePiece, PiStar} from 'react-icons/pi';

export const navLinks = [
    {
        title: 'O nas',
        path: '/o-nas',
    },
    {
        title: 'Oferta',
        path: '/oferta',
    },
    {
        title: 'Cennik',
        path: '/oferta',
    },
    {
        title: 'Referencje',
        path: '/referencje',
    },
    {
        title: 'Realizacje',
        path: '/realizacje',
    },
    {
        title: 'Kontakt',
        path: '/kontakt',
    },
];

export const heroDetails = [
    {
        //homepage
        heading: 'Twój dom, nasza pasja',
        description:
            'W Infratech tworzymy inteligentne domy z pasją. Nowoczesne instalacje, designerski styl, smartHouse - razem przekształcamy marzenia w rzeczywistość.',
        btnLabel: 'Poznaj naszą ofertę',
        bgImage: '/images/home1.webp',
    },
    {
        //architektura wnetrz
        heading: 'Architektura wnętrz',
        btnLabel: 'Skontaktuj się z nami',
        bgImage: '/images/architecture.webp'
    },
    {
        //instalacje elektryczne
        heading: 'Instalacje elektryczne',
        description: 'Oferujemy kompleksowe usługi w zakresie instalacji elektrycznych, od projektu po montaż i serwis. Gwarantujemy bezpieczeństwo, niezawodność oraz zgodność z najnowszymi standardami i normami. Nasze rozwiązania zapewniają komfort i bezpieczeństwo użytkowania, a także umożliwiają łatwą rozbudowę systemów w przyszłości.',
        btnLabel: 'Skontaktuj się z nami',
        bgImage: '/images/electrical.webp',
    },
    {
        //instalacje smarthome
        heading: 'Instalacje smarthome',
        description: 'Wdrażamy nowoczesne rozwiązania smart home, które uczynią Twoje życie wygodniejszym i bezpieczniejszym. Zdalne sterowanie, inteligentne oświetlenie, systemy bezpieczeństwa – to tylko niektóre z możliwości, które oferujemy. Dzięki naszym rozwiązaniom Twój dom stanie się bardziej energooszczędny i przyjazny dla środowiska.',
        btnLabel: 'Skontaktuj się z nami',
        bgImage: '/images/smarthome.webp'
    },
    {
        //swiadectwa energetyczne
        heading: 'Świadectwa energetyczne',
        description: 'Wykonujemy profesjonalne świadectwa energetyczne, które są niezbędne przy sprzedaży lub wynajmie nieruchomości. Zapewniamy rzetelną ocenę energetyczną budynków, pomagając obniżyć koszty eksploatacji. Nasze świadectwa energetyczne dostarczają niezbędnych informacji o efektywności energetycznej, co jest istotne dla świadomych ekologicznie klientów.',
        btnLabel: 'Skontaktuj się z nami',
        bgImage: '/images/certificates.webp',
    },
    {
        //nadzor budowlany
        heading: 'Nadzór budowlany',
        description: 'lorem ipsum dolor sit amet',
        btnLabel: 'Skontaktuj się z nami',
        bgImage: '/images/safety.webp',
    },
];

export const homeData = {
    values: [
        {
            icon: <PiStar size={56}/>,
            title: 'Profesjonalizm i Doświadczenie',
            subtitle: 'Nasz zespół składa się z wykwalifikowanych specjalistów z wieloletnim doświadczeniem. Dzięki temu możemy zagwarantować najwyższą jakość naszych usług i pełne zadowolenie klientów.',
        },
        {
            icon: <PiPuzzlePiece size={56}/>,
            title: 'Indywidualne Podejście',
            subtitle: 'Każdy projekt traktujemy indywidualnie, dostosowując nasze usługi do Twoich potrzeb i oczekiwań. Słuchamy naszych klientów i tworzymy rozwiązania, które idealnie odpowiadają ich wymaganiom.',
        },
        {
            icon: <PiLightbulb size={56}/>,
            title: 'Innowacyjność',
            subtitle: 'Stale śledzimy najnowsze trendy i technologie, aby oferować nowoczesne i efektywne rozwiązania. Nasze innowacyjne podejście pozwala nam tworzyć przestrzenie przyszłości, które są funkcjonalne, stylowe i przyjazne środowisku.',
        },
    ],
};

export const offerData = [
    {
        title: 'Architektura wnętrz',
        img: '/images/architecture.webp',
        alt: 'Architektura wnętrz',
        path: '/oferta/architektura-wnetrz',
    },
    {
        title: 'Instalacje elektryczne',
        img: '/images/electrical.webp',
        alt: 'Instalacje elektryczne',
        path: '/oferta/instalacje-elektryczne',
    },
    {
        title: 'Instalacje smarthome',
        img: '/images/smarthome.webp',
        alt: 'Instalacje smarthome',
        path: '/oferta/instalacje-smarthome',
    },
    {
        title: 'Świadectwa energetyczne',
        img: '/images/certificates.webp',
        alt: 'Świadectwa energetyczne',
        path: '/oferta/swiadectwa-energetyczne',
    },
    {
        title: 'Nadzór budowlany',
        img: '/images/safety.webp',
        alt: 'Nadzór budowlany',
        path: '/oferta/nadzor-budowlany',
    },
];

export const portfolioData = [
    {
        title: 'Architektura wnętrz',
        img: '/images/architecture.webp',
        alt: 'Architektura wnętrz',
        path: '/realizacje/architektura-wnetrz',
    },
    // {
    //     title: 'Instalacje elektryczne',
    //     img: '/images/electrical.webp',
    //     alt: 'Instalacje elektryczne',
    //     path: '/realizacje/instalacje-elektryczne',
    // },
    // {
    //     title: 'Instalacje smarthome',
    //     img: '/images/smarthome.webp',
    //     alt: 'Instalacje smarthome',
    //     path: '/realizacje/instalacje-smarthome',
    // },
    // {
    //     title: 'Świadectwa energetyczne',
    //     img: '/images/certificates.webp',
    //     alt: 'Świadectwa energetyczne',
    //     path: '/realizacje/swiadectwa-energetyczne',
    // },
    // {
    //     title: 'Nadzór budowlany',
    //     img: '/images/safety.webp',
    //     alt: 'Nadzór budowlany',
    //     path: '/realizacje/nadzor-budowlany',
    // },
];
