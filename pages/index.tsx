import PageHead from '@components/PageHead';
import Welcome from '@components/Welcome';
import type { NextPage } from 'next';
// import Image from 'next/image';

const Home: NextPage = () => (
    <div className="h-screen bg-black">
        <PageHead />
        <Welcome />
        {/* <footer className="">
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by
                {' '}
                <span className="">
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
        </footer> */}
    </div>
);

export default Home;
