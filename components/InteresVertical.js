import { useTranslation } from 'next-i18next';

export const InteresVertical = () => {
    const {t} = useTranslation(['common'])
    return (
            <section id="interes" className="col-lg-2 interesCol" style={{display: "block"}}>
                <h3>{t("interes")}</h3>
                <div className="row">
                    <div className="item col-lg-12">
                        <a href="https://sede.uco.es/" previewlistener="true"><span style={{ display: "block", padding: "15px 30px", height: "70px", width: "183px" }}>{t("sede_electronica")}</span></a>
                    </div>
                </div>
                <div className="row">
                    <div className="item col-lg-12">
                        <a href="transparencia-y-responsabilidad-social.html" previewlistener="true"><span style={{ display: "block", marginBottom: "5px", width: "183px" }}>{t("transparencia_resp_social")} </span></a>
                    </div>
                </div>
                <div className="row">
                    <div className="item col-lg-12">
                        <a href="https://sede.uco.es/bouco/" previewlistener="true"><span style={{ display: "block", marginBottom: "5px", padding: "15px 50px 15px 30px" }}>{t("bouco")} </span></a>
                    </div>
                </div>
                <div className="row">
                    <div className="item col-lg-12">
                        <a href="facturae" previewlistener="true"><span style={{ display: "block", marginBottom: "5px", padding: "15px 30px" }}>{t("factura_electronica")} </span></a>
                    </div>
                </div>
                <div className="row">
                    <div className="item col-lg-12">
                        <a href="gestion/laboral" previewlistener="true"><span style={{ display: "block", marginBottom: "5px", padding: "15px 50px 40px 30px" }}>{t("portal_personal")}</span></a>
                    </div>
                </div>
                <div className="row">
                    <div className="item col-lg-12">
                        <a href="http://www.ceia3.es/" previewlistener="true"><span style={{ display: "block", marginBottom: "5px", padding: "15px 70px 15px 30px" }}>{t("ceia3")}</span></a>
                    </div>
                </div>
            </section>
    );
};
