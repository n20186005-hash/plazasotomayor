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
  city: 'Valparaíso',
  region: 'Región de Valparaíso',
  country: 'Chile',
  address: 'Sotomayor, Valparaíso, Chile',
  plusCode: 'X96C+HF Valparaíso, Chile',
  latitude: -33.038443,
  longitude: -71.628552,
  rating: 4.5,
  reviewCount: 19296,
  access: 'Espacio público de acceso continuo',
  admission: 'Acceso gratuito a la plaza y al monumento exterior. Paseos en lancha, museos y otros servicios del entorno se pagan por separado.',
  recommendedStay: '45–90 min para la plaza y el frente portuario; 2–3 h si sumas Muelle Prat y un paseo por los cerros.',
  bestTime: 'Mañana para recorrer con calma o última parte de la tarde para combinar la plaza con la luz sobre la bahía. Entre primavera y comienzos de otoño suele haber condiciones más amables para caminar al aire libre.',
  mapsUrl: 'https://maps.app.goo.gl/1MuemWaALd55TzfKA',
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5944.64625949658!2d-71.6313304225405!3d-33.038557676539774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689e0dbcb0f4a43%3A0x581ceec022d3e9ea!2z57Si5omY6ams57qm5bCU5bm_5Zy6!5e1!3m2!1ses!2scl!4v1789008907836!5m2!1ses!2scl&hl=es-CL',
  nearby: [
    {
      name: 'Muelle Prat',
      type: 'Borde costero',
      detail: 'La prolongación natural de la visita: embarcaciones de paseo, vistas del puerto y ambiente marítimo.'
    },
    {
      name: 'Ascensor El Peral',
      type: 'Ascensor patrimonial',
      detail: 'Conecta el plan con el sector de Paseo Yugoslavo y facilita subir hacia los cerros históricos.'
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
  food: [
    {
      name: 'Melbourne Café',
      kind: 'Café · desayuno · brunch',
      address: 'Sotomayor 33',
      note: 'Una parada práctica frente a la plaza para café, paninis y algo dulce.'
    },
    {
      name: 'PaniniCafe Sotomayor',
      kind: 'Café · paninis',
      address: 'Sotomayor 55',
      note: 'Opción rápida para desayuno, almuerzo liviano o una pausa durante el recorrido.'
    },
    {
      name: 'Puerto Rolls',
      kind: 'Sushi · bar',
      address: 'Cochrane / Sotomayor 558',
      note: 'Alternativa informal a pasos del Barrio Puerto para almuerzo o cena.'
    }
  ] satisfies FoodPlace[],
  photos: [
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Plaza_Sotomayor%2C_Valpara%C3%ADso.jpg/1280px-Plaza_Sotomayor%2C_Valpara%C3%ADso.jpg',
      alt: 'Vista de Plaza Sotomayor en Valparaíso con el monumento y edificios patrimoniales',
      caption: 'La plaza como antesala del puerto.',
      author: 'Rjcastillo',
      license: 'CC BY-SA 4.0',
      source: 'https://commons.wikimedia.org/wiki/File:Plaza_Sotomayor,_Valpara%C3%ADso.jpg'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Monumento_a_los_h%C3%A9roes_de_Iquique%2C_Valpara%C3%ADso%2C_Chile1.jpg/1280px-Monumento_a_los_h%C3%A9roes_de_Iquique%2C_Valpara%C3%ADso%2C_Chile1.jpg',
      alt: 'Monumento a los Héroes de Iquique en Plaza Sotomayor',
      caption: 'El Monumento a los Héroes de Iquique, hito central del espacio cívico.',
      author: 'Diego Delso',
      license: 'CC BY-SA 3.0',
      source: 'https://commons.wikimedia.org/wiki/File:Monumento_a_los_h%C3%A9roes_de_Iquique,_Valpara%C3%ADso,_Chile1.jpg'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Edificio_Armada_de_Chile_en_Valpara%C3%ADso.JPG',
      alt: 'Edificio de la Armada de Chile frente a Plaza Sotomayor',
      caption: 'La antigua Intendencia, hoy sede naval, define el remate monumental de la plaza.',
      author: 'KenPugh',
      license: 'CC BY-SA 3.0',
      source: 'https://commons.wikimedia.org/wiki/File:Edificio_Armada_de_Chile_en_Valpara%C3%ADso.JPG'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Muelle_Prat%2C_Valpara%C3%ADso.jpg/960px-Muelle_Prat%2C_Valpara%C3%ADso.jpg',
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
    answer: 'Sí. La plaza es un espacio público y recorrer el exterior del Monumento a los Héroes de Iquique no requiere entrada. Actividades del entorno, como paseos en lancha o museos, pueden tener tarifas propias.'
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
    answer: 'Sí. En el sector Puerto existen estacionamientos privados y estacionamientos asociados a edificios cercanos. Como las condiciones, tarifas y cupos cambian, conviene revisar disponibilidad al llegar y priorizar transporte público en días de alta concurrencia.'
  },
  {
    question: '¿Qué más se puede visitar caminando desde la plaza?',
    answer: 'Muelle Prat, el Barrio Puerto, el Ascensor El Peral y el Paseo Yugoslavo forman una secuencia muy natural. Desde allí puedes continuar hacia el área histórica de los cerros Alegre y Concepción.'
  }
] as const;
