import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nextConfig from '../next-i18next.config'
import { getAllFilesMetadata, getImages } from './mdx';

export const getI18nPaths = () =>
  i18nextConfig.i18n.locales.map((lng) => ({
    params: {
      locale: lng
    }
  }))

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths()
})

export async function getI18nProps(ctx, ns = ['common']) {
  const locale = ctx?.params?.locale
  let props = {
    ...(await serverSideTranslations(locale, ns))
  }
  return props
}

export function makeStaticProps( ns = []) {
  return async function getStaticProps(ctx) {
    const locale = ctx?.params?.locale;
    const posts = await getAllFilesMetadata(locale);
    const images = await getImages();
    return {
      props: { posts, images, ...(await getI18nProps(ctx, ns)) }
    };
  };
}

export async function getStaticProps(ctx) {
  const locale = ctx?.params?.locale;
  console.log('pene chico', locale)
  return {
      props: { locale }
  };
}

