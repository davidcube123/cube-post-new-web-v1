import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', 'trabajos/', 'servicios/', 'espacios/', 'equipo/', 'contacto/', 'privacy-policy/', 'condiciones-generales-de-venta/'].map(path => ({ url: `https://cube-post.com/${path}` }));
}
