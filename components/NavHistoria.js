import Link from 'next/link';
import { useTranslation } from 'next-i18next'

export const NavHistoria = () => {
  const {t} = useTranslation(['common'])
  const { i18n } = useTranslation();
  const idioma = i18n.options.lng;
  return (
    <nav className="row" id="menu-principal">
        {/* <div id="menu-button" style={{display: 'block'}} bis_skin_checked="1">Menú</div> */}
        <ul className="open">
            <li className="home" style={{ verticalAlign: "middle" }}><Link href={`/${idioma}`} style={{ verticalAlign: "middle", height: "26px", width: "26px", textAlign: "left" }}><img src="/images/icon-home.png" alt="Inicio" width="26" height="26"/></Link></li>
            <li><a href="historia-y-video-promocional.html">{t("historia")}</a></li>
            <li className="has-sub"><span className="submenu-button"></span><a href="#">{t("organizacion")}</a>
                <ul style={{display: 'block'}}>
                    <li><a href="organizacion-institucional-equipo-gobierno.html">{t("gobierno")}</a></li>
                    <li><a href="organizacion/consejogobierno">{t("consejo_gobierno")}</a></li>
                    <li><a href="organizacion/secretariageneral/claustro-universidad">{t("claustro")}</a></li>
                    <li><a href="organizacion/secretariageneral">{t("secretaria_general")}</a></li>
                    <li><a href="gerencia">{t("gerencia")}</a></li>
                    <li><a href="https://www.uco.es/nuevaweb/servicios/asesoriajuridica">{t("asesoria_juridica")}</a></li>
                    <li><a href="https://www.uco.es/nuevaweb/organizacion/defensor_universitario">{t("defensoria_universitaria")}</a></li>
                    <li><a href="http://www.uco.es/organizacion/consejosocial/">{t("consejo_social")}</a></li>
                    <li><a href="http://ucoceu.es/">{t("consejo_estudiantes")}</a></li>	
                </ul>
            </li>
            <li className="has-sub"><span className="submenu-button"></span><a href="#">{t("centros_departamentos")}</a>
                <ul style={{display: 'block'}}>
                    <li><a href="organiza/centros/veterinaria/">{t("vet")}</a></li>
                    <li><a href="organiza/centros/etsiam/">{t("agronomia_montes")}</a></li>
                    <li><a href="organiza/centros/medicinayenfermeria/">{t("medicina_enfermeria")}</a></li>
                    <li><a href="organiza/centros/ciencias/">{t("ciencias")}</a></li>
                    <li><a href="organiza/centros/filosofia/">{t("filosifia_letras")}</a></li>
                    <li><a href="organiza/centros/derecho/">{t("derecho_ciencias")}</a></li>
                    <li><a href="organiza/centros/educacion/">{t("educacion_psicologia")}</a></li>
                    <li><a href="organiza/centros/eps/">{t("politecnica_cordoba")}</a></li>
                    <li><a href="organiza/centros/rlaborales/">{t("ciencias_trabajo")}</a></li>
                    <li><a href="organiza/centros/EPSBelmez/">{t("politecnica_belmez")}</a></li>
                    <li><a href="http://www.uco.es/sagradocorazon/" target="_blank" rel="noopener noreferrer">{t("magisterio")}</a></li>
                    <li><a href="https://www.uco.es/organiza/centros/fisidec/" target="_blank" rel="noopener noreferrer">{t("fisidec")}</a></li>
                    <li><a href="catedrasyaulas/intergeneracional/" target="_blank">{t("intergeneracional")}</a></li>
                    <li><a href="departamentos.html" target="_blank"> {t("departamentos")}</a></li>
                    <li><a href="estudios/idep/">{t("posgrado")}</a></li>
                    <li><a href="cultura">{t("ucocultura")}</a></li>
                </ul>
            </li>
            <li><a href="ucomapa.html">{t("como_llegar")}</a></li>
        </ul>
    </nav>
  );
}