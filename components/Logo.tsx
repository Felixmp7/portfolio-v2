import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from 'public/assets/logos/gray.png';
import ToggleLanguage from './ToggleLanguage';

const Logo = (): JSX.Element => {
    const { locale, pathname } = useRouter();
    return (
        <div className="flex items-end">
            <Image src={logo} alt="logo" width={40} height={40} />
            <div className="ml-2 text-left">
                <span className="mb-1 font-light text-slate-50">Felix Pacheco</span>
                <ToggleLanguage locale={locale} pathname={pathname} />
            </div>
        </div>
    );
};

export default Logo;
