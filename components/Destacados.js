import React from 'react';
import { useTranslation } from 'next-i18next';

function Destacados() {
  const {t} = useTranslation(['common'])
  return (
    <div>
        <div className="row" id="destacados">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 custom-col">
            <a href="servicios/actualidad">
                <img className="custom-img" src="/images/asset 14.jpeg" alt="Actualidad Universitaria" longdesc="servicios/actualidad" />
                <h2 className="titulo">{t("actualidad_universitaria")}</h2>
            </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 custom-col">
            <a href="servicios/actualidad">
                <img className="custom-img" src="/images/asset 15.jpeg" alt="Actualidad Universitaria" longdesc="servicios/actualidad" />
                <h2 className="titulo" id="agenda">{t("agenda")}</h2>
            </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 custom-col">
            <a href="servicios/actualidad">
                <img className="custom-img" src="/images/asset 16.jpeg" alt="Actualidad Universitaria" longdesc="servicios/actualidad" />
                <h2 className="titulo">Vídeos</h2>
            </a>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 custom-col">
            <a href="servicios/actualidad">
                <img className="custom-img" src="/images/asset 17.jpeg" alt="Actualidad Universitaria" longdesc="servicios/actualidad" />
                <h2 className="titulo" id="ciencia">{t("ciencia_uco")}</h2>
            </a>
            </div>
        </div>
    </div>
  );
}

export default Destacados;
