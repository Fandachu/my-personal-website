'use client';

import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { t } = useTranslation('common');
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

/*  const changeLanguage = (lang) => {
    console.log('pathname:', pathname);
    router.push({
      pathname,
      query: { locale: lang },
    });
  };*/

  const changeLanguage = (lang) => {
    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.set('locale', lang);
    const search = newSearchParams.toString();
    const url = `${pathname}?${search}`;
    router.push(url);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
      <div className="text-center">
        <Image
          src="/WenboFanProfilePhoto.jpg"
          alt="Wenbo Fan"
          width={300}
          height={300}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">{t("name")}</h1>
        <p className="text-xl text-gray-600 mb-6">{t("title")}</p>
        <p className="max-w-md mx-auto text-gray-700 mb-8">{t("welcome")}</p>
        <div className="space-x-4">
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            {t("projects")}
          </a>
          <a href="#" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            {t("contact")}
          </a>
        </div>
        <div className="mt-8">
          <button
            onClick={() => changeLanguage("en")}
            className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 mr-4"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("zh-CN")}
            className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
          >
            简体中文
          </button>
        </div>
      </div>
    </main>
  );
}
