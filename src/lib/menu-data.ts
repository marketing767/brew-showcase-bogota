// Beer Lovers — menú original (textos e imágenes desde stacks.menu/beerlovers).
// Las imágenes se referencian directamente desde el CDN de Framer del menú original.

export type TastingNotes = {
  description?: string;
  apariencia?: string;
  aroma?: string;
  sabor?: string;
  cuerpo?: string;
  final?: string;
};

export type BeerItem = {
  name: string;
  style: string;
  abv: string;
  ibu: string;
  size: string;
  price: string;
  image: string;
  notes?: TastingNotes;
};


export type FoodItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  spicy?: boolean;
  pairing?: string[];
};

export type SimpleItem = {
  name: string;
  price: string;
};

export const HERO_IMAGES = {
  home: "https://framerusercontent.com/images/6WhHqrNv0iiyxJHG4rvMouy58uU.webp",
  cervezas: "https://framerusercontent.com/images/uSMaRyJhltYRX2sNCX9EWFgPBMQ.webp",
  draft: "https://framerusercontent.com/images/KJ0RFro4AAUecbfzXteK50hNQQ.webp",
  comida: "https://framerusercontent.com/images/jKCnq120nyuw8RmaxJlkxuoDsKI.webp",
  bebidas: "https://framerusercontent.com/images/jM2YP3gzh3SmaS5N46PdXvOSAI.webp",
  licores: "https://framerusercontent.com/images/gFFMmJRqR5ocPuavWvr6qRYNBU.webp",
};

export const BRAND_MARQUEE = [
  "CHIMAY", "DUVEL", "SCHÖFFERHOFER", "ERDINGER",
  "DELIRIUM", "GULDEN DRAAK", "LA CHOUFFE", "ADNAMS", "STRAFFE HENDRIK",
  "BRUGSE ZOT", "FLORIS", "ABBAYE", "INNIS & GUNN", "DAB", "ST IDESBALD",
];

// Notas de cata basadas en los perfiles publicados por cada cervecería.
const N = {
  deliriumTremens: {
    description: "Ícono belga de fermentación triple. Aroma cítrico y afrutado con cuerpo cremoso y final seco de alta graduación.",
    apariencia: "Dorada pálida con espuma blanca densa y persistente.",
    aroma: "Notas cítricas, plátano maduro, especias y malta clara.",
    sabor: "Malta dulce equilibrada con toques frutales y un final especiado.",
    cuerpo: "Medio, con carbonatación viva y cremosidad marcada.",
    final: "Seco, cálido y ligeramente amargo.",
  },
  deliriumNocturnum: {
    description: "Belgian Dark Strong Ale rica en maltas oscuras, fruta madura y toques de chocolate.",
    apariencia: "Marrón caoba con espuma cremosa color crema.",
    aroma: "Frutos rojos, ciruela pasa, caramelo y toques a chocolate.",
    sabor: "Malta tostada, fruta oscura, ligero picante de levadura belga.",
    cuerpo: "Medio a lleno, aterciopelado.",
    final: "Cálido, dulzón y ligeramente especiado.",
  },
  deliriumChristmas: {
    description: "Winter Ale de temporada, robusta y especiada, ideal para climas fríos.",
    apariencia: "Rojiza oscura con espuma abundante beige.",
    aroma: "Caramelo, canela, ciruela y notas alcohólicas cálidas.",
    sabor: "Malta caramelizada, frutas confitadas y especias navideñas.",
    cuerpo: "Lleno, licoroso.",
    final: "Cálido, dulce y prolongado.",
  },
  deliriumArgentum: {
    description: "Belgian IPA que combina la fruta de la levadura belga con lúpulos americanos.",
    apariencia: "Dorada brillante con espuma blanca compacta.",
    aroma: "Cítricos, maracuyá, pino y toques a levadura belga.",
    sabor: "Amargor firme, frutal, con base maltosa clara.",
    cuerpo: "Medio, carbonatación alta.",
    final: "Seco y amargo, con recuerdos cítricos.",
  },
  deliriumRed: {
    description: "Strong Ale belga con infusión de cereza natural. Dulce, afrutada y refrescante.",
    apariencia: "Rojo rubí intenso con espuma rosada.",
    aroma: "Cereza fresca, almendra dulce y malta.",
    sabor: "Cereza natural equilibrada con toques ácidos y malta.",
    cuerpo: "Medio, cremoso.",
    final: "Frutal, dulce y ligeramente ácido.",
  },
  guldenDraak9000: {
    description: "Quadrupel dorado, fuerte y complejo, madurado sobre lías.",
    apariencia: "Dorada intensa con espuma cremosa persistente.",
    aroma: "Fruta madura, caramelo claro, especias y alcohol suave.",
    sabor: "Malta dulce, frutal, especiado y con calidez alcohólica.",
    cuerpo: "Lleno y sedoso.",
    final: "Largo, cálido y ligeramente seco.",
  },
  guldenDraakClassic: {
    description: "Dark Triple belga: color oscuro con la potencia de una triple.",
    apariencia: "Marrón oscuro con espuma color crema.",
    aroma: "Caramelo tostado, ciruela, malta chocolate y levadura belga.",
    sabor: "Dulzor maltoso, fruta oscura y notas licorosas.",
    cuerpo: "Lleno, aterciopelado.",
    final: "Prolongado, cálido y suavemente amargo.",
  },
  abbayePremierCru: {
    description: "Blonde Strong Ale de abadía, elegante y de alta fermentación.",
    apariencia: "Dorada brillante con espuma blanca fina.",
    aroma: "Miel, cítricos, especias suaves y levadura belga.",
    sabor: "Malta dulce con toques afrutados y final especiado.",
    cuerpo: "Medio, con carbonatación viva.",
    final: "Seco y ligeramente cálido.",
  },
  abbayeBrune: {
    description: "Dubbel clásica de abadía, rica en maltas oscuras y fruta seca.",
    apariencia: "Marrón rojiza con espuma beige compacta.",
    aroma: "Caramelo, pasas, higo y toques a pan tostado.",
    sabor: "Malta caramelizada, fruta oscura y suave especia.",
    cuerpo: "Medio, cremoso.",
    final: "Dulzón con toque seco final.",
  },
  florisFramboise: {
    description: "Cerveza de trigo con infusión natural de frambuesa. Refrescante y afrutada.",
    apariencia: "Rojo rosado brillante con espuma rosada.",
    aroma: "Frambuesa fresca y trigo suave.",
    sabor: "Frambuesa natural, ligeramente ácida y dulce.",
    cuerpo: "Ligero, muy carbonatado.",
    final: "Refrescante y afrutado.",
  },
  florisPassion: {
    description: "Cerveza de trigo con maracuyá, tropical y aromática.",
    apariencia: "Amarillo dorado turbio con espuma blanca.",
    aroma: "Maracuyá intenso y trigo.",
    sabor: "Maracuyá fresco, dulzor equilibrado y trigo suave.",
    cuerpo: "Ligero, refrescante.",
    final: "Tropical y limpio.",
  },
  stIdesbald: {
    description: "Blonde Ale de abadía belga, equilibrada y accesible.",
    apariencia: "Dorada con espuma blanca cremosa.",
    aroma: "Malta dulce, cítricos y levadura belga.",
    sabor: "Malta clara, ligera fruta y amargor moderado.",
    cuerpo: "Medio.",
    final: "Seco y limpio.",
  },
  duvel: {
    description: "Golden Strong Ale de referencia mundial. Fermentación en botella y triple carbonatación.",
    apariencia: "Dorada pálida con espuma blanca enorme y persistente.",
    aroma: "Cítricos, pera, levadura belga y lúpulo noble.",
    sabor: "Malta seca, frutal y amargor elegante.",
    cuerpo: "Medio, muy carbonatado.",
    final: "Seco, largo y amargo fino.",
  },
  straffeHendrik9: {
    description: "Triple belga de la abadía de Brujas, especiada y expresiva.",
    apariencia: "Dorada intensa con espuma cremosa.",
    aroma: "Especias, cítricos y malta clara.",
    sabor: "Malta dulce con notas frutales y final amargo.",
    cuerpo: "Medio a lleno.",
    final: "Cálido, seco y especiado.",
  },
  straffeHendrik11: {
    description: "Quadruple belga potente y compleja, envejecida.",
    apariencia: "Marrón oscuro con espuma color crema.",
    aroma: "Fruta seca, caramelo oscuro, chocolate y licor.",
    sabor: "Malta rica, ciruela pasa, cacao y alcohol cálido.",
    cuerpo: "Lleno, licoroso.",
    final: "Largo, cálido y complejo.",
  },
  brugseZot: {
    description: "Blonde Ale de Brujas, refrescante y accesible.",
    apariencia: "Dorada con espuma blanca compacta.",
    aroma: "Malta clara, lúpulo floral y toque cítrico.",
    sabor: "Equilibrada, maltosa con amargor limpio.",
    cuerpo: "Medio-ligero.",
    final: "Seco y refrescante.",
  },
  brugseZotDubbel: {
    description: "Dubbel de Brujas, maltosa y frutal.",
    apariencia: "Marrón rojiza con espuma beige.",
    aroma: "Caramelo, fruta oscura y especias.",
    sabor: "Malta caramelizada, ciruela y toque especiado.",
    cuerpo: "Medio, cremoso.",
    final: "Dulzón con toque seco.",
  },
  laChouffe: {
    description: "Blonde Ale de las Ardenas, con toques de cilantro.",
    apariencia: "Dorada brumosa con espuma blanca.",
    aroma: "Cítricos, cilantro, malta y levadura frutal.",
    sabor: "Malta dulce, frutal y ligero especiado.",
    cuerpo: "Medio, carbonatación viva.",
    final: "Seco y ligeramente picante.",
  },
  chimayBlue: {
    description: "Trapense de referencia. Robusta, especiada y de guarda.",
    apariencia: "Marrón oscura con espuma cremosa color crema.",
    aroma: "Caramelo, fruta oscura, especias y ligero cacao.",
    sabor: "Malta rica, ciruela, higo y calidez alcohólica.",
    cuerpo: "Lleno y aterciopelado.",
    final: "Largo, cálido y complejo.",
  },
  chimayTriple: {
    description: "Trapense triple, dorada y con carácter especiado.",
    apariencia: "Dorada intensa con espuma blanca densa.",
    aroma: "Lúpulo floral, cítricos, malta clara y levadura.",
    sabor: "Malta seca, frutal y amargor elegante.",
    cuerpo: "Medio, muy carbonatado.",
    final: "Seco, especiado y persistente.",
  },
  chimayBrown: {
    description: "Trapense dubbel, maltosa y frutal.",
    apariencia: "Marrón cobriza con espuma beige.",
    aroma: "Caramelo, pasas, especias y levadura belga.",
    sabor: "Malta caramelizada, fruta seca y toque tostado.",
    cuerpo: "Medio, redondo.",
    final: "Suave, dulzón y equilibrado.",
  },
  // Alemania
  schofferhofer: {
    description: "Hefe Weizen bávara de trigo, refrescante y afrutada.",
    apariencia: "Dorada turbia con espuma blanca muy densa.",
    aroma: "Plátano, clavo y trigo.",
    sabor: "Trigo suave, plátano maduro y ligera especia.",
    cuerpo: "Medio, cremoso.",
    final: "Suave y refrescante.",
  },
  schofferhoferDunkel: {
    description: "Weissbier oscura con maltas tostadas y notas de caramelo.",
    apariencia: "Marrón caoba con espuma beige.",
    aroma: "Pan tostado, caramelo, plátano y clavo.",
    sabor: "Malta tostada, trigo y toque frutal.",
    cuerpo: "Medio, sedoso.",
    final: "Maltoso y equilibrado.",
  },
  schofferhoferGrapefruit: {
    description: "Mezcla de Weissbier con toronja natural. Baja graduación, muy refrescante.",
    apariencia: "Amarillo turbio con espuma blanca.",
    aroma: "Toronja fresca y trigo.",
    sabor: "Cítrico brillante, dulzor moderado y trigo.",
    cuerpo: "Ligero, muy carbonatado.",
    final: "Refrescante y cítrico.",
  },
  erdingerWeissbier: {
    description: "Hefe Weizen bávara clásica, referencia del estilo.",
    apariencia: "Dorada turbia con espuma blanca abundante.",
    aroma: "Plátano, clavo, trigo y levadura.",
    sabor: "Trigo cremoso, frutal y suavemente especiado.",
    cuerpo: "Medio, muy carbonatado.",
    final: "Limpio y refrescante.",
  },
  erdingerPikantus: {
    description: "Weizenbock oscura, fuerte y compleja.",
    apariencia: "Marrón rojiza con espuma cremosa color crema.",
    aroma: "Plátano maduro, caramelo, clavo y ciruela.",
    sabor: "Malta rica, trigo, fruta oscura y calidez alcohólica.",
    cuerpo: "Lleno, cremoso.",
    final: "Cálido, maltoso y prolongado.",
  },
  clausthaler: {
    description: "Lager alemana sin alcohol, elaborada bajo la ley de pureza.",
    apariencia: "Dorada brillante con espuma blanca.",
    aroma: "Malta clara y lúpulo noble suave.",
    sabor: "Ligeramente maltosa, limpia y equilibrada.",
    cuerpo: "Ligero.",
    final: "Seco y refrescante.",
  },
  dab: {
    description: "Dortmunder Export clásica, seca y equilibrada.",
    apariencia: "Dorada brillante con espuma blanca.",
    aroma: "Malta pilsner y lúpulo noble.",
    sabor: "Malta suave, amargor moderado y limpieza pilsner.",
    cuerpo: "Medio-ligero.",
    final: "Seco y equilibrado.",
  },
  // Reino Unido
  adnamsInnovationIpa: {
    description: "English IPA moderna con lúpulos americanos y del nuevo mundo.",
    apariencia: "Dorada intensa con espuma blanca.",
    aroma: "Cítricos, fruta tropical y pino.",
    sabor: "Amargor firme con base maltosa galleta.",
    cuerpo: "Medio.",
    final: "Amargo, seco y persistente.",
  },
  adnamsGhostShip: {
    description: "Pale Ale de Southwold con perfil cítrico y refrescante.",
    apariencia: "Dorada pálida con espuma blanca.",
    aroma: "Limón, pomelo y malta suave.",
    sabor: "Cítrico brillante, malta galleta y amargor moderado.",
    cuerpo: "Medio-ligero.",
    final: "Seco, cítrico y refrescante.",
  },
  adnamsKobold: {
    description: "Lager inglesa artesanal, seca y con lúpulo aromático.",
    apariencia: "Dorada brillante con espuma blanca.",
    aroma: "Lúpulo herbal, cítrico suave y malta clara.",
    sabor: "Malta seca con amargor limpio.",
    cuerpo: "Medio-ligero.",
    final: "Seco, crujiente y refrescante.",
  },
  adnamsStout: {
    description: "Stout inglesa clásica, tostada y suave.",
    apariencia: "Negra profunda con espuma marrón claro.",
    aroma: "Café, chocolate y malta tostada.",
    sabor: "Café, cacao amargo y malta oscura.",
    cuerpo: "Medio, cremoso.",
    final: "Tostado y ligeramente amargo.",
  },
  // República Checa
  prazackaSvetla: {
    description: "Pale Lager checa tradicional, refrescante y de baja graduación.",
    apariencia: "Dorada brillante con espuma blanca compacta.",
    aroma: "Malta pilsner, pan y lúpulo Saaz.",
    sabor: "Malta suave y amargor herbal característico checo.",
    cuerpo: "Ligero.",
    final: "Seco, herbal y muy refrescante.",
  },
  // Escocia
  innisGunn: {
    description: "Scottish Ale madurada sobre astillas de roble. Maltosa y con notas amaderadas.",
    apariencia: "Ámbar dorado brillante con espuma beige.",
    aroma: "Vainilla, caramelo, toffee y roble.",
    sabor: "Malta caramelizada, vainilla, toque a whisky y madera.",
    cuerpo: "Medio, sedoso.",
    final: "Suave, dulce y prolongado con notas de roble.",
  },
  lino: {
    description: "New England IPA jugosa y turbia, con perfil frutal explosivo.",
    apariencia: "Amarillo turbio con espuma blanca cremosa.",
    aroma: "Mango, maracuyá, durazno y cítricos.",
    sabor: "Fruta tropical intensa, amargor suave y base maltosa cremosa.",
    cuerpo: "Medio a lleno, jugoso.",
    final: "Suave, frutal y de bajo amargor.",
  },
} as const;

export const DRAFT: BeerItem[] = [
  { name: "Delirium Tremens", style: "Belgian Golden Strong Ale", abv: "8.5%", ibu: "24.5", size: "330ml — 500ml", price: "$35.000 — $42.000", image: "https://framerusercontent.com/images/MypcHJhOlICI3Bk0asqKTYSxSsA.png", notes: N.deliriumTremens },
  { name: "Delirium Red", style: "Strong Fruit Beer", abv: "8%", ibu: "20", size: "330ml — 500ml", price: "$35.000 — $42.000", image: "https://framerusercontent.com/images/gSB2YNHQPDG4v37uRb4NZ5J28w.png", notes: N.deliriumRed },
  { name: "Gulden Draak", style: "Según disponibilidad", abv: "10.5%", ibu: "25 — 30", size: "330ml — 500ml", price: "$35.000 — $42.000", image: "https://framerusercontent.com/images/GTqx0orNnOyGQVrmzEzznCibY.png", notes: N.guldenDraakClassic },
  { name: "Adnams Ghost Ship", style: "Pale Ale", abv: "4.6%", ibu: "40", size: "500ml", price: "$28.000", image: "https://framerusercontent.com/images/hTuaURI5iGNuAOlRrLoMSVCow.png", notes: N.adnamsGhostShip },
  { name: "Lino", style: "New England IPA (NEIPA)", abv: "7%", ibu: "45", size: "330ml", price: "$24.000", image: "https://framerusercontent.com/images/BOiQD9VwIRvspTbqRCf4o2uVfXc.png", notes: N.lino },
];

export const CERVEZAS_BELGICA: BeerItem[] = [
  { name: "Delirium Tremens", style: "Belgian Golden Strong Ale", abv: "8.5%", ibu: "24.5", size: "330ml", price: "$35.000", image: "https://framerusercontent.com/images/eo25TEknojTk1Nas0UuCKzRbcg.png", notes: N.deliriumTremens },
  { name: "Delirium Tremens 750", style: "Belgian Golden Strong Ale", abv: "8.5%", ibu: "24.5", size: "750ml", price: "$75.000", image: "https://framerusercontent.com/images/qqADbNkCddDAMHEhgmAAk4puslc.png", notes: N.deliriumTremens },
  { name: "Delirium Nocturnum", style: "Belgian Dark Strong Ale", abv: "8.5%", ibu: "24", size: "330ml", price: "$35.000", image: "https://framerusercontent.com/images/ANIuSVZGfG8s79TT1sf1nYA3NKw.png", notes: N.deliriumNocturnum },
  { name: "Delirium Nocturnum 750", style: "Belgian Dark Strong Ale", abv: "8.5%", ibu: "24", size: "750ml", price: "$75.000", image: "https://framerusercontent.com/images/jhZIUatHPkxKqYUBLzjyDakXvIw.png", notes: N.deliriumNocturnum },
  { name: "Delirium Christmas", style: "Winter Ale", abv: "10%", ibu: "26", size: "330ml", price: "$37.000", image: "https://framerusercontent.com/images/UAoo8VQDX99LGZum7k0VOQNEx8w.png", notes: N.deliriumChristmas },
  { name: "Delirium Christmas 750", style: "Winter Ale", abv: "10%", ibu: "26", size: "750ml", price: "$77.000", image: "https://framerusercontent.com/images/CiYyB9D0RNySOnEcUUySOvZnThs.png", notes: N.deliriumChristmas },
  { name: "Delirium Argentum", style: "Belgian IPA", abv: "7%", ibu: "48", size: "330ml", price: "$35.000", image: "https://framerusercontent.com/images/LewasCWKZuwFsMm0uaytecgPfU.png", notes: N.deliriumArgentum },
  { name: "Delirium Red", style: "Strong Fruit Beer", abv: "8%", ibu: "20", size: "330ml", price: "$35.000", image: "https://framerusercontent.com/images/nhLKMTN1ulMvjuW36TwoaY8Nz1s.png", notes: N.deliriumRed },
  { name: "Delirium Red 750", style: "Strong Fruit Beer", abv: "8%", ibu: "20", size: "750ml", price: "$75.000", image: "https://framerusercontent.com/images/CB2ZoMX3lNPg1dYGp2Ugkvu3I08.png", notes: N.deliriumRed },
  { name: "Gulden Draak 9000", style: "Quadruple", abv: "10.5%", ibu: "25", size: "330ml", price: "$35.000", image: "https://framerusercontent.com/images/w6hq0XedV0MMFWY6CjolEpp53E.png", notes: N.guldenDraak9000 },
  { name: "Gulden Draak 9000 750", style: "Quadruple", abv: "10.5%", ibu: "25", size: "750ml", price: "$75.000", image: "https://framerusercontent.com/images/mZTV1mSE0ftWy60DGwNHQZwWgg.png", notes: N.guldenDraak9000 },
  { name: "Gulden Draak Classic", style: "Dark Strong Ale", abv: "10.5%", ibu: "30", size: "330ml", price: "$35.000", image: "https://framerusercontent.com/images/92oOJsepQV3FlJSE0Ru8XigZHA.png", notes: N.guldenDraakClassic },
  { name: "Gulden Draak Classic 750", style: "Dark Strong Ale", abv: "10.5%", ibu: "30", size: "750ml", price: "$75.000", image: "https://framerusercontent.com/images/wWVKsyplup5hwbgx3SjjaIHL1C0.png", notes: N.guldenDraakClassic },
  { name: "Abbaye Premier Cru", style: "Blonde Strong Ale", abv: "9%", ibu: "22", size: "330ml", price: "$29.000", image: "https://framerusercontent.com/images/m6gPyQxF1FaLWPWNgJ53XCSwI.png", notes: N.abbayePremierCru },
  { name: "Abbaye Brune", style: "Belgian Dubbel", abv: "6%", ibu: "20", size: "330ml", price: "$29.000", image: "https://framerusercontent.com/images/gIbidMnrUa8PniANfcjZqltKQl0.png", notes: N.abbayeBrune },
  { name: "Abbaye Brune 750", style: "Belgian Dubbel", abv: "6%", ibu: "20", size: "750ml", price: "$69.000", image: "https://framerusercontent.com/images/vYJildLxBXIb1NaDzrLGmR8gG4c.png", notes: N.abbayeBrune },
  { name: "Floris Framboise", style: "Fruit Beer", abv: "3.6%", ibu: "7", size: "330ml", price: "$32.000", image: "https://framerusercontent.com/images/eTIWpHQXw1nvaMaOGdT1ZFtKk.png", notes: N.florisFramboise },
  { name: "Floris Passion", style: "Fruit Beer", abv: "3.6%", ibu: "12", size: "330ml", price: "$32.000", image: "https://framerusercontent.com/images/qracfmDVegCRVrxlFp2Sqrx4Dk.png", notes: N.florisPassion },
  { name: "St Idesbald", style: "Blonde Ale", abv: "6.5%", ibu: "24.5", size: "330ml", price: "$26.000", image: "https://framerusercontent.com/images/z8UTnmWbztKAjLbBasfaPB7zimI.png", notes: N.stIdesbald },
  { name: "Duvel", style: "Belgian Golden Strong Ale", abv: "8.5%", ibu: "33", size: "330ml", price: "$42.000", image: "https://framerusercontent.com/images/SOqyMiN1rOzaBcKBuNPcVfXkNqI.png", notes: N.duvel },
  { name: "Straffe Hendrik 9", style: "Belgian Triple", abv: "9%", ibu: "35", size: "330ml", price: "$38.000", image: "https://framerusercontent.com/images/kP1jRLfVB8Ojpmu5w0QpZd1X71U.png", notes: N.straffeHendrik9 },
  { name: "Straffe Hendrik 11", style: "Belgian Quadruple", abv: "11%", ibu: "35", size: "330ml", price: "$40.000", image: "https://framerusercontent.com/images/0mUjHPVprBOIdbrpdYJQ5xV5uUY.png", notes: N.straffeHendrik11 },
  { name: "Brugse Zot", style: "Blonde Ale", abv: "6%", ibu: "23", size: "330ml", price: "$36.000", image: "https://framerusercontent.com/images/E4dDobmrZnRDdTnEEkwu9Aaek.png", notes: N.brugseZot },
  { name: "Brugse Zot Dubbel", style: "Belgian Triple", abv: "7.5%", ibu: "28", size: "330ml", price: "$36.000", image: "https://framerusercontent.com/images/IPneZVUluhkPtb4v60orkDHpgU.png", notes: N.brugseZotDubbel },
  { name: "La Chouffe", style: "Blonde Ale", abv: "8%", ibu: "20", size: "330ml", price: "$39.000", image: "https://framerusercontent.com/images/sq3ZdhmRjJK56LYJqoUHNveKl4o.png", notes: N.laChouffe },
  { name: "Chimay Blue", style: "Belgian Strong Dark Ale", abv: "9.0%", ibu: "35", size: "330ml", price: "$38.000", image: "https://framerusercontent.com/images/yBnUolXISflUZ7St0VLe71CnsC8.png", notes: N.chimayBlue },
  { name: "Chimay Blue 750", style: "Belgian Strong Dark Ale", abv: "9.0%", ibu: "35", size: "750ml", price: "$79.000", image: "https://framerusercontent.com/images/T6t3sIiu2IcnFFaSsDCfDuXT68.png", notes: N.chimayBlue },
  { name: "Chimay Triple", style: "Belgian Tripel", abv: "8.0%", ibu: "35", size: "330ml", price: "$36.000", image: "https://framerusercontent.com/images/gmGsNmqaVKMs4wWqFoMTMIkLYGQ.png", notes: N.chimayTriple },
  { name: "Chimay Triple 750", style: "Belgian Tripel", abv: "8.0%", ibu: "35", size: "750ml", price: "$76.000", image: "https://framerusercontent.com/images/Sn4YIvIx4AQYR3ePqK8w6cUL2Q.png", notes: N.chimayTriple },
  { name: "Chimay Brown", style: "Belgian Dubbel", abv: "7.0%", ibu: "22", size: "330ml", price: "$36.000", image: "https://framerusercontent.com/images/D6pEMGu6oTqt6YqdDoqVBuOek.png", notes: N.chimayBrown },
  { name: "Chimay Brown 750", style: "Belgian Dubbel", abv: "7.0%", ibu: "22", size: "750ml", price: "$76.000", image: "https://framerusercontent.com/images/AyIyyuDOdxodBOV0gN8gF8GrA.png", notes: N.chimayBrown },
];

export const CERVEZAS_ALEMANIA: BeerItem[] = [
  { name: "Schofferhofer", style: "Hefe Weizen", abv: "5%", ibu: "14", size: "330ml", price: "$20.000", image: "https://framerusercontent.com/images/cH6iE37CJOAQDkZL9842f8B3hFU.png", notes: N.schofferhofer },
  { name: "Schofferhofer", style: "Hefe Weizen", abv: "5%", ibu: "14", size: "500ml", price: "$28.000", image: "https://framerusercontent.com/images/Fmv14sJwsknzEeLKR7jlMi5OQM.png", notes: N.schofferhofer },
  { name: "Schofferhofer Dunkel", style: "Dunkel", abv: "5%", ibu: "11", size: "500ml", price: "$28.000", image: "https://framerusercontent.com/images/a9VfjNyonzJCGc1rEvIvlcuO0.png", notes: N.schofferhoferDunkel },
  { name: "Schofferhofer Grapefruit", style: "Fruit Beer", abv: "2.5%", ibu: "13", size: "330ml", price: "$18.000", image: "https://framerusercontent.com/images/u9YJQJhJXhSUxJETvjVVcyPBOg.png", notes: N.schofferhoferGrapefruit },
  { name: "Erdinger Weissbier", style: "Hefe Weizen", abv: "5.4%", ibu: "13", size: "500ml", price: "$37.000", image: "https://framerusercontent.com/images/P0Ghb5CAB0SKc3A5PHfH3MF8mBE.png", notes: N.erdingerWeissbier },
  { name: "Erdinger Pikantus", style: "Weizenbock", abv: "7.3%", ibu: "10", size: "500ml", price: "$38.000", image: "https://framerusercontent.com/images/3xwk7eBhgJLXJySazHPaCI4nlc.png", notes: N.erdingerPikantus },
  { name: "Clausthaler", style: "Lager (Sin alcohol)", abv: "0.4%", ibu: "32", size: "330ml", price: "$19.000", image: "https://framerusercontent.com/images/3k4t5GuGKvl7ZRC3KSD2MZy0.png", notes: N.clausthaler },
  { name: "DAB", style: "Dortmunder", abv: "5%", ibu: "23", size: "330ml", price: "$18.000", image: "https://framerusercontent.com/images/Pqq3yXq6ODbJzTuvYl7uljJostQ.png", notes: N.dab },
];

export const CERVEZAS_UK: BeerItem[] = [
  { name: "Adnams Innovation IPA", style: "English IPA", abv: "6.7%", ibu: "45", size: "330ml", price: "$26.000", image: "https://framerusercontent.com/images/yKQLEHjrzMWJC7519Vi0h8JXx4.png", notes: N.adnamsInnovationIpa },
  { name: "Adnams Ghost Ship", style: "Pale Ale", abv: "4.6%", ibu: "40", size: "500ml", price: "$28.000", image: "https://framerusercontent.com/images/ZUTrsJbUjqcilKOIMYll12FQ06s.png", notes: N.adnamsGhostShip },
  { name: "Adnams Kobold", style: "English Lager", abv: "4.8%", ibu: "44", size: "500ml", price: "$28.000", image: "https://framerusercontent.com/images/mGPh2d5lTS2MJywbfTo5aiXIA.png", notes: N.adnamsKobold },
  { name: "Adnams Stout", style: "Stout", abv: "4.4%", ibu: "31", size: "500ml", price: "$28.000", image: "https://framerusercontent.com/images/HOTjYtu7Zp9wwohan3ZDbzIEto.png", notes: N.adnamsStout },
];

export const CERVEZAS_CHECA: BeerItem[] = [
  { name: "Prazacka Svetla Desitka", style: "Czech Pale Lager", abv: "4.0%", ibu: "22", size: "500ml", price: "$26.000", image: "https://framerusercontent.com/images/qGr3OYdqSXCAWQRXmhrcTSiJbU.png", notes: N.prazackaSvetla },
];

export const CERVEZAS_ESCOCIA: BeerItem[] = [
  { name: "Innis & Gunn Original", style: "Scottish Ale", abv: "6.6%", ibu: "18", size: "330ml", price: "$35.000", image: "https://framerusercontent.com/images/h7QDceM5b1aYndBu3UbhVRkLA.png", notes: N.innisGunn },
];


export const COMIDA_ENTRADAS: FoodItem[] = [
  { name: "Patatas Bravas", description: "Papas fritas en casco, bañadas con salsa brava de la casa.", price: "$20.000", image: "https://framerusercontent.com/images/aebiBoMWF0Vcdq5lsAHEzxQTcc.webp", spicy: true, pairing: ["Prazacka Svetla Desitka", "Schofferhofer"] },
  { name: "Chicharroncitos", description: "Trocitos de chicharrón carnudo crocante acompañados con guacamole de la casa.", price: "$38.000", image: "https://framerusercontent.com/images/DCreA7X4KCJMjmue8RAlGG4JW0.webp", pairing: ["Duvel", "La Chouffe"] },
  { name: "Tentáculos de Mazorca", description: "Mazorca dulce en forma de tentáculos, con salsa agria de la casa.", price: "$31.000", image: "https://framerusercontent.com/images/xYiLYpOIhpPyiqwMAtp67vBgQGA.webp", pairing: ["Floris Passion", "Schofferhofer Grapefruit"] },
  { name: "Buñuelitos de Queso", description: "Buñuelitos de queso costeño apanados, acompañados con salsa BBQ dulce.", price: "$28.000", image: "https://framerusercontent.com/images/mhFF8DjYA1pGCHTn1OcTQVTGQ.webp", pairing: ["Erdinger Weissbier", "Abbaye Premier Cru"] },
  { name: "Belgium Frites", description: "Papas fritas con receta Belga, acompañadas con mayonesa de la casa.", price: "$15.000", image: "https://framerusercontent.com/images/KQMApKoh27XcEMtW6X4ZiQOT5EU.webp", pairing: ["Duvel", "Adnams Ghost Ship"] },
];

export const COMIDA_FUERTES: FoodItem[] = [
  { name: "Fenli Burguer", description: "Carne de res artesanal, queso paipa, mayonesa de ajo negro, cebolla caramelizada con tocineta en reducción de vinagre balsámico, mermelada de tomates cherry y mayonesa de cilantro. Papas rústicas de acompañamiento.", price: "$44.000", image: "https://framerusercontent.com/images/t7Sq6TSBCXkv9T4wu8DvVyTZh0M.webp", pairing: ["Chimay Blue", "Gulden Draak Classic"] },
  { name: "Beer Lovers Burger", description: "Carne de res artesanal, tocineta, queso chedar, pepinillos encurtidos, mostaza, mayonesa de cilantro y pan de papa artesanal. Papas rústicas de acompañamiento.", price: "$44.000", image: "https://framerusercontent.com/images/0TpXVZKI7hToNV7jqRMz3lahBI.jpg", pairing: ["Straffe Hendrik 9", "Adnams Stout"] },
  { name: "Krispy Chicken Sandwich", description: "Pechuga de pollo apanado, en salsa de miel picante, repollo encurtido, pepinillos encurtidos, mayonesa de cilantro y mayonesa chipottle. Papas rústicas de acompañamiento.", price: "$40.000", image: "https://framerusercontent.com/images/yNfFGdN9lXuAh4F7keRCDopWE9Y.webp", spicy: true, pairing: ["Schofferhofer", "Delirium Red"] },
  { name: "Choripan", description: "Salchicha artesanal, con pan perro artesanal (elige tu salchicha) con chimichurri y mayonesa de la casa. Viene con papas rústicas.", price: "$35.000", image: "https://framerusercontent.com/images/YEYGqhF3Jx8glhtu3r7YIH0tN3A.webp", pairing: ["DAB", "Brugse Zot"] },
  { name: "Bratwurtz", description: "Salchicha artesanal (elige tu salchicha) con una base de miel picante, pepinillos encurtidos, repollo encurtido y mayonesa de la casa. Viene con papas rústicas.", price: "$29.000", image: "https://framerusercontent.com/images/M40ViTWpKxa2YB9ew0usHOOmfk.webp", spicy: true, pairing: ["Erdinger Weissbier", "Schofferhofer Grapefruit"] },
];

export const COMIDA_COMPARTIR: FoodItem[] = [
  { name: "Tapa Española", description: "Jamón serrano 9 meses, chorizo riojano picante, salami finas hiervas, queso de cabra, tostadas de pan en aceite de oliva, orégano y aceitunas.", price: "$55.000", image: "https://framerusercontent.com/images/Ky1dyylj84M7gGOZf0WBSxXivEs.webp", pairing: ["Chimay Triple", "Adnams Ghost Ship"] },
  { name: "Empanaditas Beer Lovers", description: "5 empanaditas caseras con carne desmechada, puré de papa, ají casero y limón.", price: "$26.000", image: "https://framerusercontent.com/images/VnokqnmrTKxWjwmlD1htr363D5o.webp", pairing: ["Brugse Zot Dubbel", "Prazacka Svetla Desitka"] },
  { name: "Tostadas de Chicharrón", description: "3 tortillas de maíz amarillo, con chicharrón carnudo, pico de gallo y salsa chipotle.", price: "$36.000", image: "https://framerusercontent.com/images/QgkzGCJeEZhkhLT7EdmPFMskC4E.webp", spicy: true, pairing: ["Prazacka Svetla Desitka", "La Chouffe"] },
  { name: "Tacos de Morillo", description: "3 tortillas de maíz morado, con carne de morillo, pico de gallo y salsa de chipotle.", price: "$36.000", image: "https://framerusercontent.com/images/Nb45bUKHiU6LRJDKoISIOun4rBI.webp", spicy: true, pairing: ["Chimay Brown", "Schofferhofer"] },
  { name: "Tacos de Pescado", description: "3 tortillas de maíz amarillo, filete de tilapia empanizado, con repollo encurtido y mayonesa de cilantro de la casa.", price: "$36.000", image: "https://framerusercontent.com/images/g2ZeR9jIlANbQ76PLRVyz5jntXg.webp", pairing: ["Adnams Kobold", "Floris Passion"] },
  { name: "Fish & Chips", description: "Tiras de filete de tilapia fresco empanizados, acompañados de salsas de la casa. Papas rústicas de acompañamiento.", price: "$33.000", image: "https://framerusercontent.com/images/HPCHOsT2yXOXFT427nsuSfL6ISg.webp", pairing: ["Adnams Ghost Ship", "Clausthaler"] },
  { name: "Picada Beer Lovers", description: "400g de papa rústica, salchicha artesanal, 3 brochetas de pollo, 4 empanaditas, 100g de buñuelitos de queso, 2 alitas de pollo, ají casero, salsa de la casa, salsa de tomate y limón.", price: "$110.000", image: "https://framerusercontent.com/images/NO43TOHwTqg8cT2W6StUgxBGM.webp", pairing: ["Duvel", "Gulden Draak 9000"] },
];

export const COCKTAILS: FoodItem[] = [
  { name: "Summer Fitz", description: "Schofferhofer Grapefruit, tequila, syrup de panela y zumo de limón.", price: "$42.000", image: "https://framerusercontent.com/images/OSrPEbzGk8jD20qqFXAU4CxAkr4.webp" },
  { name: "Radler", description: "Cerveza Clausthaler sin alcohol, granadina y zumo de limón.", price: "$19.000", image: "https://framerusercontent.com/images/pNJG5qUr2INbwDt2LwfEbaLjsk8.webp" },
  { name: "Gimlet", description: "Ginebra MG, cordial de limón, bitters de naranja, piel de naranja y flor comestible.", price: "$42.000", image: "https://framerusercontent.com/images/FtE9ROLiYoR21WJU1otsmwQ6ZNw.webp" },
  { name: "Manhattan", description: "Jameson, Vermut, gotas de angostura y cereza.", price: "$47.000", image: "https://framerusercontent.com/images/gHFo5Xnvb7BmnM1HME3mg3H3LWU.webp" },
  { name: "Gin Lovers", description: "Ginebra MG, fresa, romero, pimienta dulce, pepino, limón y agua tónica.", price: "$43.000", image: "https://framerusercontent.com/images/1MXHkGoAOojch6KoI1zjE1Lm0ho.jpg" },
  { name: "Negroni", description: "Ginebra MG, Campari, Vermuth Rosso, piel de naranja y bitters de naranja.", price: "$42.000", image: "https://framerusercontent.com/images/XS4wknw1im8vfgYNHdv7iFWLttI.webp" },
  { name: "Doña Margarita", description: "Tequila Olmeca Reposado, Triple Sec y limón.", price: "$42.000", image: "https://framerusercontent.com/images/qLvfHbhOd4zn80rxeRHXi0EkJ0.webp" },
  { name: "Dry Martini", description: "Ginebra MG, Martini Extra Dry y aceitunas.", price: "$45.000", image: "https://framerusercontent.com/images/UwBwbm7WXkoFtssVlARYqrXNkQ.webp" },
  { name: "Moscow Mule", description: "Vodka Absolut, zumo de limón, syrup simple, hierbabuena y ginger beer.", price: "$42.000", image: "https://framerusercontent.com/images/7rSM7ZOYgEWap9VfITNSGBiOl0.webp" },
  { name: "Habana Libre", description: "Zumo de limón, gotas amargas, Coca Cola y Ron Havana Club Añejo.", price: "$38.000", image: "https://framerusercontent.com/images/D1zHPgkrohbvfY90Y9ighnzJA.webp" },
  { name: "Belgium Rose", description: "Whiskey Jameson, ginger y granadina.", price: "$38.000", image: "https://framerusercontent.com/images/pHhe15ogryikMiPNpfmNBxRnkKo.webp" },
  { name: "Orgasmo", description: "Baileys, licor de café y Amaretto.", price: "$45.000", image: "https://framerusercontent.com/images/qaXc9i42WjipU2Q1dmCFzUHEp8.webp" },
  { name: "Lychee Martínez", description: "Vodka Absolut, Soho Lychee y fruta lychee.", price: "$45.000", image: "https://framerusercontent.com/images/mu7qY57PcnqJdn5jFXSaU9qHY.webp" },
  { name: "Mojito", description: "Ron Havana Club Blanco, soda, limón, hierbabuena y syrup de panela.", price: "$42.000", image: "https://framerusercontent.com/images/iUh1KgrBty3l5sTWc5RxvujCvss.webp" },
  { name: "Tinto de Verano", description: "Vino tinto, soda y rodajas de naranja.", price: "$38.000", image: "https://framerusercontent.com/images/gLnJ87fBFGexmHx4DFF3JcIVHS0.webp" },
];

export const MOCKTAILS: FoodItem[] = [
  { name: "Soda Beer Lovers (Frutos Rojos)", description: "Soda de frutos rojos y hierbabuena.", price: "$26.000", image: "https://framerusercontent.com/images/WKS2KJrfTYzPA9TdUWxmnKMGAOo.webp" },
  { name: "Soda Beer Lovers (Amarillos)", description: "Soda de amarillos.", price: "$26.000", image: "https://framerusercontent.com/images/mrAyBs5RVPdTuflW9bn3ujMqlM.webp" },
  { name: "Limonada Mint", description: "Soda, limón y menta.", price: "$18.000", image: "https://framerusercontent.com/images/E0seYfvj30vOLTCaXXOEp5ivY.webp" },
  { name: "Agua — Gaseosa", description: "Botella 300ml.", price: "$10.000", image: "https://framerusercontent.com/images/gbKfKwaBBGnS9uxK3CxLzI46EaM.webp" },
  { name: "Red Bull", description: "Botella 250ml.", price: "$22.000", image: "https://framerusercontent.com/images/rf3avShwSUKypiy9kPhoFzEv2cc.webp" },
  { name: "Tónica Kling", description: "Botella 207ml.", price: "$14.000", image: "https://framerusercontent.com/images/jnwNRlMP2Q63PhE8EYgpSWU4T4.webp" },
  { name: "Ginger Beer Kling", description: "Botella 207ml.", price: "$14.000", image: "https://framerusercontent.com/images/10Vf4BlChlwQjRXh5baKgi03m0c.webp" },
  { name: "Soda Bretaña", description: "Botella 300ml.", price: "$10.000", image: "https://framerusercontent.com/images/SbR2ipaYIA5lIbfLmznhORzLdwc.webp" },
];

export const SHOTS: FoodItem[] = [
  { name: "Belgium Tiger", description: "Amareto, Whiskey Jameson y cereza.", price: "$25.000", image: "https://framerusercontent.com/images/PGIWabkmFNVEfISZNr2R7ZVJsE.webp" },
  { name: "Coffee Stout", description: "Licor de café y Baileys.", price: "$24.000", image: "https://framerusercontent.com/images/OfxbYqtz5SyrMTOQuocQymCtaw.webp" },
  { name: "Huyghe Green", description: "Licor de menta, Baileys y Vodka.", price: "$25.000", image: "https://framerusercontent.com/images/4nHOuJmmvMuusONz7eGN0OJBLSY.webp" },
  { name: "Roze Olifant", description: "Vodka, Triple Sec, Baileys y Grenadina.", price: "$25.000", image: "https://framerusercontent.com/images/CNYHDTV7f5OUtT4bxtK9N1bBp2A.webp" },
];

export const LICORES: Record<string, SimpleItem[]> = {
  Aguardientes: [
    { name: "Aguardiente Antioqueño 750ml", price: "$170.000" },
    { name: "Aguardiente Antioqueño Trago", price: "$32.000" },
    { name: "Aguardiente Antioqueño 375ml", price: "$90.000" },
    { name: "Aguardiente Antioqueño Trago Doble", price: "$50.000" },
    { name: "Aguardiente Amarillo 750ml", price: "$180.000" },
    { name: "Aguardiente Amarillo 375ml", price: "$95.000" },
    { name: "Aguardiente Amarillo Trago", price: "$34.000" },
  ],
  Ginebra: [
    { name: "Beefeater Dry Gin 750ml", price: "$260.000" },
    { name: "Ginebra Hendricks Trago", price: "$38.000" },
    { name: "Ginebra Hendricks 750ml", price: "$460.000" },
    { name: "Gin Trago", price: "$30.000" },
  ],
  Ron: [
    { name: "Ron Plantation 750ml", price: "$300.000" },
    { name: "Ron Plantation Trago", price: "$32.000" },
    { name: "Ron Sailor Jerry 700ml", price: "$270.000" },
    { name: "Ron Sailor Jerry Trago", price: "$29.000" },
  ],
  Tequila: [
    { name: "Tequila Don Julio Reposado 700ml", price: "$560.000" },
    { name: "Tequila Don Julio Reposado Trago", price: "$48.000" },
    { name: "Tequila Olmeca Reposado Trago", price: "$29.000" },
  ],
  Vino: [
    { name: "Tinto de Verano", price: "$38.000" },
    { name: "Vino de la Casa (Tinto o Blanco)", price: "$170.000" },
  ],
  Whisky: [
    { name: "Whisky Macallan 12 Años 700ml", price: "$750.000" },
    { name: "Whisky Macallan 12 Años Trago Doble", price: "$90.000" },
    { name: "Whisky Macallan 12 Años Trago", price: "$60.000" },
    { name: "Whiskey Jack Daniel's 750ml", price: "$350.000" },
    { name: "Whiskey Jack Daniel's 375ml", price: "$210.000" },
    { name: "Whisky Glenlivet 12 Años 750ml", price: "$480.000" },
    { name: "Whisky Glenlivet 12 Años Trago", price: "$50.000" },
    { name: "Whisky Jameson 700ml", price: "$310.000" },
    { name: "Whisky Jameson 350ml", price: "$175.000" },
    { name: "Whisky Jameson Trago", price: "$26.000" },
    { name: "Whisky Buchanan's 12 Años 750ml", price: "$400.000" },
    { name: "Whisky Buchanan's 12 Años 375ml", price: "$250.000" },
    { name: "Whisky Buchanan's 12 Años Trago", price: "$36.000" },
    { name: "Whisky Buchanan's 12 Años Trago Doble", price: "$60.000" },
    { name: "Whisky Glenfiddich 12 Años 700ml", price: "$500.000" },
    { name: "Whisky Glenfiddich 12 Años Trago", price: "$55.000" },
  ],
};

export const NOSOTROS_GALLERY = [
  "https://framerusercontent.com/images/LvoUWJ5oSj3naWlmCtAw1tiS6D4.jpg",
  "https://framerusercontent.com/images/rf5F6zLiTUTpCKsiAiBF9PkUecI.jpg",
  "https://framerusercontent.com/images/MHeDkOFUgJP1v880Yzit7eLGE4.jpg",
  "https://framerusercontent.com/images/BKDcCe4PJNL8bWb3bCt04o3dDyc.jpg",
  "https://framerusercontent.com/images/U67wjYSOJtePdHV22qoP1rc.jpg",
  "https://framerusercontent.com/images/a2L0PLN8XdkmyfoJe1KyNBSpEHY.jpg",
  "https://framerusercontent.com/images/n6U0Gh14O1p5LiCGj6sdHa5jA.jpg",
  "https://framerusercontent.com/images/RyF8bT2mVMKZeJ3FtK0Rdtsn1U.jpg",
  "https://framerusercontent.com/images/q4ZAeCFofGqWOw5QfC2iLMFuqo.jpg",
  "https://framerusercontent.com/images/3Pr8t18Vc0vyZ1UgxM9GGMEqg6o.jpg",
  "https://framerusercontent.com/images/Pdnv1K4tw1fscYQS7FzOXudhks.jpg",
  "https://framerusercontent.com/images/C9lZ28Ouk0MtX6XgtxzUu4q8pRU.jpg",
];

export const CATEGORIES = [
  { num: "01", label: "Draft", to: "/draft", caption: "Cervezas de barril" },
  { num: "02", label: "Cervezas", to: "/cervezas", caption: "Bélgica · Alemania · UK · Checa · Escocia" },
  { num: "03", label: "Comida", to: "/comida", caption: "Para acompañar" },
  { num: "04", label: "Bebidas", to: "/bebidas", caption: "Cocktails & mocktails" },
  { num: "05", label: "Licores", to: "/licores", caption: "Selección exclusiva" },
  { num: "06", label: "Nosotros", to: "/nosotros", caption: "Nuestra historia" },
];

export type MoodBeer = {
  name: string;
  image: string;
  price: string;
  reason: string;
  category: string;
};

export type Mood = {
  id: string;
  emoji: string;
  label: string;
  tagline: string;
  beers: MoodBeer[];
};

export const MOODS: Mood[] = [
  {
    id: "celebrar",
    emoji: "🎉",
    label: "Para celebrar",
    tagline: "Algo con carácter, para un buen momento.",
    beers: [
      { name: "Duvel", image: "https://framerusercontent.com/images/SOqyMiN1rOzaBcKBuNPcVfXkNqI.png", price: "$42.000", reason: "Dorada, seca y con burbuja fina — perfecta para un brindis.", category: "/cervezas" },
      { name: "Chimay Triple", image: "https://framerusercontent.com/images/gmGsNmqaVKMs4wWqFoMTMIkLYGQ.png", price: "$36.000", reason: "Trapense clásica, elegante y festiva.", category: "/cervezas" },
    ],
  },
  {
    id: "tranquilo",
    emoji: "🌙",
    label: "Día tranquilo",
    tagline: "Ligera, fácil de tomar, sin apuro.",
    beers: [
      { name: "St Idesbald", image: "https://framerusercontent.com/images/z8UTnmWbztKAjLbBasfaPB7zimI.png", price: "$26.000", reason: "Blonde suave y equilibrada, ideal para relajarte.", category: "/cervezas" },
      { name: "Brugse Zot", image: "https://framerusercontent.com/images/E4dDobmrZnRDdTnEEkwu9Aaek.png", price: "$36.000", reason: "Refrescante, poco intensa, para una charla lenta.", category: "/cervezas" },
    ],
  },
  {
    id: "calor",
    emoji: "☀️",
    label: "Calor intenso",
    tagline: "Refrescante y ligera.",
    beers: [
      { name: "Prazacka Svetla Desitka", image: "https://framerusercontent.com/images/qGr3OYdqSXCAWQRXmhrcTSiJbU.png", price: "$26.000", reason: "Pilsner checa, crujiente y muy refrescante.", category: "/cervezas" },
      { name: "Floris Passion", image: "https://framerusercontent.com/images/qracfmDVegCRVrxlFp2Sqrx4Dk.png", price: "$32.000", reason: "Trigo con maracuyá — tropical y helada.", category: "/cervezas" },
    ],
  },
  {
    id: "noche",
    emoji: "🔥",
    label: "Noche de charla",
    tagline: "Con cuerpo, para conversar despacio.",
    beers: [
      { name: "Chimay Blue", image: "https://framerusercontent.com/images/yBnUolXISflUZ7St0VLe71CnsC8.png", price: "$38.000", reason: "Oscura, especiada, se disfruta con calma.", category: "/cervezas" },
      { name: "Gulden Draak Classic", image: "https://framerusercontent.com/images/92oOJsepQV3FlJSE0Ru8XigZHA.png", price: "$35.000", reason: "Dark strong con carácter para una velada larga.", category: "/cervezas" },
    ],
  },
  {
    id: "fiesta",
    emoji: "🎊",
    label: "Fiesta con amigos",
    tagline: "Jugosa, llamativa, para compartir.",
    beers: [
      { name: "Lino", image: "https://framerusercontent.com/images/BOiQD9VwIRvspTbqRCf4o2uVfXc.png", price: "$24.000", reason: "NEIPA jugosa y frutal, la favorita para grupos.", category: "/draft" },
      { name: "La Chouffe", image: "https://framerusercontent.com/images/sq3ZdhmRjJK56LYJqoUHNveKl4o.png", price: "$39.000", reason: "Blonde con cilantro, fresca y distinta.", category: "/cervezas" },
    ],
  },
  {
    id: "frio",
    emoji: "❄️",
    label: "Clima frío",
    tagline: "Cálida y con cuerpo.",
    beers: [
      { name: "Erdinger Pikantus", image: "https://framerusercontent.com/images/3xwk7eBhgJLXJySazHPaCI4nlc.png", price: "$38.000", reason: "Weizenbock intensa, ideal para el frío bogotano.", category: "/cervezas" },
      { name: "Innis & Gunn Original", image: "https://framerusercontent.com/images/h7QDceM5b1aYndBu3UbhVRkLA.png", price: "$35.000", reason: "Madurada en roble, notas de vainilla y calidez.", category: "/cervezas" },
    ],
  },
];

export const OPENING_HOURS = [
     { day: "Lunes", hours: "14:30 – 22:00" },
     { day: "Martes", hours: "14:30 – 22:00" },
     { day: "Miércoles", hours: "14:30 – 23:00" },
     { day: "Jueves", hours: "14:30 – 24:00" },
     { day: "Viernes", hours: "13:00 – 01:00" },
     { day: "Sábado", hours: "13:00 – 01:00" },
     { day: "Domingo", hours: "Sin servicio" },
     { day: "Festivos", hours: "Sin servicio" },
   ];

   export const MAPS_URL = "https://maps.app.goo.gl/3FDKZa3Zsdco8rV1A";
