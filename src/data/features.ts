import type { Locale } from '../i18n/locales';

export type FeatureCategory = 'kitchen' | 'bathroom' | 'general' | 'safety';

export interface Feature {
  icon: string;
  sr: string;
  en: string;
  de: string;
}

export type FeatureKey = keyof typeof FEATURES;

/** Central dictionary of every amenity used across the apartments, keyed once and reused. */
export const FEATURES = {
  // --- Kitchen -------------------------------------------------------
  coffeeTeaMaker: { icon: 'coffee', sr: 'Aparat za kafu/čaj', en: 'Coffee/tea maker', de: 'Kaffee-/Teemaschine' },
  fridge: { icon: 'fridge', sr: 'Frižider', en: 'Refrigerator', de: 'Kühlschrank' },
  electricKettle: { icon: 'kettle', sr: 'Električno kuvalo', en: 'Electric kettle', de: 'Wasserkocher' },
  kitchenware: { icon: 'utensils', sr: 'Posuđe', en: 'Kitchenware', de: 'Küchenutensilien' },
  stovetop: { icon: 'stove', sr: 'Ploča za kuvanje', en: 'Stovetop', de: 'Kochfeld' },
  toaster: { icon: 'toaster', sr: 'Toster', en: 'Toaster', de: 'Toaster' },
  bbq: { icon: 'grill', sr: 'Pribor za roštilj', en: 'Barbecue facilities', de: 'Grillausstattung' },
  diningTable: { icon: 'table', sr: 'Sto za ručavanje', en: 'Dining table', de: 'Esstisch' },
  diningArea: { icon: 'table', sr: 'Trpezarija', en: 'Dining area', de: 'Essbereich' },
  gardenFurniture: { icon: 'tree', sr: 'Nameštaj za dvorište', en: 'Garden furniture', de: 'Gartenmöbel' },
  outdoorDining: { icon: 'tree', sr: 'Spoljni prostor za ručavanje', en: 'Outdoor dining area', de: 'Essbereich im Freien' },
  waterBottle: { icon: 'bottle', sr: 'Flaša vode', en: 'Bottle of water', de: 'Flasche Wasser' },
  wineGlasses: { icon: 'wine', sr: 'Čaše za vino', en: 'Wine glasses', de: 'Weingläser' },

  // --- Bathroom --------------------------------------------------------
  shower: { icon: 'shower', sr: 'Tuš', en: 'Shower', de: 'Dusche' },
  hairdryer: { icon: 'hairdryer', sr: 'Fen za kosu', en: 'Hairdryer', de: 'Haartrockner' },
  freeToiletries: { icon: 'toiletries', sr: 'Besplatni toaletni pribor', en: 'Free toiletries', de: 'Kostenlose Pflegeprodukte' },
  toilet: { icon: 'toilet', sr: 'Toalet', en: 'Toilet', de: 'Toilette' },
  bathOrShower: { icon: 'bath', sr: 'Kada ili tuš', en: 'Bathtub or shower', de: 'Badewanne oder Dusche' },
  extraToilet: { icon: 'toilet', sr: 'Dodatni toalet', en: 'Additional toilet', de: 'Zusätzliche Toilette' },
  toiletPaper: { icon: 'toiletries', sr: 'Toalet papir', en: 'Toilet paper', de: 'Toilettenpapier' },
  shampoo: { icon: 'toiletries', sr: 'Šampon', en: 'Shampoo', de: 'Shampoo' },
  conditioner: { icon: 'toiletries', sr: 'Balzam za kosu', en: 'Conditioner', de: 'Conditioner' },
  bodySoap: { icon: 'toiletries', sr: 'Sapun za telo', en: 'Body soap', de: 'Körperseife' },
  walkInShower: { icon: 'shower', sr: 'Tuš bez praga', en: 'Walk-in shower', de: 'Ebenerdige Dusche' },
  accessibleBathtub: { icon: 'accessible', sr: 'Prilagođena kada', en: 'Accessible bathtub', de: 'Barrierefreie Badewanne' },
  raisedToilet: { icon: 'toilet', sr: 'Visoki toalet', en: 'Raised toilet', de: 'Erhöhte Toilette' },
  emergencyCord: { icon: 'bell', sr: 'Kabl za hitne slučajeve u kupatilu', en: 'Emergency cord in bathroom', de: 'Notrufschnur im Badezimmer' },

  // --- General amenities ------------------------------------------------
  wifi: { icon: 'wifi', sr: 'Besplatan WiFi', en: 'Free WiFi', de: 'Kostenloses WLAN' },
  tvStreaming: { icon: 'tv', sr: 'TV (satelitski/kablovski, flat-screen, striming – Netflix)', en: 'TV (satellite/cable, flat-screen, streaming – Netflix)', de: 'TV (Satellit/Kabel, Flachbildschirm, Streaming – Netflix)' },
  tvCable: { icon: 'tv', sr: 'TV (satelitski/kablovski, flat-screen)', en: 'TV (satellite/cable, flat-screen)', de: 'TV (Satellit/Kabel, Flachbildschirm)' },
  ac: { icon: 'snowflake', sr: 'Klima-uređaj', en: 'Air conditioning', de: 'Klimaanlage' },
  acSingleRoom: { icon: 'snowflake', sr: 'Klima u jednoj sobi', en: 'Air conditioning in one room', de: 'Klimaanlage in einem Zimmer' },
  iron: { icon: 'iron', sr: 'Pegla i pribor za peglanje', en: 'Iron and ironing equipment', de: 'Bügeleisen und -brett' },
  seatingArea: { icon: 'sofa', sr: 'Prostor za sedenje', en: 'Seating area', de: 'Sitzecke' },
  desk: { icon: 'desk', sr: 'Radni sto', en: 'Desk', de: 'Schreibtisch' },
  freeParking: { icon: 'parking', sr: 'Besplatno parking mesto', en: 'Free parking space', de: 'Kostenloser Parkplatz' },
  extraLongBeds: { icon: 'bed', sr: 'Ekstra dugački kreveti (>2m)', en: 'Extra-long beds (over 2 metres)', de: 'Extra lange Betten (über 2 m)' },
  heating: { icon: 'flame', sr: 'Grejanje', en: 'Heating', de: 'Heizung' },
  privateEntrance: { icon: 'door', sr: 'Sopstveni ulaz', en: 'Private entrance', de: 'Privater Eingang' },
  connectingRooms: { icon: 'door', sr: 'Dostupne povezane jedinice', en: 'Connecting rooms available', de: 'Verbindungszimmer verfügbar' },
  soundproof: { icon: 'volumeOff', sr: 'Zvučna izolacija', en: 'Soundproofing', de: 'Schallschutz' },
  tileFloor: { icon: 'floor', sr: 'Podne pločice/mermer', en: 'Tile/marble floor', de: 'Fliesen-/Marmorboden' },
  mosquitoNet: { icon: 'bug', sr: 'Mrežica za komarce', en: 'Mosquito net', de: 'Moskitonetz' },
  wardrobe: { icon: 'wardrobe', sr: 'Garderober', en: 'Wardrobe', de: 'Kleiderschrank' },
  clothesRack: { icon: 'hanger', sr: 'Vešalica', en: 'Clothes rack', de: 'Kleiderständer' },
  sofaBed: { icon: 'sofaBed', sr: 'Krevet na rasklapanje', en: 'Sofa bed', de: 'Schlafsofa' },
  clothesDryer: { icon: 'dryer', sr: 'Sušilica za veš', en: 'Clothes dryer', de: 'Wäschetrockner' },
  sofa: { icon: 'sofa', sr: 'Kauč', en: 'Sofa', de: 'Sofa' },
  trashCans: { icon: 'trash', sr: 'Kante za đubre', en: 'Trash cans', de: 'Mülleimer' },
  crib: { icon: 'crib', sr: 'Dečji krevetac', en: 'Crib', de: 'Kinderbett' },
  bedsideOutlet: { icon: 'plug', sr: 'Utičnica pored kreveta', en: 'Outlet near the bed', de: 'Steckdose neben dem Bett' },
  hypoallergenicPillows: { icon: 'pillow', sr: 'Hipoalergenski jastuci', en: 'Hypoallergenic pillows', de: 'Hypoallergene Kissen' },
  hypoallergenicLinens: { icon: 'pillow', sr: 'Hipoalergenska posteljina', en: 'Hypoallergenic bedding', de: 'Hypoallergene Bettwäsche' },
  wakeUpService: { icon: 'bell', sr: 'Usluga buđenja', en: 'Wake-up service', de: 'Weckdienst' },
  towels: { icon: 'towel', sr: 'Peškiri', en: 'Towels', de: 'Handtücher' },
  linens: { icon: 'towel', sr: 'Posteljina', en: 'Linens', de: 'Bettwäsche' },
  keyAccess: { icon: 'key', sr: 'Pristup ključem', en: 'Key access', de: 'Zugang mit Schlüssel' },
  keyCardAccess: { icon: 'key', sr: 'Pristup ključem/karticom', en: 'Key/keycard access', de: 'Zugang mit Schlüssel/Karte' },
  groundFloorUnitStairs: { icon: 'stairs', sr: 'Cela jedinica u prizemlju (gornji spratovi samo stepenicama)', en: 'Entire unit on the ground floor (upper floors reachable by stairs only)', de: 'Gesamte Unterkunft im Erdgeschoss (obere Etagen nur über Treppen erreichbar)' },
  groundFloorUnit: { icon: 'building', sr: 'Cela jedinica u prizemlju', en: 'Entire unit on the ground floor', de: 'Gesamte Unterkunft im Erdgeschoss' },
  upperFloorStairs: { icon: 'stairs', sr: 'Gornji spratovi samo stepenicama', en: 'Upper floors reachable by stairs only', de: 'Obere Etagen nur über Treppen erreichbar' },
  separateBuilding: { icon: 'building', sr: 'Zasebna zgrada', en: 'Separate building', de: 'Separates Gebäude' },
  privateApartmentInBuilding: { icon: 'building', sr: 'Privatni apartman u zgradi', en: 'Private apartment in building', de: 'Private Wohnung im Gebäude' },
  cleaningProducts: { icon: 'cleaning', sr: 'Sredstva za čišćenje', en: 'Cleaning products', de: 'Reinigungsmittel' },
  handSanitizer: { icon: 'handSanitizer', sr: 'Sredstvo za dezinfekciju ruku', en: 'Hand sanitizer', de: 'Handdesinfektionsmittel' },
  airPurifiers: { icon: 'airPurifier', sr: 'Prečišćivači vazduha', en: 'Air purifiers', de: 'Luftreiniger' },

  // --- Safety & accessibility ---------------------------------------
  outletCovers: { icon: 'shield', sr: 'Zaštitnici za utičnice', en: 'Outlet covers', de: 'Steckdosensicherungen' },
  coDetector: { icon: 'alarm', sr: 'Detektor ugljen-monoksida', en: 'Carbon monoxide detector', de: 'Kohlenmonoxidmelder' },
  coSources: { icon: 'alarm', sr: 'Izvori ugljen-monoksida u objektu', en: 'Carbon monoxide sources on site', de: 'Kohlenmonoxidquellen vor Ort' },
  smokeDetector: { icon: 'alarm', sr: 'Detektor dima', en: 'Smoke detector', de: 'Rauchmelder' },
  fireExtinguisher: { icon: 'fireExtinguisher', sr: 'Protivpožarni aparat', en: 'Fire extinguisher', de: 'Feuerlöscher' },
  babySafetyGates: { icon: 'gate', sr: 'Sigurnosne ograde za bebe', en: 'Baby safety gates', de: 'Absperrgitter für Kinder' },
  accessibleEntireUnit: { icon: 'accessible', sr: 'Cela jedinica prilagođena osobama sa invaliditetom', en: 'Entire unit accessible for guests with disabilities', de: 'Gesamte Unterkunft barrierefrei für Gäste mit Behinderung' },
} as const satisfies Record<string, Feature>;

export const VIEWS = {
  garden: { icon: 'leaf', sr: 'Pogled na vrt', en: 'Garden view', de: 'Gartenblick' },
  mountain: { icon: 'mountain', sr: 'Pogled na planinu', en: 'Mountain view', de: 'Bergblick' },
  city: { icon: 'city', sr: 'Pogled na grad', en: 'City view', de: 'Stadtblick' },
  courtyard: { icon: 'courtyard', sr: 'Pogled na unutrašnje dvorište', en: 'Courtyard view', de: 'Blick auf den Innenhof' },
  quietStreet: { icon: 'street', sr: 'Pogled na mirnu ulicu', en: 'Quiet street view', de: 'Blick auf eine ruhige Straße' },
} as const satisfies Record<string, Feature>;

export type ViewKey = keyof typeof VIEWS;

export function featureLabel(item: Feature, locale: Locale): string {
  return item[locale];
}
