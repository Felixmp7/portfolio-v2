import { useTranslation } from 'next-i18next';

const useLanguage = () => {
    const { i18n: { language } } = useTranslation('common');
    const isInEnglish = language === 'en';
    return {
        isInEnglish,
    };
};

export default useLanguage;
