import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { routing } from './routing';

export default getRequestConfig(async () => {
  // This site has no locale path segment — the active locale is stored in the
  // NEXT_LOCALE cookie (set by the in-nav language switcher). Read it here so
  // next-intl serves the right messages and the layout sets dir="rtl" for ar.
  const store = await cookies();
  const cookieLocale = store.get('NEXT_LOCALE')?.value;
  const locale =
    cookieLocale && routing.locales.includes(cookieLocale as (typeof routing.locales)[number])
      ? cookieLocale
      : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: 'UTC',
  };
});
