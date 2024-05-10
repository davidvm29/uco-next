/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/ff' : '',
  assetPrefix: isProd ? '/ff/' : '',
  images: {
    // Habilitar optimizaciones de imágenes automáticas
    loader: 'default',
    // Habilitar la optimización progresiva (escaneo de línea por línea) de imágenes JPEG
    formats: ['image/jpeg', 'image/png'],
    // Habilitar la carga diferida de imágenes
    // lazy: true,
    // Habilitar la priorización automática de formatos de imagen modernos (WebP) en navegadores compatibles
    // preferWebp: true,
    // Habilitar la compresión de imágenes en tiempo de compilación (se requiere el paquete sharp)
    // optimizeImages: true,
    // Habilitar la adaptación de imágenes de acuerdo con el tamaño del diseño del componente
    // deviceSizes: [320, 420, 768, 1024, 1200],
    // Habilitar la generación de imágenes de varias resoluciones para soporte de pantallas de alta densidad
    // iconSizes: [],
    // Habilitar la configuración de dominios para servir imágenes de origen cruzado
    // domains: ['example.com', 'cdn.example.com'],
    // Habilitar la configuración de rutas de imágenes personalizadas
    // path: 'https://example.com/myImage/',
  },
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}
 
module.exports = nextConfig