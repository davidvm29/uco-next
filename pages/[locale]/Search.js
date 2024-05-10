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
    const idioma = i18n.options.lng;

    useEffect(() => {
        const fetchData = async () => {
            if (!query) return; // Evitar solicitudes vacías

            const response = await fetch(`/${locale}/data.json`);
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
            <Footer/>
        </div>
    );
};

export default Search;

const getStaticProps = makeStaticProps(['second-page', 'common', 'footer'])
export { getStaticPaths, getStaticProps }
