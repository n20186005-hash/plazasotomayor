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
    detail: 'The natural continuation of the visit: boat tours, harbor views and the maritime atmosphere of Valparaíso.'
  },
  {
    name: 'Ascensor El Peral',
    type: 'Heritage funicular',
    detail: 'Connects the flat city (plan) with the Paseo Yugoslavo sector and makes it easy to climb toward the historic hills.'
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

export const foodEn: FoodPlaceEn[] = [
  {
    name: 'Melbourne Café',
    kind: 'Café · breakfast · brunch',
    address: 'Sotomayor 33',
    note: 'A practical stop facing the plaza for coffee, paninis and something sweet.'
  },
  {
    name: 'PaniniCafe Sotomayor',
    kind: 'Café · paninis',
    address: 'Sotomayor 55',
    note: 'A quick option for breakfast, a light lunch or a break during the walk.'
  },
  {
    name: 'Puerto Rolls',
    kind: 'Sushi · bar',
    address: 'Cochrane / Sotomayor 558',
    note: 'An informal alternative a few steps from Barrio Puerto for lunch or dinner.'
  }
];

export const faqEn = [
  {
    question: 'Is entry to Plaza Sotomayor free?',
    answer: 'Yes. The plaza is a public space and visiting the exterior of the Monumento a los Héroes de Iquique does not require a ticket. Activities around it, such as boat tours or museums, may have their own fees.'
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
    answer: 'Yes. The Puerto sector has private parking lots and spaces associated with nearby buildings. Since conditions, rates and availability change, it is best to check on arrival and prefer public transport on busy days.'
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
    answer: 'Valparaíso has several heritage plazas. Besides Plaza Sotomayor on the plan of Barrio Puerto, the Plaza de la Victoria, Plaza Aníbal Pinto and Plaza O´Higgins stand out in the hills. Plaza Sotomayor is the main one thanks to its waterfront setting and the Monumento a los Héroes de Iquique.'
  },
  {
    question: 'Where is Calle Sotomayor and what is around it?',
    answer: 'Calle Sotomayor runs along the hill side of Plaza Sotomayor, facing the former Intendencia (today the headquarters of the Armada de Chile). Nearby are cafés, Barrio Puerto businesses and the access to the funiculars that climb the historic hills.'
  }
];
