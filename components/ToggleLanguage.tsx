import React from 'react';
import Link from 'next/link';

type Props = {
    locale: string | undefined;
    pathname: string;
}

const getActiveClasses = (isInEnglish: boolean) => {
    if (isInEnglish) {
        return 'bg-gradient-to-r from-rose-600 to-orange-600 border-none';
    }
    return 'bg-gradient-to-r from-cyan-600 to-blue-600 border-none';
};

const ToggleLanguage = ({ locale, pathname }: Props): JSX.Element => {
    const isInEnglish = locale === 'en';

    return (
        <div className="text-xs text-slate-50">
            <Link href={pathname || '/'} locale="en">
                <a
                    className={`toggleLangugage ease mr-1 enLanguage ${isInEnglish && getActiveClasses(isInEnglish)}`}
                >
                    EN
                </a>
            </Link>
            <Link href={pathname || '/'} locale="es">
                <a
                    className={`toggleLangugage ease esLanguage ${!isInEnglish && getActiveClasses(isInEnglish)}`}
                >
                    ES
                </a>
            </Link>
        </div>
    );
};

export default ToggleLanguage;
