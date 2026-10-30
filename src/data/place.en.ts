// English-language content for Plaza Sotomayor. Mirrors the structure of
// src/data/place.ts. Proper nouns (names, addresses) are kept as in the
// Spanish source; descriptive copy is translated.

export type NearbyPlaceEn = {
  name: string;
  type: string;
  detail: string;
};

export type FoodPlaceEn = {
  name: string;
  kind: string;
  address: string;
  note: string;
};

export const nearbyEn: NearbyPlaceEn[] = [
  {
    name: 'Muelle Prat',
    type: 'Waterfront',
    detail: 'Waterfront opposite the square; check construction access and enquire separately about any boat trip.'
  },
  {
    name: 'Ascensor El Peral',
    type: 'Heritage funicular',
    detail: 'Links the flat city with Paseo Yugoslavo; check current operation before relying on this funicular.'
  },
  {
    name: 'Paseo Yugoslavo',
    type: 'Urban viewpoint',
    detail: 'A heritage terrace above the city plan, with views over the port and access to the Baburizza Museum.'
  },
  {
    name: 'Barrio Puerto',
    type: 'Historic district',
    detail: 'Traditional streets, commerce and port heritage to keep exploring on foot from the plaza.'
  }
];

export const foodEn: FoodPlaceEn[] = [];

export const faqEn = [
  {
    question: 'Is entry to Plaza Sotomayor free?',
    answer: 'The plaza is a public space; no general admission ticket for its exterior has been found. Advertised tour prices are not square admission charges. Crypt visits, museums and boat trips have separate conditions; also check construction restrictions.'
  },
  {
    question: 'How much time should I plan for?',
    answer: 'To see the plaza, the monument and walk toward the waterfront, plan between 45 and 90 minutes. If you continue to Muelle Prat, Ascensor El Peral and the hill promenades, allow 2 to 3 hours.'
  },
  {
    question: 'What is the easiest way to get there by public transport?',
    answer: 'Estación Puerto station is right next to the plaza. Urban buses and trolleybuses also run through the plan of Valparaíso. From the bus terminal, a taxi or car usually takes about 10 to 15 minutes depending on traffic.'
  },
  {
    question: 'Is there parking nearby?',
    answer: 'No specific parking operator, price or available spaces have been verified. Check directly with an operator and review construction restrictions before driving to the area.'
  },
  {
    question: 'What else can I visit on foot from the plaza?',
    answer: 'Muelle Prat, Barrio Puerto, Ascensor El Peral and Paseo Yugoslavo form a very natural sequence. From there you can continue toward the historic hills of Alegre and Concepción.'
  },
  {
    question: 'What is the Monumento a los Héroes de Iquique and what is its history?',
    answer: 'It is the central landmark of Plaza Sotomayor, inaugurated in 1886 to honor the sailors who fell in the naval battles of Iquique and Punta Gruesa during the War of the Pacific. A commemorative crypt lies beneath the monument, and the ensemble is used for civic and naval ceremonies in Valparaíso.'
  },
  {
    question: 'What other plazas or nearby plazas are there in Valparaíso?',
    answer: 'Valparaíso has several heritage plazas. Besides Plaza Sotomayor on the plan of Barrio Puerto, Plaza de la Victoria, Plaza Aníbal Pinto and Plaza O´Higgins are separate places elsewhere in the city. This guide focuses on Sotomayor and its waterfront.'
  },
  {
    question: 'Where is Calle Sotomayor and what is around it?',
    answer: 'Calle Sotomayor runs along the hill side of Plaza Sotomayor, facing the former Intendencia (today the headquarters of the Armada de Chile). Nearby are cafés, Barrio Puerto businesses and the access to the funiculars that climb the historic hills.'
  }
];
