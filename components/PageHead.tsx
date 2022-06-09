import Head from 'next/head';

type Props = {
    title?: string;
}

const PageHead = ({ title }: Props) => (
    <Head>
        <title>{title || 'FP | React Developer'}</title>
        <link rel="icon" href="/assets/logos/gray.png" />
        <meta
            name="description"
            content="Portafolio oficial de Desarrollador Front-End con React | Felix Pacheco"
        />
        <meta
            name="keywords"
            content="Felix, felix, Felix Pacheco, felix pacheco, pacheco, desarrollador, front-end, react, react native, web developer, developer"
        />
        <meta
            property="og:title"
            content="Felix Pacheco - React Developer"
        />
        <meta
            property="og:description"
            content="Portafolio oficial de Desarrollador Front-End con React | Felix Pacheco"
        />
        <meta property="og:type" content="website" />
        <meta
            property="og:image"
            content="https://felix-dev.vercel.app/assets/logos/gray.png"
        />
        <meta property="og:locale" content="es_VE" />
    </Head>
);

export default PageHead;
