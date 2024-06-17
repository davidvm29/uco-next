import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LanguageSwitchLink from './LanguageSwitchLink';
import i18nextConfig from '../next-i18next.config';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export const NavBarNoticias = ({ idioma }) => {
  const router = useRouter();
  const { locale } = router.query;
  // const idioma = i18n.language;
  const [query, setQuery] = useState('');
  const MAX_QUERY_LENGTH = 50;
  const {t} = useTranslation(['common'])

  const handleSearch = () => {
    // Verificar si la consulta está vacía
    if (query.trim() === '') {
      alert('Por favor ingrese un término de búsqueda');
      return;
    }

    // Verificar si la consulta excede el límite de caracteres permitidos
    if (query.length > MAX_QUERY_LENGTH) {
      alert('La búsqueda excede el límite de caracteres permitidos');
      return;
    }

    // Redirigimos a la pagina con la query
    router.push({
      pathname: `/${idioma}/Search`,
      query: { q: query },
    });
  };

  return (
    <div>
      <div id="top-bar">
        <ul id="idiomas">
          {i18nextConfig.i18n.locales.map((locale) => (
            <LanguageSwitchLink
              locale={locale}
              key={locale}
            />
          ))}
        </ul>
        <div class="cita-previa-cont">
            <a href="https://citaprevia.gestion.uco.es/">{t("solicitar_cita")}</a>
        </div>
        <div id="buscar">
          <a className="boton-buscar"></a>
          <label htmlFor="q" style={{ display: "none" }}>{t("buscar")}</label>
          <input
            type="text"
            size="10"
            placeholder=""
            name="q"
            id="q"
            value={query}
            onChange={(e) => {
              // Limitar el número de caracteres ingresados en el campo de búsqueda
              if (e.target.value.length <= MAX_QUERY_LENGTH) {
                setQuery(e.target.value);
              }
            }}
          />
          <input
            type="button"
            value="Buscar"
            className="btn-buscar"
            onClick={handleSearch}
          />
        </div>
      </div>
      <div className="external-buttons">
        <Link href={`/${idioma}`}><img src="../images/asset0.png" alt="Botón 1" /></Link>
        <a href="/acercanuevo.html"><img src="../images/asset1.png" alt="Botón 2" /></a>
      </div>
    </div>
  );
};