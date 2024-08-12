import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('hello')}</h1>
    </div>
  );
}