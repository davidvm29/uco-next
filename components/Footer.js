import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export const Footer = () => {
  const {t} = useTranslation(['common'])
  const { i18n } = useTranslation();
  const idioma = i18n.options.lng;
  return (
    <div>
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
            <img src="/images/asset 22.png" width="50" height="50" alt="Universidad de Córdoba" title="Universidad de Córdoba" />
          </Link>
            <a href="http://www.ceia3.es" target="_blank" className="logo-footer" rel="noreferrer"><img src="/images/asset 23.png" width="50" height="50" alt="Universidad de Córdoba" title="Universidad de Córdoba" /></a>
            <a href="https://www.uco.es/resiliencia" target="_blank" className="logo-footer" rel="noreferrer"><img src="/images/asset 24.jpeg" height="50" alt="Universidad de Córdoba" title="Fondos PRTR" /></a>
            <a href="https://www.bancosantander.es/es/universidades" target="_blank" className="logo-footer" rel="noreferrer"><img src="/images/asset 25.jpeg" height="50" alt="Universidad de Córdoba" title="Santander Universidades" /></a>
            <a href="https://www.uco.es/investigacion/portal/HRS4R" className="logo-footer"><img src="/images/asset 26.png" height="50" alt="HR" title="HR" /></a>
            <a href="http://www.uco.es/zonacardioasegurada/" target="_blank" className="logo-footer logo-zonacardio" rel="noreferrer"><img src="/images/asset 27.png" width="100px" alt="Zona Cardio asegurada" title="Zona Cardio Asegurada - Universidad de Córdoba" /></a>
          </div>

          <div className="col-md-12 redes-sociales">
            <ul className="list-inline mb-3">
              <li className="list-inline-item"><a href="https://www.facebook.com/universidadcordoba" target="_blank" rel="nofollow noreferrer" className="icon-facebook"></a></li>
              <li className="list-inline-item"><a href="https://twitter.com/Univcordoba" target="_blank" rel="nofollow noreferrer" className="icon-twitter"></a></li>
              <li className="list-inline-item"><a href="https://www.linkedin.com/company/universidad-de-cordoba" target="_blank" rel="nofollow noreferrer" className="icon-linkedin"></a></li>
              <li className="list-inline-item"><a href="http://www.uco.es/servicios/actualidad/?format=feed" target="_blank" rel="nofollow noreferrer" className="icon-rss"></a></li>
              <li className="list-inline-item"><a href="https://www.flickr.com/photos/univcordoba/" target="_blank" rel="nofollow noreferrer" className="icon-flickr"></a></li>
              <li className="list-inline-item"><a href="https://www.youtube.com/user/univcordoba" target="_blank" rel="nofollow noreferrer" className="icon-youtube"></a></li>
              <li className="list-inline-item"><a href="https://www.instagram.com/universidaddecordoba/" target="_blank" rel="nofollow noreferrer" className="icon-instagram"></a></li>
              <li className="list-inline-item"><a href="https://www.tiktok.com/@universidadcordoba?lang=es" target="_blank" rel="nofollow noreferrer" className="icon-tiktok"></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
