import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export const Nav = () => {
  const {t} = useTranslation(['common'])
  const { i18n } = useTranslation();
  const idioma = i18n.options.lng;
    return (
        <nav className="row" id="menu-principal">
          <div id="menu-button">Menú</div>
            <ul className="open">
              <li className="has-sub"><a href="#">{t("conoce_uco")}</a>
                <ul style={{ display: 'block' }}>
                    <li><Link href={`/${idioma}/Historia`}>{t("historia")}</Link></li>
                  <li className="has-sub"><a href="">{t("organizacion")}</a>
                    <ul style={{ display: 'block' }}>
                      <li><a href="organizacion-institucional-equipo-gobierno.html">{t("gobierno")}</a></li>
                      <li><a href="organizacion/consejogobierno">{t("consejo_gobierno")}</a></li>
                      <li><a href="organizacion/secretariageneral/claustro-universidad">{t("claustro")}</a></li>
                      <li><a href="organizacion/secretariageneral">{t("secretaria_general")}</a></li>
                      <li><a href="gerencia">{t("gerencia")}</a></li>
                      <li><a href="servicios/asesoriajuridica">{t("asesoria_juridica")}</a></li>
                      <li><a href="organizacion/defensor_universitario">{t("defensoria_universitaria")}</a></li>
                      <li><a href="https://consejosocialuco.es/" target="_blank" rel="noopener noreferrer">{t("consejo_social")}</a></li>
                    </ul>
                  </li>
                  <li><a href="gestion_administrativa.html">{t("gestion_administrativa")}</a></li>
                  <li><a href="organizacion/secretariageneral/normativa">{t("normativa")}</a></li>
                  <li className="has-sub"><a href="#">{t("centros_departamentos")}</a>
                    <ul style={{ display: 'block' }}>
                      <li><a href="organiza/centros/veterinaria/">{t("vet")}</a></li>
                      <li><a href="organiza/centros/etsiam/">{t("agronomia_montes")}</a></li>
                      <li><a href="organiza/centros/medicinayenfermeria/">{t("medicina_enfermeria")}</a></li>
                      <li><a href="organiza/centros/ciencias/">{t("ciencias")}</a></li>
                      <li><a href="organiza/centros/filosofia/">{t("filosofia_letras")}</a></li>
                      <li><a href="organiza/centros/derecho/">{t("derecho_ciencias")}</a></li>
                      <li><a href="organiza/centros/educacion/">{t("educacion_psicologia")}</a></li>
                      <li><a href="organiza/centros/eps/">{t("politecnica_cordoba")}</a></li>
                      <li><a href="organiza/centros/rlaborales/">{t("ciencias_trabajo")}</a></li>
                      <li><a href="organiza/centros/EPSBelmez/">{t("politecnica_belmez")}</a></li>
                      <li><a href="estudios/idep/">{t("posgrado")}</a></li>
                      <li><a href="http://www.uco.es/sagradocorazon/" target="_blank" rel="noopener noreferrer">{t("magisterio")}</a></li>
                      <li><a href="https://www.uco.es/organiza/centros/fisidec/" target="_blank" rel="noopener noreferrer">{t("fisidec")}</a></li>
                      <li><a href="catedrasyaulas/intergeneracional/" target="_blank">{t("intergeneracional")}</a></li>
                      <li><a href="departamentos.html" target="_blank">{t("departamentos")}</a></li>
                      <li><a href="informacion/campus_rabanales/" target="_blank">{t("rabanales")}</a></li>
                    </ul>
                  </li>
                  <li><a href="servicios/sepa//es/biodiversidad#tab">{t("biodiversidad_rabanales")}</a></li>
                  <li><a href="internacional/movilidad/internacional-factsandfigures">{t("datos_cifras")}</a></li>
                  <li><a href="ucomapa.html">{t("como_llegar")}</a></li>
                </ul>
              </li>
              <li className="has-sub"><a href="#">{t("info_estudiantes")}</a>
                <ul style={{ display: 'block' }}>
                  <li><a href="pie/">{t("portal_estudiantes")}</a></li>
                  <li><a href="docencia/grados/">{t("grados")}</a></li>
                  <li><a href="estudios/idep/">{t("master_doctorado")}</a></li>
                  <li><a href="estudios/idep/menu-formacion-permanente">{t("titulos_propios")}</a></li>
                  <li><a href="https://www.uco.es/organiza/centros/cefem/">{t("formacion_empleabilidad")}</a></li>
                  <li><a href="https://www.uco.es/transferencia/ucoprem2">{t("practicas_empleo")}</a></li>
                  <li><a href="servicios/sega/">{t("servicios_academicos")}</a></li>
                  <li><a href="catedras_y_aulas.html">{t("catedras_aulas_fundaciones")}</a></li>
                  <li><a href="https://ucodigital.uco.es/">{t("ucodigital")}</a></li>
                  <li><a href="https://www.campusandaluzvirtual.es/">{t("campus_andaluz_virtual")}</a></li>
                  <li><a href="https://www.juntadeandalucia.es/economiainnovacionyciencia/sguit/?q=grados">Preinscripción</a></li>
                  <li><a href="internacional/extranjeros">{t("alumnos_internacionales")}</a></li>
                  <li><a href="servicios/informatica/tesis">{t("etesis")}</a></li>
                </ul>
              </li>
              <li className="has-sub"><a href="#">{t("docencia")}</a>
                <ul style={{ display: 'block' }}>
                  <li><a href="gestion/coordinacion_docencia">{t("unidad_inspeccion")}</a></li>
                  <li><a href="organizacion/calidad/innovacioneducativa">{t("formacion_docente")}</a></li>
                  <li><a href="http://www.uco.es/poling/">{t("politica")}</a></li>
                  <li><a href="organizacion/calidad">{t("calidad")}</a></li>
                  <li><a href="http://moodle.uco.es/moodlemap/">{t("moodle")}</a></li>
                  <li><a href="gestion/sigma" target="_blank">{t("sigma_campus_docente")}</a></li>
                  <li><a href="eguiado/" target="_blank">{t("e_guiado")}</a></li>
                  <li><a href="https://www.gestion.uco.es/ucomunidad" target="_blank" rel="noopener noreferrer">{t("ucomunidad")}</a></li>
                  <li><a href="https://www.uco.es/sra">{t("reserva_aulas")}</a></li>
                </ul>
              </li>
              <li className="has-sub"><a href="#">{t("investigacion")}</a>
                <ul style={{ display: 'block' }}>
                  <li><a href="investigacion/portal/">{t("portal_investigacion")}</a></li>
                  <li><a href="internacional/proyectosinternacionales">{t("proyectos_internacionales")}</a></li>
                  <li><a href="investigacion/portal/scai">{t("servicio_central")}</a></li>
                  <li><a href="investigacion/portal/saex">{t("animales_experimentacion")}</a></li>
                  <li><a href="investigacion/ucci">{t("cultura_cientifica")}</a></li>
                  <li><a href="grupos-investigacion.html">{t("grupos_investigacion")}</a></li>
                  <li><a href="investigacion/portal/HRS4R">{t("hrs4r")}</a></li>
                </ul>
              </li>
              <li className="has-sub"><a href="#">{t("transferencia")}</a>
                <ul style={{ display: 'block' }}>
                  <li><a href="https://www.uco.es/transferencia">{t("portal_transferencia")}</a></li>
                  <li><a href="https://www.uco.es/transferencia/plan-propio">{t("plan_propio_galileo")}</a></li>
                  <li className="has-sub"><a href="#">{t("oferta")}            </a><ul style={{ display: 'block' }}>
                      <li><a href="https://www.uco.es/transferencia/ofertas-tecnologicas">{t("documento")}</a></li>
                    </ul>
                  </li>
                  <li className="has-sub"><a href="#">{t("colaboracion_empresas")}</a>
                    <ul style={{display: 'block'}}>
                      <li><a href="https://www.uco.es/transferencia/colaboracion-con-empresas/contratos-universidad-empresa">{t("contratos_universidad_empresa")}</a></li>
                      <li><a href="https://www.uco.es/transferencia/colaboracion-con-empresas/proyectos-colaborativos">{t("proyectos_colaborativos")}</a></li>
                    </ul>
                  </li>
                  <li><a href="https://www.uco.es/transferencia/catedras">{t("catedras_universidad_empresas")}</a></li>
                  <li className="has-sub"><a href="#">{t("quien_quien_transferencia")}            </a><ul style={{ display: 'block' }}>
                      <li><a href="transferencia/quien-es-quien-en-las-tareas-de-transferencia-de-la-uco">{t("entrevistas_grupos_investigacion")}</a></li>
                      <li><a href="transferencia/videos-investigadores-biotecnologia">{t("videos_investigadores_biotecnologia")}</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-sub"><a href="#">{t("servicios_vida_universitaria")}</a>
                <ul style={{display: 'block'}}>
                  <li><a href="https://www.ucoshop.es/">{t("tienda_uco_online")}</a></li>
                  <li><a href="servicios/alojamiento/">{t("alojamiento")}</a></li>
                  <li><a href="gestion/archivoyregistro">{t("archivo_registro_administracion")}</a></li>
                  <li><a href="vidauniversitaria/cooperacion/">{t("area_cooperacion_solidaridad")}</a></li>
                  <li><a href="gestion/gestioneconomica">{t("gestion_economica")}</a></li>
                  <li><a href="servicios/sad/">{t("area_inclusion")}</a></li>
                  <li><a href="servicios/biblioteca/">{t("biblioteca")}</a></li>
                  <li><a href="organizacion/calidad/">{t("calidad")}</a></li>
                  <li><a href="gestion/contratacion">{t("contratacion_patrimonio")}</a></li>
                  <li><a href="cultura/">{t("ucocultura")}</a></li>
                  <li><a href="https://www.uco.es/deportes">{t("deporte")}</a></li>
                  <li><a href="servicios/actualidad/">{t("gabinete_comunicacion")}</a></li>
                  <li><a href="http://www.uco.es/idiomas/">{t("ucoidiomas")}</a></li>
                  <li><a href="vidauniversitaria/igualdad/">{t("igualdad")}</a></li>
                  <li><a href="gestion/contratacion/ofertas">{t("ofertas_comunidad_universitaria")}</a></li>
                  <li><a href="informacion_webs.html">{t("otras_webs_blogs")}</a></li>
                  <li><a href="https://www.uco.es/transferencia/ucoprem2">{t("practicas_empleo_2")}</a></li>
                  <li><a href="https://www.uco.es/servicios/prevencion/es/inicio-promocion-salud">{t("promocion_salud")}</a></li>
                  <li><a href="organizacion/protocolo/">{t("protocolo")}</a></li>
                  <li><a href="http://www.uco.es/servicios/ucopress">{t("publicaciones")}</a></li>
                  <li><a href="gestion/virtual">{t("secretaria_virtual")}</a></li>
                  <li><a href="gestion/controlinterno">{t("control_interno")}</a></li>
                  <li><a href="servicios/informatica/">{t("informatica")}</a></li>
                  <li className="has-sub"><a href="#">{t("prevencion_proteccion")}</a>
                  <ul style={{display: 'block'}}>
                  <li><a href="servicios/prevencion/">{t("prevencion_riesgos_proteccion_radiologica")}</a></li>
                  <li><a href="servicios/sepa/">{t("proteccion_ambiental")}</a></li>
                  </ul>
                  </li>
                  <li><a href="http://ucodigital.uco.es/">{t("ucodigital")}</a></li>
                  <li><a href="gestion/gestioneconomica/ucompras-uco">{t("ucompras")}</a></li>
                  <li><a href="http://uco.es/uacds">{t("apoyo_tecnologico")} </a></li>
                  <li><a href="https://www.uco.es/servicios/prevencion/es/inicio-unap">{t("atencion_psicologica")}</a></li>
                  <li><a href="servicios/serviciosgenerales/">{t("servicios_generales")}</a></li>
                  <li><a href="gestion/unidadtecnica">{t("unidad_tecnica")}</a></li>
                </ul>
              </li>
              <li className="has-sub"><a href="#">{t("internacional")}</a>
                <ul style={{display: 'block'}}>
                  <li><a href="internacional/movilidad/">{t("programas")}</a></li>
                  <li><a href="internacional/proyectosinternacionales">{t("proyectos_internacionales")}</a></li>
                  <li className="has-sub"><a href="#">{t("info_extranjeros")}          </a><ul style={{display: 'block'}}>
                    <li><a href="internacional/extranjeros">{t("alumnos_internacionales")}</a></li>
                  </ul>
                  </li>
                  <li><a href="http://uco.es/internacional/convenios/es/">{t("convenios_internacionales")}</a></li>
                </ul>
              </li>
            </ul>
          </nav>
      
    );
};








