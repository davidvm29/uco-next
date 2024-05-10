import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export const Interes = () => {
    const {t} = useTranslation(['common'])
    return (
        <div>
            <div className="row" id="menuContainer" style={{marginBottom: '0px !important'}}>
                <h3>{t("interes")}</h3>
                <div className="item col-lg-2 col-md-4 col-sm-6 col-xs-12">
                    <Link href="https://sede.uco.es/">
                        <span>{t("sede_electronica")}</span>
                    </Link>
                </div>
                <div className="item col-lg-2 col-md-4 col-sm-6 col-xs-12">
                    <Link href="transparencia-y-responsabilidad-social.html">
                        <span>{t("transparencia_resp_social")}</span>
                    </Link>
                </div>
                <div className="item col-lg-2 col-md-4 col-sm-6 col-xs-12">
                    <Link href="https://sede.uco.es/bouco/">
                        <span>{t("bouco")}</span>
                    </Link>
                </div>
                <div className="item col-lg-2 col-md-4 col-sm-6 col-xs-12">
                    <Link href="facturae">
                        <span>{t("factura_electronica")}</span>
                    </Link>
                </div>
                <div className="item col-lg-2 col-md-4 col-sm-6 col-xs-12">
                    <Link href="gestion/laboral">
                        <span>{t("portal_personal")}</span>
                    </Link>
                </div>
                <div className="item col-lg-2 col-md-4 col-sm-6 col-xs-12">
                    <Link href="http://www.ceia3.es/">
                        <span>{t("ceia3")}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
