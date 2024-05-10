import { useRouter } from 'next/router';
import Link from 'next/link';

const LanguageSwitchLink = ({ locale }) => {
  const router = useRouter();

  // Función para construir la nueva URL con el idioma deseado
  const createLocalePath = (newLocale) => {
    let basePath = router.asPath;

    // Intenta remover el prefijo de idioma existente si es que está en la base de la ruta
  const pathParts = basePath.split('/');
  if (['en', 'es'].includes(pathParts[1])) {
    pathParts.splice(1, 1);  // Elimina el segmento del idioma
    basePath = pathParts.join('/');
  }

  // Añadir el nuevo prefijo de idioma
  const newPath = `/${newLocale}${basePath}`;

  return newPath;
};

  const handleLanguageSwitch = (event) => {
    event.preventDefault(); // Previene la navegación del Link
    const newPath = createLocalePath(locale);
    router.push(newPath); // Usa router.push para cambiar la ruta
  };

  return (
    <Link href={createLocalePath(locale)} passHref>
      <button onClick={handleLanguageSwitch}
        style={{
          fontSize: '12px',
          fontWeight: '700',
          lineHeight: '32px',
          textDecoration: 'none',
          textAlign: 'right',
          textTransform: 'uppercase',
          height: 'auto',
          width: 'auto',
          display: 'inline-block',
          padding: '0 5px',
          fontFamily: 'Montserrat, sans-serif',
          cursor: 'pointer',
          color: '#FFFFFF',
          backgroundColor: '#221C35',
          border: 'none',
        }}
      >
        {locale.toUpperCase()}
      </button>
    </Link>
  )
}

export default LanguageSwitchLink;
