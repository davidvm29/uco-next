import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import Link from 'next/link'
import { Header } from '../../components/Header'

const Homepage = () => {
  const { t } = useTranslation(['404', 'common', 'footer'])

  return (
    <>
      <main>
        <Header heading={t('h1')} title={t('title')} />
        <div>
          <p>404 Error. Not Found :(</p>
          <Link href='/'>
            <button
              type='button'
            >
              {t('common:back-to-home')}
            </button>
          </Link>
        </div>
      </main>
    </>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['404', 'common', 'footer'])
export { getStaticPaths, getStaticProps }
