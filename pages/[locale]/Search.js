import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Header } from "../../components/Header";
import { NavBar } from '../../components/NavBar';
import { NavNoticias } from '../../components/NavNoticias';
import { NavSearch } from '../../components/NavSearch';
import { InteresVertical } from '../../components/InteresVertical';
import { Convocatorias } from '../../components/Convocatorias'
import { Footer } from '../../components/Footer'
import React, { useState, useEffect } from "react";
import Link from 'next/link';

const Search = () => {
    const router = useRouter();
    const { locale } = router.query;
    const [searchResults, setSearchResults] = useState([]);
    const query = router.query.q;
    const { t, i18n } = useTranslation(['common']);
    const idioma = i18n.language;

    useEffect(() => {
        const fetchData = async () => {
            if (!query) return; // Evitar solicitudes vacías

            const response = await fetch(`../json/busqueda/${locale}/data.json`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            // Filtrar los resultados de búsqueda basados en la consulta
            const results = data.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(results);
        };

        // Llamar a la función para cargar los datos solo si hay una consulta válida
        fetchData();
    }, [query, locale]);

    return (
        <div>
            <Header/>
            <NavBar idioma={idioma}/>
            <div className="external-buttons">
                <Link href={`/${idioma}`}><img src="../images/asset0.png" alt="Botón 1" /></Link>
                <a href="/acercanuevo.html"><img src="../images/asset1.png" alt="Botón 2" /></a>
            </div>
            <NavSearch/>
            <section id="principal" className="row">
            <section id="contenido" className="col-lg-10 col-md-12 col-sm-12 col-xs-12">
                {searchResults.length > 0 ? (
                    <div>
                        <h2 className="resultados_busqueda">{t("resultados_busqueda")}</h2>
                        <div className="item-busqueda">
                            <ul id='results-container'>
                                {searchResults.map((result, index) => (
                                    <li id='search-li' key={index}>
                                        <Link href={result.url || '#'}>{result.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p>{t("no_resultados_busqueda")}</p>
                    </div>
                )}
            </section>
            <InteresVertical/>
        </section>
            <footer className="container-fluid footer-bar text-center custom-footer-background pt-4 pb-4">
            <div className="row align-items-center">
            <div className="col-md-12 menu-footer mb-3">
                <a href="mapaweb.html">{t("mapa_web")}</a> ·
                <a href="http://www.uco.es/servicios/actualidad/accesibilidad" target="_blank" rel="noopener noreferrer">{t("accesibilidad")}</a> ·
                <a href="contacto.html">{t("contacto")}</a> ·
                <a href="gestion/virtual/directorio-uco" target="_blank">{t("buscar_personas")}</a> ·
                <a href="https://www.uco.es/correo">{t("correo")}</a> ·
                <a href="https://www.uco.es/organizacion/areasecretariageneral/transparencia/integridad-y-buen-gobierno/" target="_blank" rel="noreferrer">{t("sistema_integridad_uco")}</a> ·
                <a href="organizacion/secretariageneral/proteccion-de-datos">{t("proteccion_datos")}</a>
            </div>

            <div className="col-md-12 logos-footer mb-3">
            <Link href={`/${idioma}`} className="logo-footer">
                <img src="../images/asset 22.png" width="50" height="50" alt="Universidad de Córdoba" title="Universidad de Córdoba" />
            </Link>
                <a href="http://www.ceia3.es" target="_blank" className="logo-footer" rel="noreferrer"><img src="../images/asset 23.png" width="50" height="50" alt="Universidad de Córdoba" title="Universidad de Córdoba" /></a>
                <a href="https://www.uco.es/resiliencia" target="_blank" className="logo-footer" rel="noreferrer"><img src="../images/asset 24.jpeg" height="50" alt="Universidad de Córdoba" title="Fondos PRTR" /></a>
                <a href="https://www.bancosantander.es/es/universidades" target="_blank" className="logo-footer" rel="noreferrer"><img src="../images/asset 25.jpeg" height="50" alt="Universidad de Córdoba" title="Santander Universidades" /></a>
                <a href="https://www.uco.es/investigacion/portal/HRS4R" className="logo-footer"><img src="../images/asset 26.png" height="50" alt="HR" title="HR" /></a>
                <a href="http://www.uco.es/zonacardioasegurada/" target="_blank" className="logo-footer logo-zonacardio" rel="noreferrer"><img src="../images/asset 27.png" width="100px" alt="Zona Cardio asegurada" title="Zona Cardio Asegurada - Universidad de Córdoba" /></a>
            </div>

            <div className="col-md-12 redes-sociales">
                <ul className="list-inline mb-3">
                <li className="list-inline-item"><a href="https://www.facebook.com/universidadcordoba" target="_blank" rel="nofollow noreferrer"style={{backgroundImage: `url('../images/asset\ 32.png')`}} className="icon-facebook"></a></li>
                <li className="list-inline-item"><a href="https://twitter.com/Univcordoba" target="_blank" rel="nofollow noreferrer" style={{backgroundImage: `url('../images/asset\ 33.png')`}} className="icon-twitter"></a></li>
                <li className="list-inline-item"><a href="https://www.linkedin.com/company/universidad-de-cordoba" target="_blank" rel="nofollow noreferrer" style={{backgroundImage: `url('../images/asset\ 34.png')`}} className="icon-linkedin"></a></li>
                <li className="list-inline-item"><a href="http://www.uco.es/servicios/actualidad/?format=feed" target="_blank" rel="nofollow noreferrer" style={{backgroundImage: `url('../images/asset\ 35.png')`}} className="icon-rss"></a></li>
                <li className="list-inline-item"><a href="https://www.flickr.com/photos/univcordoba/" target="_blank" rel="nofollow noreferrer" style={{backgroundImage: `url('../images/asset\ 36.png')`}} className="icon-flickr"></a></li>
                <li className="list-inline-item"><a href="https://www.youtube.com/user/univcordoba" target="_blank" rel="nofollow noreferrer" style={{backgroundImage: `url('../images/asset\ 37.png')`}} className="icon-youtube"></a></li>
                <li className="list-inline-item"><a href="https://www.instagram.com/universidaddecordoba/" target="_blank" rel="nofollow noreferrer" style={{backgroundImage: `url('../images/asset\ 38.png')`}}className="icon-instagram"></a></li>
                <li className="list-inline-item"><a href="https://www.tiktok.com/@universidadcordoba?lang=es" target="_blank" rel="nofollow noreferrer" style={{backgroundImage: `url('../images/asset\ 39.png')`}} className="icon-tiktok"></a></li>
                </ul>
            </div>
            </div>
        </footer>
        </div>
    );
};

export default Search;

const getStaticProps = makeStaticProps(['second-page', 'common', 'footer'])
export { getStaticPaths, getStaticProps }
