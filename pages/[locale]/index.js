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
import Link from 'next/link';

const Homepage = ({ posts, images, ...i18nProps }) => {
  const { t } = useTranslation(['common'])
  const { i18n } = useTranslation();
  const idioma = i18n.language;

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

    </div>
  )
}

export default Homepage

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }