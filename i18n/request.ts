import logger from '@/lib/logger';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from './routing';

export default getRequestConfig(async ({locale}) => {
  logger.debug(`locale: ${locale}`);
  if (!routing.locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
