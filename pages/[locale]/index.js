import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

import {Header} from "../../components/Header";
import {NavBar} from "../../components/NavBar";
import {Nav} from "../../components/Nav";
import Carousel from "../../components/Carousel";
import Destacados from "../../components/Destacados";
import {Footer} from "../../components/Footer";
import {Interes} from '../../components/Interes'
import Noticias from "../../components/Noticias";

const Homepage = ({ posts, images, ...i18nProps }) => {
  const { t } = useTranslation(['common'])
  const { i18n } = useTranslation();
  const idioma = i18n.options.lng;

  return (
    <div>
      <Header/>
      <NavBar idioma={idioma}/>
      <div className="external-buttons">
        <Link href={`/${idioma}`}><img src="./images/asset0.png" alt="Botón 1" /></Link>
        <a href="/acercanuevo.html"><img src="./images/asset1.png" alt="Botón 2" /></a>
      </div>
      <Nav/>
      <Carousel images={images} />
      <Destacados/>
      <Noticias posts={posts} idioma={idioma} {...i18nProps}/>
      <Interes/>
      <Footer/>

      {/* <main>
        <Header heading={t('h1')} title={t('title')} />
        <div>
          <Link href='/second-page'>
            <button
              type='button'
            >
              {t('to-second-page')}
            </button>
          </Link>
        </div>
      </main>
      <Footer /> */}
    </div>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['common', 'footer'])
export { getStaticPaths, getStaticProps }

// export async function getStaticProps1() {
//   const posts = await getAllFilesMetadata();
//   return {
//     props: { posts, images }
//   }
// }
