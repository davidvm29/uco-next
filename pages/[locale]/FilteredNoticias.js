import React, { useState, useEffect } from "react";
import { getFiles, getNoticiasFecha } from "../../lib/mdx";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import {Header} from "../../components/Header";
import { NavBar } from '../../components/NavBar';
import { NavNoticias } from '../../components/NavNoticias';
import { Convocatorias } from '../../components/Convocatorias'
import {FooterNoticias} from '../../components/FooterNoticias'
import Calendar from "react-calendar";

const FilteredNoticias = ({ NoticiasFecha }) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const router = useRouter();
    const { fecha } = router.query;
    const [date, setDate] = useState(new Date());
    const [isClient, setIsClient] = useState(false);
    const [noticias, setNoticias] = useState([]);
    const { i18n } = useTranslation();
    const idioma = i18n.options.lng;
    const {t} = useTranslation(['common'])

    const handleDateChange = (newDate) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const dateString = newDate.toLocaleDateString(undefined, options).replace(/\//g, '-'); // Convertir la fecha seleccionada a formato yyyy-mm-dd
    
        console.log('Fecha seleccionada:', dateString);
    
        // Redirigir al usuario a la nueva página de noticias con solo la fecha seleccionada
        console.log('Redirigiendo a la página de noticias...');
        router.push(`/${idioma}/FilteredNoticias?fecha=${dateString}`);
    };

    useEffect(() => {
        if (fecha && NoticiasFecha) {
            const filteredNews = NoticiasFecha.filter(entry => {
                const entryDate = new Date(entry.fecha).toLocaleDateString(undefined, options).replace(/\//g, '-');
                return entryDate === fecha;
            });
            // Asegura que siempre asignamos un array a noticias y accede al array de noticias dentro del objeto
            setNoticias(filteredNews.length > 0 ? filteredNews[0].noticias : []);
        }
    }, [fecha, NoticiasFecha]);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div>
            <Header />
            <NavBar idioma={idioma}/>
            <NavNoticias />
            <section id="principal" className="row">
                <div id="info-container" className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                    <div className="elementosfiltrados">
                        {t("elementos_filtrados")} {fecha}
                    </div>
                    {noticias.length > 0 ? (
                        noticias.map(({ fecha, title, Lugar_publicacion, slug }, index) => (
                            <div key={index} className="itemContainer">
                                <span>{fecha}</span>
                                <h2 className="titulofiltradas"><Link href={`/${idioma}/${slug}`} passHref>{title}</Link></h2>
                                <div className="genericItemCategory">
                                    <span>{Lugar_publicacion}</span>
                                    <Link href={`/${idioma}/${slug}`} passHref>{t("leer_mas")}</Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>{t("noticias_no_disponibles")}</p>
                    )}
                </div>
                <section className="content-wrapper col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <div className="row mb-3 servicios_recursos"> <a href="#" target="_blank"><span className="icon-info"></span>{t("servicios_recursos")}</a></div>
                    <div className="container-calendar">
                        {isClient && (
                            <Calendar
                                onChange={setDate}
                                value={date}
                                onClickDay={handleDateChange}
                            />
                        )}
                    </div>
                    <Convocatorias />
                </section>
            </section>
            <FooterNoticias />
        </div>
    );
};

export default FilteredNoticias;

function makeStaticProps(ns = []) {
    return async function getStaticProps({ params }) {
        const NoticiasFecha = await getNoticiasFecha(params.locale);
        return {
            props: {
                NoticiasFecha,
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
            const posts = await getFiles(idioma);
            console.log('Postsss', posts)
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
