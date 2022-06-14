import useLanguage from '@hooks/useLanguage';
import { useTranslation } from 'next-i18next';

// eslint-disable-next-line arrow-body-style
const getSubjectAndEmailBody = (isInEnglish: boolean) => {
    return isInEnglish
        ? 'subject=¡I have reviewed your portfolio!&body=Hi, Felix!'
        : 'subject=¡He revisado tu portafolio!&body=Hola, Felix!';
};

const HireMeLink = () => {
    const { t } = useTranslation('common');
    const { isInEnglish } = useLanguage();

    return (
        <a
            className="px-4 py-2 mt-16 transition-all duration-500 border rounded ease hover:bg-white hover:text-slate-900 hover:border-slate-100"
            href={`mailto:devfex.19@gmail.com?${getSubjectAndEmailBody(isInEnglish)}`}
        >
            {t('commons.hireMe')}
        </a>
    );
};

export default HireMeLink;
