import { getFileBySlug, getFiles, getRelatedPosts, getRelatedPostsByLocation, getNoticiasFecha } from "../../lib/mdx";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MDXRemote } from "next-mdx-remote";
import { Header } from '../../components/Header'
import { NavBar } from "../../components/NavBar";
import { FooterNoticias } from "../../components/FooterNoticias";
import { incrementVisitCount } from "../../lib/counter";
import { ShareButtons } from "../../components/ShareButtons"
import { NavNoticias } from "../../components/NavNoticias";
import { Convocatorias } from "../../components/Convocatorias";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';



export default function Post({ source, frontmatter, count, locale, relatedPosts, relatedPostsCategories, NoticiasFecha, ...i18nProps}) {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
      const router = useRouter();
      const [date, setDate] = useState(new Date());
      const [isClient, setIsClient] = useState(false);
      const {t} = useTranslation(['common'])
      const { i18n } = useTranslation();
      const idioma = i18n.options.lng;

      const paths = [
        { label: t("inicio_bread"), href: `/${locale}` },
        { label: frontmatter.title, href: '' }
      ];

    const dayHasNews = (date) => {
        const yyyyMmDd = date.toISOString().slice(0, 10);
        return NoticiasFecha.some(newsDate => {
            try {
                return new Date(newsDate.fecha).toISOString().slice(0, 10) === yyyyMmDd;
            } catch (error) {
                console.error('Error al convertir la fecha:', newsDate, error);
                return false;
            }
        });
    };
    
    const handleDateChange = (newDate) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const dateString = newDate.toLocaleDateString(undefined, options).replace(/\//g, '-'); // Convertir la fecha seleccionada a formato yyyy-mm-dd
    
        console.log('Fecha seleccionada:', dateString);
    
        // Redirigir al usuario a la nueva página de noticias con solo la fecha seleccionada
        console.log('Redirigiendo a la página de noticias...');
        router.push(`/${locale}/FilteredNoticias?fecha=${dateString}`);
    };
    

      useEffect(() => {
        setIsClient(true);
      }, []);
    return (
        <div>
            <Header/>
            <NavBar idioma={idioma}/>
            <NavNoticias/>
        <section id="principal" className="row">
            <Breadcrumbs paths={paths}/>
            <section id="content" className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                <div className="itemHeader">
                    <span className="itemDateCreated">{frontmatter.fecha}</span>
                    <h2 className="itemTitle"> {frontmatter.title}</h2>
                    <span className="itemAuthor"> {frontmatter.autor}</span>
                </div>
                <div className="itemBody">
                    <figure className="imagen_contenido_noticia">
                        <a data-k2-modal="image" href="/servicios/actualidad/media/k2/items/cache/a8111bab4c62ab7868529ac61cb9bb35_XL.jpg" title="Clic para vista previa de la imagen">
                            <img src={frontmatter.url_image} alt="Descripción de la imagen" />
                        </a>
                        <figcaption className="pie_contenido_noticia">
                            {frontmatter.pie_foto}
                        </figcaption>
                    </figure>
                    
                    <div className="texto_noticia">
                        <MDXRemote {...source} />
                    </div>
                    <div className="InfoAdd">
                        <h3>{t("informacion_adicional")}</h3>
                        </div>
                        <div className="ultfechamodificada">
                        <span>{t("fecha_modificada")} {frontmatter.ult_fecha_modificada}</span>
                        </div>
                        <span className="visitCount">{t("visto")} <strong>{count}</strong> {t("veces")}</span>
                    </div>

                    <div style={{ marginTop: '40px' }}></div>
                    <div className="share-links">
                        <ShareButtons/>
                    </div>
                    <div style={{marginBottom: '20px'}} className="hastag">
                        <span>{t("publicado")} <a href="#">{frontmatter.Lugar_publicacion}</a></span>
                        <span>{t("etiquetado")}
                            <ul className="itemTags" style={{color:'#7D6CAE'}}>
                            {frontmatter.hastag}
                            </ul>
                        </span>
                       <div className="itemRelated">
                            <h3>{t("articulos_relacionados")}</h3>
                            <ul>
                                {relatedPosts.map((post, index) => (
                                        <li key={index}>
                                            <Link href={`/${locale}/${post.slug}`}>{post.title}</Link>
                                        </li>
                                ))}
                            </ul>
                       </div>
                       </div>

                       <div className="itemNavigation">
                            {relatedPostsCategories.length > 0 && (
                                <>
                                    <span className="itemNavigationTitle" style={{ fontSize: '14px', textDecoration: 'none solid rgb(153,153,153)', color: '#999999', fontFamily: 'Montserrat, sans-serif', display: 'inline' }}>{t("mas_categoria")}</span>
                                    <ul style={{ display: 'inline' }}>
                                        {relatedPostsCategories.map((post, index) => (
                                                <span key={index}>
                                                <Link style={{ textDecoration: 'none solid rgb(125,108,174)', color: '#7D6CAE', padding: '0 12px 0 12px' }} href={`/${locale}/${post.slug}`} passHref>
                                                    {post.title}
                                                </Link>
                                                </span>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                        <div className="itemBackToTop">
                            <a className="k2Anchor" onClick={scrollToTop} style={{ cursor: 'pointer' }}> {t("volver_arriba")}</a>
                        </div>
            </section>
            <section className="content-wrapper col-lg-3 col-md-12 col-sm-12 col-xs-12">
                <div className="row mb-3 servicios_recursos">
                    <Link href="#" target="_blank">
                        <span className="icon-info"></span> {t("servicios_recursos")}
                    </Link>
                </div>
                
                <div className='calendar-container'>
                {isClient && NoticiasFecha && (
                    <Calendar
                        onChange={setDate}
                        value={date}
                        onClickDay={handleDateChange}
                        tileClassName={({ date, view }) => view === 'month' && (dayHasNews(date) ? 'news-day' : '')}
                        tileDisabled={({ date, view }) => view === 'month' && !dayHasNews(date)} // Deshabilita los días sin noticias
                    />
                )}

                </div>
                <Convocatorias/>
            </section>
        </section>
            <FooterNoticias/>
        </div>
    );
}

function makeStaticProps(ns = []) {
    return async function getStaticProps({ params }) {
        const { source, frontmatter } = await getFileBySlug(params.slug, params.locale, 'noticias');
        const count = await incrementVisitCount(frontmatter.slug);
        const relatedPosts = await getRelatedPosts(frontmatter.slug, params.locale);
        const relatedPostsCategories = await getRelatedPostsByLocation(frontmatter.slug, params.locale);
        const NoticiasFecha = await getNoticiasFecha(params.locale);

        return {
            props: {
                source,
                frontmatter,
                count,
                locale: params.locale,
                relatedPosts,
                relatedPostsCategories,
                NoticiasFecha,
                ...(await serverSideTranslations(params.locale, ns))
            }
        };
    };
}

export const getStaticProps = makeStaticProps(['common', 'footer']);

export async function getStaticPaths() {
    const idiomasDisponibles = ['es', 'en'];

    // Obtiene las publicaciones para cada idioma de forma concurrente.
    const paths = await Promise.all(
        idiomasDisponibles.map(async (idioma) => {
            // Obtiene las publicaciones para el idioma actual.
            const posts = await getFiles(idioma);
            // Genera un objeto de ruta para cada publicación.
            return posts.map((post) => ({
                params: { locale: idioma, slug: post.replace(/\.mdx/, "") },
            }));
        })
    );

    // Retorna el array de rutas aplanado y el fallback.
    return {
        paths: paths.flat(),
        fallback: "blocking",
    };
}





