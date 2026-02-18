'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    startTransition(() => {
      // Set cookie and refresh
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
      router.refresh();
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
      aria-label={locale === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">{locale === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
}
