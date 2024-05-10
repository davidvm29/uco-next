import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import {Header} from "../../components/Header";
import {NavBarNoticias} from "../../components/NavBarNoticias";
import { InteresVertical } from '../../components/InteresVertical';
import {NavHistoria} from "../../components/NavHistoria";
import Carousel from "../../components/Carousel";
import Destacados from "../../components/Destacados";
import {Footer} from "../../components/Footer";
import {Interes} from '../../components/Interes';
import Noticias from "../../components/Noticias";
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFilesMenu } from '../../lib/mdx';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

export default function Historia({ source, frontmatter }) {
  const router = useRouter();  // Usando el hook useRouter
  const { t } = useTranslation(['common']);
  const { i18n } = useTranslation();
  const idioma = i18n.options.lng;
  const paths = [
    { label: t("inicio_bread"), href: `/${idioma}` },
    { label: t("conoce_uco"), href: `/${idioma}/${t("conoce_uco")}`},
    { label: frontmatter.enunciado, href: '' }
  ];

  return (
    <>
      <Header />
      <NavBarNoticias />
      <NavHistoria/>
      <Breadcrumbs paths={paths}/>
      <section id="principal" className="row" >
          <section id="contenido" className="col-lg-10 col-md-12 col-sm-12 col-xs-12" >
              <div id="contenido-texto" className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <MDXRemote {...source} />
              </div>
              <div id="contenido-video" className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{marginRight: "50px;"}}>
                  <iframe width="450" height="315" src="https://www.youtube.com/embed/LG1c4HhNbjo" frameborder="0" allowfullscreen></iframe>
                  <img src="/images/rectorado.jpg" alt="Rectorado" width="450"/>
              </div>
          </section>
        <InteresVertical/>
      </section>
      <Footer />
    </>
  )
}

function makeStaticProps(ns = []) {
  return async function getStaticProps(context) {
    const {params} = context
    const { source, frontmatter } = await getFileBySlug('Historia', params.locale, 'menu');
    return {
        props: {
            source,
            frontmatter,
            ...(await serverSideTranslations(params.locale, ns))
        }
    };
  };
}

export const getStaticProps = makeStaticProps(['common', 'footer']);

export async function getStaticPaths() {
  const idiomasDisponibles = ['es', 'en'];
  const paths = await Promise.all(
      idiomasDisponibles.map(async (idioma) => {
          const posts = await getFilesMenu(idioma);
          return posts.map((post) => ({
              params: { locale: idioma, slug: post.replace(/\.mdx/, "") },
          }));
      })
  );
  return {
      paths: paths.flat(),
      fallback: "blocking",
  };
}


