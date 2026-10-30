export type NearbyPlace = {
  name: string;
  type: string;
  detail: string;
  href?: string;
};

export type FoodPlace = {
  name: string;
  kind: string;
  address: string;
  note: string;
};

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  author: string;
  license: string;
  source: string;
};

export const place = {
  name: 'Plaza Sotomayor',
  fullName: 'Plaza Sotomayor',
  shortName: 'Plaza Sotomayor',
  alternateNames: ['Sotomayor Square', 'Sotomayor Square, Valparaíso', 'Plaza Sotomayor de Valparaíso'],
  city: 'Valparaíso',
  region: 'Región de Valparaíso',
  country: 'Chile',
  countryCode: 'CL',
  address: 'Sotomayor, Valparaíso, Chile',
  latitude: -33.0385622,
  longitude: -71.6287555,
  heroImage: '/images/plaza-sotomayor-panorama.jpg',
  govtTourismUrl: 'https://chile.travel/atractivos/plaza-sotomayor/',
  municipalityUrl: 'https://municipalidaddevalparaiso.cl/',
  wikipediaUrl: 'https://es.wikipedia.org/wiki/Plaza_Sotomayor',
  rating: 4.5,
  checkedDate: '2026-10-29',
  reviewCount: 19359,
  access: 'Maps muestra 24 horas; no garantiza acceso durante obras o actos',
  admission: 'La plaza es un espacio público; no se ha encontrado una entrada general para recorrer su exterior. Los anuncios de tours no son una tarifa de acceso a la plaza. Cripta, paseos y museos tienen condiciones separadas.',
  recommendedStay: '45–90 min para la plaza y el frente portuario; 2–3 h si sumas Muelle Prat y un paseo por los cerros.',
  bestTime: 'Mañana para recorrer con calma o última parte de la tarde para combinar la plaza con la luz sobre la bahía. Comprueba el tiempo y los accesos por obras antes de salir.',
  mapsUrl: 'https://maps.app.goo.gl/1MuemWaALd55TzfKA',
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5944.64625949658!2d-71.6313304225405!3d-33.038557676539774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e0dbcb0f4a43%3A0x581ceec022d3e9ea!2z57Si5omY6ams57qm5bCU5bm_5Zy6!5e1!3m2!1ses!2scl!4v1789008907836!5m2!1ses!2scl&hl=es-CL',
  nearby: [
    {
      name: 'Muelle Prat',
      type: 'Borde costero',
      detail: 'Borde portuario frente a la plaza; comprueba los accesos por obras y consulta por separado cualquier paseo en lancha.'
    },
    {
      name: 'Ascensor El Peral',
      type: 'Ascensor patrimonial',
      detail: 'Vincula el plan con Paseo Yugoslavo; comprueba su operación actual antes de depender de este ascensor.'
    },
    {
      name: 'Paseo Yugoslavo',
      type: 'Mirador urbano',
      detail: 'Una terraza patrimonial sobre el plan de la ciudad, con vistas hacia el puerto y acceso al Museo Baburizza.'
    },
    {
      name: 'Barrio Puerto',
      type: 'Barrio histórico',
      detail: 'Calles, comercio tradicional y patrimonio portuario para seguir caminando desde la plaza.'
    }
  ] satisfies NearbyPlace[],
  food: [] satisfies FoodPlace[],
  photos: [
    {
      src: '/images/plaza-sotomayor-panorama.jpg',
      alt: 'Plaza Sotomayor: vista principal en Valparaíso, Chile, con el monumento y los edificios patrimoniales',
      caption: 'La plaza como antesala del puerto.',
      author: 'Rjcastillo',
      license: 'CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Plaza_Sotomayor,_Valpara%C3%ADso.jpg'
    },
    {
      src: '/images/monumento-heroes-iquique.jpg',
      alt: 'Monumento a los Héroes de Iquique en Plaza Sotomayor',
      caption: 'El Monumento a los Héroes de Iquique, hito central del espacio cívico.',
      author: 'Diego Delso',
      license: 'CC BY-SA 3.0',
      source: 'https://commons.wikimedia.org/wiki/File:Monumento_a_los_h%C3%A9roes_de_Iquique,_Valpara%C3%ADso,_Chile1.jpg'
    },
    {
      src: '/images/edificio-armada.jpg',
      alt: 'Edificio de la Armada de Chile frente a Plaza Sotomayor',
      caption: 'La antigua Intendencia, hoy sede naval, define el remate monumental de la plaza.',
      author: 'KenPugh',
      license: 'CC BY-SA 3.0',
      source: 'https://commons.wikimedia.org/wiki/File:Edificio_Armada_de_Chile_en_Valpara%C3%ADso.JPG'
    },
    {
      src: '/images/muelle-prat.jpg',
      alt: 'Muelle Prat y embarcaciones en el puerto de Valparaíso',
      caption: 'Muelle Prat mantiene la plaza conectada visual y físicamente con la bahía.',
      author: 'Techicortes',
      license: 'CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Muelle_Prat,_Valpara%C3%ADso.jpg'
    }
  ] satisfies Photo[]
} as const;

export const faq = [
  {
    question: '¿La entrada a Plaza Sotomayor es gratuita?',
    answer: 'La plaza es un espacio público; no se ha encontrado una entrada general para recorrer su exterior. Los precios de tours anunciados no son entradas a la plaza. La cripta, los museos y los paseos tienen condiciones propias; revisa también las restricciones por obras.'
  },
  {
    question: '¿Cuánto tiempo conviene reservar?',
    answer: 'Para observar la plaza, el monumento y caminar hacia el borde portuario, calcula entre 45 y 90 minutos. Si continúas a Muelle Prat, Ascensor El Peral y los paseos de los cerros, reserva entre 2 y 3 horas.'
  },
  {
    question: '¿Cuál es la forma más fácil de llegar en transporte público?',
    answer: 'La Estación Puerto queda en el sector inmediato a la plaza. También circulan buses urbanos y trolebuses por el plan de Valparaíso. Desde el terminal de buses, el trayecto en taxi o vehículo suele tomar alrededor de 10 a 15 minutos según el tránsito.'
  },
  {
    question: '¿Hay estacionamiento cerca?',
    answer: 'No se ha verificado un estacionamiento concreto ni sus tarifas o cupos. Consulta al operador y revisa las restricciones por obras antes de conducir hacia el sector.'
  },
  {
    question: '¿Qué más se puede visitar caminando desde la plaza?',
    answer: 'Muelle Prat, el Barrio Puerto, el Ascensor El Peral y el Paseo Yugoslavo forman una secuencia muy natural. Desde allí puedes continuar hacia el área histórica de los cerros Alegre y Concepción.'
  },
  {
    question: '¿Qué es el Monumento a los Héroes de Iquique y cuál es su historia?',
    answer: 'Es el hito central de Plaza Sotomayor, inaugurado en 1886 para honrar a los marinos caídos en los combates navales de Iquique y Punta Gruesa durante la Guerra del Pacífico. Bajo el monumento hay una cripta conmemorativa y el conjunto se usa para ceremonias cívicas y navales de Valparaíso.'
  },
  {
    question: '¿Cuáles son otras plazas o plazas cercanas en Valparaíso?',
    answer: 'Valparaíso tiene varias plazas patrimoniales. Además de Plaza Sotomayor en el plan del Barrio Puerto, destacan la Plaza de la Victoria, la Plaza Aníbal Pinto y la Plaza O´Higgins en otros sectores de la ciudad. Cada una corresponde a un lugar distinto; esta guía se centra en Sotomayor y su frente portuario.'
  },
  {
    question: '¿Dónde queda Calle Sotomayor y qué hay cerca?',
    answer: 'Calle Sotomayor bordea el lado del cerro de Plaza Sotomayor, frente a la antigua Intendencia (hoy sede de la Armada de Chile). En sus alrededores hay cafés, locales del Barrio Puerto y el acceso a los ascensores que suben a los cerros históricos.'
  }
] as const;

export type Source = {
  label: string;
  href: string;
  note: string;
};

export const sources = [
  { label: 'Municipalidad de Valparaíso — obras anunciadas', href: 'https://municipalidaddevalparaiso.cl/que-pasara-con-plaza-sotomayor-obras-de-renovacion-comenzaran-en-noviembre/', note: 'Anuncio de 19 de octubre de 2026: primera etapa prevista desde el 1 de noviembre, 150 días; cierres acotados de bandejones centrales y sin nuevos cortes vehiculares en noviembre y diciembre. Consulta revisada el 29 de octubre de 2026.' },
  {
    label: 'Consejo de Monumentos Nacionales — Plaza Sotomayor',
    href: 'https://www.monumentos.gob.cl/monumentos/zonas-tipicas/plaza-sotomayor-de-valparaiso-incluye-los-edificios-que-la-encierran',
    note: 'Declaratoria oficial de Plaza Sotomayor como Zona Típica y descripción del conjunto protegido.'
  },
  {
    label: 'Consejo de Monumentos Nacionales — Edificio de la Intendencia',
    href: 'https://www.monumentos.gob.cl/monumentos/monumentos-historicos/edificio-de-la-intendencia-de-valparaiso',
    note: 'Ficha del inmueble patrimonial que remata la plaza, hoy sede de la Armada de Chile.'
  },
  {
    label: 'Chile Travel — Portal oficial de turismo de Chile',
    href: 'https://chile.travel/atractivos/plaza-sotomayor/',
    note: 'Ficha turística oficial con orientación de acceso y contexto del destino.'
  },
  {
    label: 'Armada de Chile — Ruta Patrimonial Naval',
    href: 'https://www.armada.cl/comunicados/ruta-patrimonial-naval',
    note: 'Información institucional sobre el patrimonio naval asociado al monumento y al sector puerto.'
  },
  {
    label: 'Google Maps — Ficha del lugar',
    href: 'https://maps.app.goo.gl/1MuemWaALd55TzfKA',
    note: 'Ubicación, reseñas y coordenadas publicadas para Plaza Sotomayor.'
  },
  {
    label: 'Wikimedia Commons — Fotografía con licencia abierta',
    href: 'https://commons.wikimedia.org/wiki/File:Plaza_Sotomayor,_Valpara%C3%ADso.jpg',
    note: 'Repositorio y licencia de la imagen principal usada en esta guía.'
  }
] satisfies Source[];

export const breadcrumb = [
  { name: 'Plaza Sotomayor', href: '#inicio' },
  { name: 'Valparaíso', href: '#acerca' },
  { name: 'Región de Valparaíso', href: '#historia' },
  { name: 'Chile', href: '#mapa' }
] as const;

export const imageRightsNotice =
  'La propiedad y los derechos de autor de todas las imágenes mostradas pertenecen a sus fotógrafos originales. All images displayed on this website remain the property and copyright of their original photographers.';
