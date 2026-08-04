import type { Locale } from '../i18n/locales';
import type { FeatureKey, ViewKey } from './features';
import { getApartmentImages } from './images';

export interface LocalizedText {
  sr: string;
  en: string;
  de: string;
}

export interface Apartment {
  slug: string;
  name: LocalizedText;
  description: LocalizedText;
  childrenNote: LocalizedText;
  capacity: number;
  sizeM2: number;
  bedrooms: number;
  bathrooms: number;
  accessible: boolean;
  views: ViewKey[];
  amenities: {
    kitchen: FeatureKey[];
    bathroom: FeatureKey[];
    general: FeatureKey[];
    safety: FeatureKey[];
  };
}

const childrenNoteMax2: LocalizedText = {
  sr: 'Najviše 2 dece (bilo kog uzrasta) besplatno na postojećem krevetu; dodatni/dečji krevet dostupan na zahtev, uz potvrdu objekta.',
  en: 'Up to 2 children of any age stay free on the existing bed; an extra/cot bed is available on request, subject to confirmation from the property.',
  de: 'Bis zu 2 Kinder jeden Alters übernachten kostenlos im vorhandenen Bett; ein Zustell-/Kinderbett ist auf Anfrage und nach Bestätigung der Unterkunft verfügbar.',
};

const childrenNoteMax1: LocalizedText = {
  sr: 'Najviše 1 dete (bilo kog uzrasta) besplatno na postojećem krevetu; dodatni/dečji krevet dostupan na zahtev, uz potvrdu objekta.',
  en: 'Up to 1 child of any age stays free on the existing bed; an extra/cot bed is available on request, subject to confirmation from the property.',
  de: 'Bis zu 1 Kind jeden Alters übernachtet kostenlos im vorhandenen Bett; ein Zustell-/Kinderbett ist auf Anfrage und nach Bestätigung der Unterkunft verfügbar.',
};

export const APARTMENTS: Apartment[] = [
  {
    slug: 'studio-with-terrace',
    name: { sr: 'Studio sa Terasom', en: 'Studio with Terrace', de: 'Studio mit Terrasse' },
    description: {
      sr: 'U dobro opremljenoj kuhinji gosti imaju na raspolaganju ploču za kuvanje, frižider, posuđe i aparat za kafu i čaj. Studio takođe poseduje pribor za roštilj. Ovaj klimatizovani studio uključuje flat-screen TV sa striming servisima, privatno kupatilo, kao i terasu sa pogledom na vrt. Jedinica nudi 2 kreveta i smešta do 4 gosta.',
      en: 'Guests will find a stovetop, a refrigerator, kitchenware and a tea and coffee maker in the well-fitted kitchen. The studio also has a barbecue. This air-conditioned studio includes a flat-screen TV with streaming services, a private bathroom as well as a terrace with garden views. The unit offers 2 beds and sleeps up to 4 guests.',
      de: 'In der gut ausgestatteten Küche finden Gäste ein Kochfeld, einen Kühlschrank, Küchenutensilien sowie eine Kaffee- und Teemaschine. Das Studio verfügt außerdem über eine Grillausstattung. Dieses klimatisierte Studio bietet einen Flachbildfernseher mit Streaming-Diensten, ein eigenes Badezimmer sowie eine Terrasse mit Gartenblick. Die Einheit verfügt über 2 Betten und bietet Platz für bis zu 4 Gäste.',
    },
    childrenNote: childrenNoteMax2,
    capacity: 4,
    sizeM2: 25,
    bedrooms: 1,
    bathrooms: 1,
    accessible: false,
    views: ['garden', 'mountain', 'city', 'courtyard'],
    amenities: {
      kitchen: ['coffeeTeaMaker', 'fridge', 'electricKettle', 'kitchenware', 'stovetop', 'bbq', 'diningTable', 'gardenFurniture', 'outdoorDining', 'waterBottle', 'wineGlasses'],
      bathroom: ['shower', 'hairdryer', 'freeToiletries', 'toilet', 'bathOrShower', 'extraToilet', 'toiletPaper', 'shampoo', 'conditioner', 'bodySoap'],
      general: ['tvStreaming', 'ac', 'iron', 'seatingArea', 'extraLongBeds', 'heating', 'privateEntrance', 'soundproof', 'tileFloor', 'mosquitoNet', 'wardrobe', 'clothesRack', 'sofaBed', 'clothesDryer', 'sofa', 'trashCans', 'crib', 'bedsideOutlet', 'hypoallergenicPillows', 'wakeUpService', 'towels', 'linens', 'keyAccess', 'groundFloorUnitStairs', 'separateBuilding'],
      safety: ['outletCovers', 'coDetector'],
    },
  },
  {
    slug: 'studio-1',
    name: { sr: 'Studio 1', en: 'Studio 1', de: 'Studio 1' },
    description: {
      sr: 'U dobro opremljenoj čajnoj kuhinji gosti imaju na raspolaganju ploču za kuvanje, frižider, posuđe i aparat za kafu i čaj. Studio takođe nudi pribor za roštilj. Ovaj klimatizovani studio uključuje flat-screen TV sa kablovskim kanalima, privatno kupatilo, kao i terasu sa pogledom na planinu. Jedinica nudi 1 krevet i smešta do 3 gosta.',
      en: 'Guests will find a stovetop, a refrigerator, kitchenware and a tea and coffee maker in the well-equipped kitchenette. The studio also offers a barbecue. This air-conditioned studio includes a flat-screen TV with cable channels, a private bathroom as well as a terrace with mountain views. The unit offers 1 bed and sleeps up to 3 guests.',
      de: 'In der gut ausgestatteten Küchenzeile finden Gäste ein Kochfeld, einen Kühlschrank, Küchenutensilien sowie eine Kaffee- und Teemaschine. Das Studio bietet außerdem eine Grillausstattung. Dieses klimatisierte Studio umfasst einen Flachbildfernseher mit Kabelprogrammen, ein eigenes Badezimmer sowie eine Terrasse mit Bergblick. Die Einheit bietet 1 Bett und Platz für bis zu 3 Gäste.',
    },
    childrenNote: childrenNoteMax1,
    capacity: 3,
    sizeM2: 20,
    bedrooms: 1,
    bathrooms: 1,
    accessible: false,
    views: ['mountain', 'city', 'courtyard'],
    amenities: {
      kitchen: ['coffeeTeaMaker', 'fridge', 'electricKettle', 'kitchenware', 'stovetop', 'bbq', 'diningTable', 'gardenFurniture', 'outdoorDining', 'waterBottle', 'wineGlasses'],
      bathroom: ['shower', 'hairdryer', 'freeToiletries', 'toilet', 'bathOrShower', 'extraToilet', 'toiletPaper', 'shampoo', 'conditioner', 'bodySoap'],
      general: ['tvCable', 'ac', 'acSingleRoom', 'iron', 'seatingArea', 'extraLongBeds', 'heating', 'privateEntrance', 'soundproof', 'tileFloor', 'wardrobe', 'cleaningProducts', 'clothesRack', 'clothesDryer', 'trashCans', 'bedsideOutlet', 'hypoallergenicPillows', 'wakeUpService', 'towels', 'linens', 'keyCardAccess', 'groundFloorUnit', 'separateBuilding', 'handSanitizer'],
      safety: ['outletCovers'],
    },
  },
  {
    slug: 'studio-2',
    name: { sr: 'Studio 2', en: 'Studio 2', de: 'Studio 2' },
    description: {
      sr: 'U dobro opremljenoj čajnoj kuhinji gosti imaju na raspolaganju ploču za kuvanje, frižider, posuđe i aparat za kafu i čaj. Studio takođe uključuje pribor za roštilj. Ovaj klimatizovani studio čine flat-screen TV sa kablovskim kanalima, privatno kupatilo, kao i terasa sa pogledom na vrt. Jedinica ima 1 krevet i smešta do 3 gosta.',
      en: 'Guests will find a stovetop, a refrigerator, kitchenware and a tea and coffee maker in the well-equipped kitchenette. The studio also includes a barbecue. This air-conditioned studio is comprised of a flat-screen TV with cable channels, a private bathroom as well as a terrace with garden views. The unit has 1 bed and sleeps up to 3 guests.',
      de: 'In der gut ausgestatteten Küchenzeile finden Gäste ein Kochfeld, einen Kühlschrank, Küchenutensilien sowie eine Kaffee- und Teemaschine. Das Studio verfügt zudem über eine Grillausstattung. Dieses klimatisierte Studio besteht aus einem Flachbildfernseher mit Kabelprogrammen, einem eigenen Badezimmer sowie einer Terrasse mit Gartenblick. Die Einheit hat 1 Bett und bietet Platz für bis zu 3 Gäste.',
    },
    childrenNote: childrenNoteMax1,
    capacity: 3,
    sizeM2: 20,
    bedrooms: 1,
    bathrooms: 1,
    accessible: false,
    views: ['garden', 'city', 'courtyard'],
    amenities: {
      kitchen: ['coffeeTeaMaker', 'fridge', 'electricKettle', 'kitchenware', 'stovetop', 'bbq', 'diningTable', 'gardenFurniture', 'outdoorDining', 'waterBottle', 'wineGlasses'],
      bathroom: ['shower', 'hairdryer', 'freeToiletries', 'toilet', 'bathOrShower', 'extraToilet', 'toiletPaper', 'shampoo', 'conditioner', 'bodySoap', 'walkInShower'],
      general: ['tvCable', 'ac', 'acSingleRoom', 'iron', 'seatingArea', 'extraLongBeds', 'heating', 'privateEntrance', 'soundproof', 'tileFloor', 'wardrobe', 'cleaningProducts', 'clothesRack', 'clothesDryer', 'trashCans', 'bedsideOutlet', 'hypoallergenicPillows', 'wakeUpService', 'towels', 'linens', 'keyCardAccess', 'groundFloorUnit', 'separateBuilding', 'handSanitizer'],
      safety: ['outletCovers'],
    },
  },
  {
    slug: 'ground-floor-apartment',
    name: { sr: 'Apartman - Prizemlje', en: 'Ground Floor Apartment', de: 'Apartment im Erdgeschoss' },
    description: {
      sr: 'Ovaj svetao apartman, u potpunosti smešten u prizemlju, ima potpuno opremljenu kuhinju sa pločom za kuvanje, frižiderom i posuđem, kao i privatno kupatilo i udoban krevet na rasklapanje. Gosti mogu da uživaju uz flat-screen TV, klima-uređaj i grejanje, dok sopstveni ulaz vodi na mirnu ulicu. Apartman ima 1 spavaću sobu i smešta do 5 gostiju.',
      en: 'Set entirely on the ground floor, this bright apartment features a fully equipped kitchen with a stovetop, refrigerator and kitchenware, plus a private bathroom and a comfortable sofa bed. Guests can relax with a flat-screen TV, air conditioning and heating, while the private entrance opens onto a quiet street. The apartment offers 1 bedroom and sleeps up to 5 guests.',
      de: 'Dieses helle, vollständig im Erdgeschoss gelegene Apartment verfügt über eine komplett ausgestattete Küche mit Kochfeld, Kühlschrank und Küchenutensilien sowie ein eigenes Badezimmer und ein bequemes Schlafsofa. Gäste genießen einen Flachbildfernseher, Klimaanlage und Heizung, während der private Eingang zu einer ruhigen Straße führt. Das Apartment verfügt über 1 Schlafzimmer und bietet Platz für bis zu 5 Gäste.',
    },
    childrenNote: childrenNoteMax2,
    capacity: 5,
    sizeM2: 40,
    bedrooms: 1,
    bathrooms: 1,
    accessible: false,
    views: ['city', 'quietStreet'],
    amenities: {
      kitchen: ['coffeeTeaMaker', 'fridge', 'electricKettle', 'kitchenware', 'stovetop', 'bbq', 'diningTable', 'gardenFurniture', 'outdoorDining', 'waterBottle', 'wineGlasses'],
      bathroom: ['shower', 'hairdryer', 'freeToiletries', 'toilet', 'bathOrShower', 'extraToilet', 'toiletPaper', 'shampoo', 'conditioner', 'bodySoap'],
      general: ['tvCable', 'ac', 'iron', 'seatingArea', 'extraLongBeds', 'heating', 'connectingRooms', 'privateEntrance', 'sofa', 'soundproof', 'tileFloor', 'mosquitoNet', 'wardrobe', 'cleaningProducts', 'clothesRack', 'sofaBed', 'clothesDryer', 'trashCans', 'crib', 'bedsideOutlet', 'hypoallergenicPillows', 'wakeUpService', 'towels', 'linens', 'keyAccess', 'groundFloorUnitStairs', 'separateBuilding'],
      safety: ['outletCovers', 'coDetector'],
    },
  },
  {
    slug: 'garden-view-apartment',
    name: { sr: 'Apartman sa Pogledom na Vrt', en: 'Garden View Apartment', de: 'Apartment mit Gartenblick' },
    description: {
      sr: 'Ovaj prostrani, u potpunosti pristupačan apartman gleda na miran vrt i unutrašnje dvorište. Uključuje dobro opremljenu kuhinju sa trpezarijom, privatno kupatilo, radni sto i udoban prostor za sedenje, sve u prizemlju sa sopstvenim ulazom. Klima-uređaj, grejanje i flat-screen TV upotpunjuju prijatan boravak. Apartman ima 1 spavaću sobu i smešta do 5 gostiju.',
      en: 'This spacious, fully accessible apartment opens onto a peaceful garden and inner courtyard. It includes a well-equipped kitchen with a dining area, a private bathroom, a work desk and a comfortable seating area, all on the ground floor with a private entrance. Air conditioning, heating and a flat-screen TV complete the comfortable stay. The apartment offers 1 bedroom and sleeps up to 5 guests.',
      de: 'Dieses geräumige, vollständig barrierefreie Apartment blickt auf einen ruhigen Garten und den Innenhof. Es umfasst eine gut ausgestattete Küche mit Essbereich, ein eigenes Badezimmer, einen Schreibtisch und eine bequeme Sitzecke — alles ebenerdig mit privatem Eingang. Klimaanlage, Heizung und ein Flachbildfernseher runden den komfortablen Aufenthalt ab. Das Apartment verfügt über 1 Schlafzimmer und bietet Platz für bis zu 5 Gäste.',
    },
    childrenNote: childrenNoteMax2,
    capacity: 5,
    sizeM2: 50,
    bedrooms: 1,
    bathrooms: 1,
    accessible: true,
    views: ['garden', 'courtyard', 'quietStreet'],
    amenities: {
      kitchen: ['coffeeTeaMaker', 'fridge', 'electricKettle', 'kitchenware', 'stovetop', 'bbq', 'diningTable', 'diningArea', 'gardenFurniture', 'outdoorDining', 'waterBottle', 'wineGlasses'],
      bathroom: ['shower', 'hairdryer', 'freeToiletries', 'toilet', 'bathOrShower', 'extraToilet', 'toiletPaper', 'shampoo', 'conditioner', 'bodySoap'],
      general: ['tvCable', 'ac', 'iron', 'desk', 'seatingArea', 'extraLongBeds', 'heating', 'connectingRooms', 'privateEntrance', 'sofa', 'soundproof', 'tileFloor', 'mosquitoNet', 'wardrobe', 'cleaningProducts', 'clothesRack', 'sofaBed', 'clothesDryer', 'trashCans', 'crib', 'bedsideOutlet', 'hypoallergenicPillows', 'wakeUpService', 'towels', 'linens', 'keyAccess', 'groundFloorUnitStairs', 'separateBuilding'],
      safety: ['outletCovers', 'babySafetyGates', 'coDetector', 'accessibleEntireUnit'],
    },
  },
  {
    slug: 'one-bedroom-apartment',
    name: { sr: 'Apartman sa 1 Spavaćom Sobom', en: 'One-Bedroom Apartment', de: 'Apartment mit einem Schlafzimmer' },
    description: {
      sr: 'Svetao i udoban, ovaj apartman kombinuje pogled na vrt, planinu i grad sa potpuno opremljenom kuhinjom, radnim stolom i prostorom za sedenje. Prilagođeno kupatilo, klima-uređaj, grejanje i flat-screen TV sa striming servisima čine ga idealnim za porodice i duže boravke. Apartman ima 1 spavaću sobu i smešta do 4 gosta.',
      en: 'Bright and comfortable, this apartment combines garden, mountain and city views with a fully equipped kitchen, a work desk and a seating area. The accessible bathroom, air conditioning, heating and flat-screen TV with streaming services make it ideal for families and longer stays. The apartment offers 1 bedroom and sleeps up to 4 guests.',
      de: 'Hell und komfortabel verbindet dieses Apartment Garten-, Berg- und Stadtblick mit einer komplett ausgestatteten Küche, einem Schreibtisch und einer Sitzecke. Das barrierefreie Badezimmer, die Klimaanlage, Heizung und der Flachbildfernseher mit Streaming-Diensten machen es ideal für Familien und längere Aufenthalte. Das Apartment verfügt über 1 Schlafzimmer und bietet Platz für bis zu 4 Gäste.',
    },
    childrenNote: childrenNoteMax2,
    capacity: 4,
    sizeM2: 33,
    bedrooms: 1,
    bathrooms: 1,
    accessible: true,
    views: ['garden', 'mountain', 'city', 'courtyard'],
    amenities: {
      kitchen: ['coffeeTeaMaker', 'fridge', 'electricKettle', 'kitchenware', 'stovetop', 'toaster', 'bbq', 'diningTable', 'gardenFurniture', 'outdoorDining', 'waterBottle', 'wineGlasses'],
      bathroom: ['shower', 'hairdryer', 'freeToiletries', 'toilet', 'bathOrShower', 'extraToilet', 'toiletPaper', 'shampoo', 'conditioner', 'bodySoap', 'accessibleBathtub', 'raisedToilet', 'emergencyCord'],
      general: ['tvStreaming', 'ac', 'acSingleRoom', 'iron', 'desk', 'seatingArea', 'extraLongBeds', 'heating', 'connectingRooms', 'privateEntrance', 'sofa', 'soundproof', 'tileFloor', 'wardrobe', 'hypoallergenicLinens', 'cleaningProducts', 'clothesRack', 'sofaBed', 'clothesDryer', 'trashCans', 'crib', 'bedsideOutlet', 'hypoallergenicPillows', 'wakeUpService', 'towels', 'linens', 'keyCardAccess', 'upperFloorStairs', 'separateBuilding', 'privateApartmentInBuilding', 'handSanitizer', 'airPurifiers'],
      safety: ['outletCovers', 'babySafetyGates', 'smokeDetector', 'fireExtinguisher', 'coDetector', 'coSources'],
    },
  },
];

export function getApartment(slug: string): Apartment | undefined {
  return APARTMENTS.find((a) => a.slug === slug);
}

export function apartmentName(a: Apartment, locale: Locale): string {
  return a.name[locale];
}

export { getApartmentImages };
