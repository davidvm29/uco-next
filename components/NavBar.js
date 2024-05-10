import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LanguageSwitchLink from './LanguageSwitchLink';
import i18nextConfig from '../next-i18next.config';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export const NavBar = ({ idioma }) => {
  const router = useRouter();
  const { locale } = router.query;
  const [query, setQuery] = useState('');
  const MAX_QUERY_LENGTH = 50; // Establecer el máximo de caracteres permitidos en la búsqueda
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

    // Redirigir a la página de resultados con la consulta de búsqueda
    router.push({
      pathname: `/${locale}/Search`,
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

        <div id="buscar"> 
          <a style={{backgroundImage: `url('./images/boton-lupa.png') top center no-repeat`}} className="boton-buscar"></a>
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
            value={t("buscar")}
            className="btn-buscar"
            onClick={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};
