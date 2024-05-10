import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

export const Convocatorias = () => {
  const {t} = useTranslation(['common'])
  return (
    <div>
        <div className="convocatorias-container">
            <div className="convocatorias">
                <h3 className="secciones-noticias">{t("convocatorias")}</h3>

                <div className="item-secciones">
                    <div>
                        <Link className="enlaces-secciones" href="/servicios/actualidad/convocatorias-abiertas/676-iii-congreso-internacional-nosotros-proponemos-ciudadania-sostenibilidad-e-innovacion-en-la-educacion-ciudad-real-17-20-abril-de-2024">
                        {t("convocatoria1")}
                        </Link>
                    </div>
                    <div style={{ fontFamily: 'Lato, sans-serif', fontSize: '13px', color: '#3E3E3D' }}>{t("mas_info")}</div>
                    <div style={{ textAlign: 'right' }}>
                        <Link style={{ fontFamily: 'Lato, sans-serif', fontSize: '13px', fontStyle: 'italic', color: '#6E6E6E', textDecoration: 'none', margin: '0 10px 0 0' }} href="/servicios/actualidad/convocatorias-abiertas/676-iii-congreso-internacional-nosotros-proponemos-ciudadania-sostenibilidad-e-innovacion-en-la-educacion-ciudad-real-17-20-abril-de-2024">
                            {t("leer_mas")}
                        </Link>
                    </div>
                    <div style={{ clear: 'both' }}></div>
                </div>

                <div className="item-secciones">
                    <div >
                        <Link className="enlaces-secciones" href="/servicios/actualidad/convocatorias-abiertas/676-iii-congreso-internacional-nosotros-proponemos-ciudadania-sostenibilidad-e-innovacion-en-la-educacion-ciudad-real-17-20-abril-de-2024">
                            {t("convocatoria2")}
                        </Link>
                    </div>
                    <div style={{ fontFamily: 'Lato, sans-serif', fontSize: '13px', color: '#3E3E3D' }}>
                        {t("info_general")} {' '}
                        <Link className="enlaces-secciones" href="https://www.rec24.es/informacion-general" target="_blank" rel="noopener noreferrer">
                            https://www.rec24.es/informacion-general
                        </Link> 
                        <Link className="enlaces-secciones" href="https://www.rec24.es/inscripciones" target="_blank" rel="noopener noreferrer">
                            {t("inscripciones")}
                        </Link>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <Link style={{ fontFamily: 'Lato, sans-serif', fontSize: '13px', fontStyle: 'italic', color: '#6E6E6E', textDecoration: 'none', margin: '0 10px 0 0' }} href="/servicios/actualidad/convocatorias-abiertas/676-iii-congreso-internacional-nosotros-proponemos-ciudadania-sostenibilidad-e-innovacion-en-la-educacion-ciudad-real-17-20-abril-de-2024">
                            {t("leer_mas")}
                        </Link>
                    </div>
                </div>

                <div className="item-secciones">
                    <div >
                        <Link className="enlaces-secciones" href="/servicios/actualidad/convocatorias-abiertas/676-iii-congreso-internacional-nosotros-proponemos-ciudadania-sostenibilidad-e-innovacion-en-la-educacion-ciudad-real-17-20-abril-de-2024">
                            {t("convocatoria3")}
                        </Link>
                    </div>
                    <div style={{ fontFamily: 'Lato, sans-serif', fontSize: '13px', color: '#3E3E3D' }}>
                        {t("convocatoria4_1")} {' '} 
                        <Link className="enlaces-secciones" href="http://www.uco.es/vidauniversitaria/cooperacion/uco-refugio/255-formulario-para-propuestas-de-actividades-sobre-refugio-ucrania" target="_blank" rel="noopener noreferrer">
                            {t("formulario")}
                        </Link> 
                        {' '} {t("convocatoria4_2")}
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <Link style={{ fontFamily: 'Lato, sans-serif', fontSize: '13px', fontStyle: 'italic', color: '#6E6E6E', textDecoration: 'none', margin: '0 10px 0 0' }} href="/servicios/actualidad/convocatorias-abiertas/676-iii-congreso-internacional-nosotros-proponemos-ciudadania-sostenibilidad-e-innovacion-en-la-educacion-ciudad-real-17-20-abril-de-2024">
                            {t("leer_mas")}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-enlinea">
            <h3 className="secciones-noticias" id="interes">{t("informacion_linea")}</h3>
            <nav>
            <div className="noticias-interes">
                <Link href="/servicios/actualidad/boletines" className="enlaces-interes">
                    {t("boletin")}
                </Link>
            </div>
            <div className="noticias-interes">
                <Link href="/servicios/actualidad/congresos" className="enlaces-interes">
                    {t("congresos")}
                </Link>
            </div>
            <div className="noticias-interes">
                <Link href="/servicios/actualidad/kiosko-digital" className="enlaces-interes">
                    {t("uco_medios")}
                </Link>
            </div>
            <div className="noticias-interes">
                <Link href="/servicios/actualidad/uco-imagen-corporativa" className="enlaces-interes">
                    {t("imagen_corporativa")}
                </Link>
            </div>
            <div className="noticias-interes">
                <Link href="/servicios/actualidad/enlaces" className="enlaces-interes">
                    {t("enlaces")}
                </Link>
            </div>
            <div className="noticias-interes">
                <Link href="/servicios/actualidad/suscripciones" className="enlaces-interes">
                    {t("suscribete")}
                </Link>
            </div>
            <div className="noticias-interes">
                <Link href="https://www.uco.es/servicios/comunicacion/" target="_blank" className="enlaces-interes">
                    {t("hemeroteca")}
                </Link>
            </div>
            <div className="noticias-interes">
                <Link href="https://photos.google.com/u/1/albums" target="_blank" className="enlaces-interes">
                    {t("galeria_imagenes")}
                </Link>
            </div>
            </nav>
        </div>
            
        <div className="container-enlinea">
            <h3 className="secciones-noticias" id="interes">{t("interes")}</h3>
            <nav>
            <div className="noticias-interes">
                <Link href="/servicios/actualidad/carta-de-servicios" className="enlaces-interes">
                    {t("carta_servicios")}
                </Link>
            </div>
            <div className="noticias-interes">
                <Link href="/servicios/actualidad/quienes-somos" className="enlaces-interes">
                    {t("quienes_somos")}
                </Link>
            </div>
            <div className="noticias-interes" style={{ height: '48px' }}>
                <Link href="/servicios/actualidad/buzon-de-quejas-sugerencias-felicitaciones" className="enlaces-interes">
                    {t("buzon_quejas")}
                </Link>
            </div>
            <div className="noticias-interes">
                <Link href="/servicios/actualidad/consultas-sobre-accesibilidad" className="enlaces-interes">
                    {t("consultas_accesibilidad")}
                </Link>
            </div>
            </nav>
        </div>
        
        <Link href="#">
            
            <Image src="/images/como-llegar.jpg" alt="Imagen de como llegar" width={282} height={100} />
            
        </Link>
    </div>
  );
}