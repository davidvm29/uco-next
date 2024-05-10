import Link from 'next/link';
import { useTranslation } from 'next-i18next'

export const NavNoticias = () => {
  const {t} = useTranslation(['common'])
  const { i18n } = useTranslation();
  const idioma = i18n.options.lng;
  return (
    <div>
        <nav className="row" id="menu-principal">
            {/* <div id="menu-button" style={{ display: 'block' }} bis_skin_checked="1">Menú</div> */}
            <ul className="open">
                <li><Link href={`/${idioma}`}>{t("inicio")}</Link></li>
                <li><a href="#">{t("vida_academica")}</a></li>
                <li><a href="#">{t("ciencia")}</a></li>
                <li><a href="#">{t("institucional")}</a></li>
                <li><a href="#">{t("internacional")}</a></li>
                <li><a href="#">{t("becas")}</a></li>
                <li><a href="#">{t("emprendimiento")}</a></li>
                <li><a href="#">{t("cultura")}</a></li>
                <li><a href="#">{t("vida_universitaria")}</a></li>
                <li><a href="#">{t("deporte")}</a></li>
            </ul>
        </nav>
    </div>
  );
}