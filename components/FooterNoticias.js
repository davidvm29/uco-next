import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export const FooterNoticias = () => {
  const {t} = useTranslation(['common'])
  return (
    <div>
      <footer style={{marginTop:'20px'}} id="footer" >
            <div id="footer-bar">
                <nav className="menu-footer">
                    <Link href="/servicios/actualidad/accesibilidad" >{t("accesibilidad")}</Link> ·
                    <Link href="/servicios/actualidad/comunicacion-contacto" >{t("contacto")}</Link> ·
                    <Link href="/servicios/actualidad/mapa-web" >{t("mapa_web")}</Link>
                </nav>

                <div id="footer-right">
                    <Link href="http://www.uco.es/" id="logo-footer"><img src="https://www.uco.es/servicios/actualidad//templates/uco/images/logo-footer.png" width="50" height="50" alt="Universidad de Córdoba" title="Universidad de Córdoba" /></Link>
                    <ul className="redes-sociales">
                        <li>
                            <Link href="http://www.facebook.com/universidadcordoba" target="_blank" rel="nofollow" className="icon-facebook"></Link>
                        </li>
                        <li>
                            <Link href="http://twitter.com/Univcordoba" target="_blank" rel="nofollow" className="icon-twitter"></Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/universidaddecordoba/" target="_blank" rel="nofollow" className="icon-instagram"></Link>
                        </li>
                        <li>
                            <Link href="http://www.linkedin.com/company/universidad-de-cordoba" target="_blank" rel="nofollow" className="icon-linkedin"></Link>
                        </li>
                        <li>
                            <Link href="http://www.uco.es/servicios/comunicacion/actualidad/?format=feed" target="_blank" rel="nofollow" className="icon-rss"></Link>
                        </li>
                        <li>
                            <Link href="https://www.flickr.com/photos/univcordoba/" target="_blank" rel="nofollow" className="icon-flickr"></Link>
                        </li>
                        <li>
                            <Link href="https://www.youtube.com/user/univcordoba" target="_blank" rel="nofollow" className="icon-youtube"></Link>
                        </li>																																										
                        <li>
                            <a href="https://www.tiktok.com/@universidadcordoba?lang=es" target="_blank" rel="noopener noreferrer" className="icon-tiktok"> </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  );
};

