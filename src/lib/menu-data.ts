// Beer Lovers — menú original (textos e imágenes desde stacks.menu/beerlovers).
// Las imágenes se referencian directamente desde el CDN de Framer del menú original.

export type BeerItem = {
  name: string;
  style: string;
  abv: string;
  ibu: string;
  size: string;
  price: string;
  image: string;
};

export type FoodItem = {
  name: string;
  description: string;
  price: string;
  image: string;
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
  "CHIMAY", "DUVEL", "SCHÖFFERHOFER", "BREWDOG", "ERDINGER",
  "DELIRIUM", "GULDEN DRAAK", "LA CHOUFFE", "ADNAMS", "STRAFFE HENDRIK",
  "BRUGSE ZOT", "FLORIS", "ABBAYE", "WEIHENSTEPHAN", "INNIS & GUNN",
];

export const DRAFT: BeerItem[] = [
  { name: "Delirium Tremens", style: "Belgian Golden Strong Ale", abv: "8.5%", ibu: "24.5", size: "330ml — 500ml", price: "$35.000 — $42.000", image: "https://framerusercontent.com/images/MypcHJhOlICI3Bk0asqKTYSxSsA.png" },
  { name: "Delirium Red", style: "Strong Fruit Beer", abv: "8%", ibu: "20", size: "330ml — 500ml", price: "$35.000 — $42.000", image: "https://framerusercontent.com/images/gSB2YNHQPDG4v37uRb4NZ5J28w.png" },
  { name: "Gulden Draak", style: "Según disponibilidad", abv: "10.5%", ibu: "25 — 30", size: "330ml — 500ml", price: "$35.000 — $42.000", image: "https://framerusercontent.com/images/GTqx0orNnOyGQVrmzEzznCibY.png" },
  { name: "Adnams Ghost Ship", style: "Pale Ale", abv: "4.6%", ibu: "40", size: "500ml", price: "$28.000", image: "https://framerusercontent.com/images/hTuaURI5iGNuAOlRrLoMSVCow.png" },
  { name: "Lino", style: "New England IPA (NEIPA)", abv: "7%", ibu: "45", size: "330ml", price: "$24.000", image: "https://framerusercontent.com/images/BOiQD9VwIRvspTbqRCf4o2uVfXc.png" },
];

export const CERVEZAS_BELGICA: BeerItem[] = [
  { name: "Delirium Tremens", style: "Belgian Golden Strong Ale", abv: "8.5%", ibu: "24.5", size: "330ml", price: "$35.000", image: "https://framerusercontent.com/images/eo25TEknojTk1Nas0UuCKzRbcg.png" },
  { name: "Delirium Tremens 750", style: "Belgian Golden Strong Ale", abv: "8.5%", ibu: "24.5", size: "750ml", price: "$75.000", image: "https://framerusercontent.com/images/qqADbNkCddDAMHEhgmAAk4puslc.png" },
  { name: "Delirium Nocturnum", style: "Belgian Dark Strong Ale", abv: "8.5%", ibu: "24", size: "330ml", price: "$35.000", image: "https://framerusercontent.com/images/ANIuSVZGfG8s79TT1sf1nYA3NKw.png" },
  { name: "Delirium Nocturnum 750", style: "Belgian Dark Strong Ale", abv: "8.5%", ibu: "24", size: "750ml", price: "$75.000", image: "https://framerusercontent.com/images/jhZIUatHPkxKqYUBLzjyDakXvIw.png" },
  { name: "Delirium Christmas", style: "Winter Ale", abv: "10%", ibu: "26", size: "330ml", price: "$37.000", image: "https://framerusercontent.com/images/UAoo8VQDX99LGZum7k0VOQNEx8w.png" },
  { name: "Delirium Christmas 750", style: "Winter Ale", abv: "10%", ibu: "26", size: "750ml", price: "$77.000", image: "https://framerusercontent.com/images/CiYyB9D0RNySOnEcUUySOvZnThs.png" },
  { name: "Delirium Argentum", style: "Belgian IPA", abv: "7%", ibu: "48", size: "330ml", price: "$35.000", image: "https://framerusercontent.com/images/LewasCWKZuwFsMm0uaytecgPfU.png" },
  { name: "Delirium Red", style: "Strong Fruit Beer", abv: "8%", ibu: "20", size: "330ml", price: "$35.000", image: "https://framerusercontent.com/images/nhLKMTN1ulMvjuW36TwoaY8Nz1s.png" },
  { name: "Delirium Red 750", style: "Strong Fruit Beer", abv: "8%", ibu: "20", size: "750ml", price: "$75.000", image: "https://framerusercontent.com/images/CB2ZoMX3lNPg1dYGp2Ugkvu3I08.png" },
  { name: "Gulden Draak 9000", style: "Quadruple", abv: "10.5%", ibu: "25", size: "330ml", price: "$35.000", image: "https://framerusercontent.com/images/w6hq0XedV0MMFWY6CjolEpp53E.png" },
  { name: "Gulden Draak 9000 750", style: "Quadruple", abv: "10.5%", ibu: "25", size: "750ml", price: "$75.000", image: "https://framerusercontent.com/images/mZTV1mSE0ftWy60DGwNHQZwWgg.png" },
  { name: "Gulden Draak Classic", style: "Dark Strong Ale", abv: "10.5%", ibu: "30", size: "330ml", price: "$35.000", image: "https://framerusercontent.com/images/92oOJsepQV3FlJSE0Ru8XigZHA.png" },
  { name: "Gulden Draak Classic 750", style: "Dark Strong Ale", abv: "10.5%", ibu: "30", size: "750ml", price: "$75.000", image: "https://framerusercontent.com/images/wWVKsyplup5hwbgx3SjjaIHL1C0.png" },
  { name: "Abbaye Premier Cru", style: "Blonde Strong Ale", abv: "9%", ibu: "22", size: "330ml", price: "$29.000", image: "https://framerusercontent.com/images/m6gPyQxF1FaLWPWNgJ53XCSwI.png" },
  { name: "Abbaye Brune", style: "Belgian Dubbel", abv: "6%", ibu: "20", size: "330ml", price: "$29.000", image: "https://framerusercontent.com/images/gIbidMnrUa8PniANfcjZqltKQl0.png" },
  { name: "Abbaye Brune 750", style: "Belgian Dubbel", abv: "6%", ibu: "20", size: "750ml", price: "$69.000", image: "https://framerusercontent.com/images/vYJildLxBXIb1NaDzrLGmR8gG4c.png" },
  { name: "Floris Framboise", style: "Fruit Beer", abv: "3.6%", ibu: "7", size: "330ml", price: "$32.000", image: "https://framerusercontent.com/images/eTIWpHQXw1nvaMaOGdT1ZFtKk.png" },
  { name: "Floris Passion", style: "Fruit Beer", abv: "3.6%", ibu: "12", size: "330ml", price: "$32.000", image: "https://framerusercontent.com/images/qracfmDVegCRVrxlFp2Sqrx4Dk.png" },
  { name: "St Idesbald", style: "Blonde Ale", abv: "6.5%", ibu: "24.5", size: "330ml", price: "$26.000", image: "https://framerusercontent.com/images/z8UTnmWbztKAjLbBasfaPB7zimI.png" },
  { name: "Duvel", style: "Belgian Golden Strong Ale", abv: "8.5%", ibu: "33", size: "330ml", price: "$42.000", image: "https://framerusercontent.com/images/SOqyMiN1rOzaBcKBuNPcVfXkNqI.png" },
  { name: "Straffe Hendrik 9", style: "Belgian Triple", abv: "9%", ibu: "35", size: "330ml", price: "$38.000", image: "https://framerusercontent.com/images/kP1jRLfVB8Ojpmu5w0QpZd1X71U.png" },
  { name: "Straffe Hendrik 11", style: "Belgian Quadruple", abv: "11%", ibu: "35", size: "330ml", price: "$40.000", image: "https://framerusercontent.com/images/0mUjHPVprBOIdbrpdYJQ5xV5uUY.png" },
  { name: "Brugse Zot", style: "Blonde Ale", abv: "6%", ibu: "23", size: "330ml", price: "$36.000", image: "https://framerusercontent.com/images/E4dDobmrZnRDdTnEEkwu9Aaek.png" },
  { name: "Brugse Zot Dubbel", style: "Belgian Triple", abv: "7.5%", ibu: "28", size: "330ml", price: "$36.000", image: "https://framerusercontent.com/images/IPneZVUluhkPtb4v60orkDHpgU.png" },
  { name: "La Chouffe", style: "Blonde Ale", abv: "8%", ibu: "20", size: "330ml", price: "$39.000", image: "https://framerusercontent.com/images/sq3ZdhmRjJK56LYJqoUHNveKl4o.png" },
  { name: "Chimay Blue", style: "Belgian Strong Dark Ale", abv: "9.0%", ibu: "35", size: "330ml", price: "$38.000", image: "https://framerusercontent.com/images/yBnUolXISflUZ7St0VLe71CnsC8.png" },
  { name: "Chimay Blue 750", style: "Belgian Strong Dark Ale", abv: "9.0%", ibu: "35", size: "750ml", price: "$79.000", image: "https://framerusercontent.com/images/T6t3sIiu2IcnFFaSsDCfDuXT68.png" },
  { name: "Chimay Triple", style: "Belgian Tripel", abv: "8.0%", ibu: "35", size: "330ml", price: "$36.000", image: "https://framerusercontent.com/images/gmGsNmqaVKMs4wWqFoMTMIkLYGQ.png" },
  { name: "Chimay Triple 750", style: "Belgian Tripel", abv: "8.0%", ibu: "35", size: "750ml", price: "$76.000", image: "https://framerusercontent.com/images/Sn4YIvIx4AQYR3ePqK8w6cUL2Q.png" },
  { name: "Chimay Brown", style: "Belgian Dubbel", abv: "7.0%", ibu: "22", size: "330ml", price: "$36.000", image: "https://framerusercontent.com/images/D6pEMGu6oTqt6YqdDoqVBuOek.png" },
  { name: "Chimay Brown 750", style: "Belgian Dubbel", abv: "7.0%", ibu: "22", size: "750ml", price: "$76.000", image: "https://framerusercontent.com/images/AyIyyuDOdxodBOV0gN8gF8GrA.png" },
];

export const CERVEZAS_ALEMANIA: BeerItem[] = [
  { name: "Schofferhofer", style: "Hefe Weizen", abv: "5%", ibu: "14", size: "330ml", price: "$20.000", image: "https://framerusercontent.com/images/cH6iE37CJOAQDkZL9842f8B3hFU.png" },
  { name: "Schofferhofer", style: "Hefe Weizen", abv: "5%", ibu: "14", size: "500ml", price: "$28.000", image: "https://framerusercontent.com/images/Fmv14sJwsknzEeLKR7jlMi5OQM.png" },
  { name: "Schofferhofer Dunkel", style: "Dunkel", abv: "5%", ibu: "11", size: "500ml", price: "$28.000", image: "https://framerusercontent.com/images/a9VfjNyonzJCGc1rEvIvlcuO0.png" },
  { name: "Schofferhofer Grapefruit", style: "Fruit Beer", abv: "2.5%", ibu: "13", size: "330ml", price: "$18.000", image: "https://framerusercontent.com/images/u9YJQJhJXhSUxJETvjVVcyPBOg.png" },
  { name: "Erdinger Weissbier", style: "Hefe Weizen", abv: "5.4%", ibu: "13", size: "500ml", price: "$37.000", image: "https://framerusercontent.com/images/P0Ghb5CAB0SKc3A5PHfH3MF8mBE.png" },
  { name: "Erdinger Pikantus", style: "Weizenbock", abv: "7.3%", ibu: "10", size: "500ml", price: "$38.000", image: "https://framerusercontent.com/images/3xwk7eBhgJLXJySazHPaCI4nlc.png" },
  { name: "Clausthaler", style: "Lager (Sin alcohol)", abv: "0.4%", ibu: "32", size: "330ml", price: "$19.000", image: "https://framerusercontent.com/images/3k4t5GuGKvl7ZRC3KSD2MZy0.png" },
  { name: "DAB", style: "Dortmunder", abv: "5%", ibu: "23", size: "330ml", price: "$18.000", image: "https://framerusercontent.com/images/Pqq3yXq6ODbJzTuvYl7uljJostQ.png" },
];

export const CERVEZAS_OTROS: BeerItem[] = [
  { name: "Adnams Innovation IPA", style: "English IPA", abv: "6.7%", ibu: "45", size: "330ml", price: "$26.000", image: "https://framerusercontent.com/images/yKQLEHjrzMWJC7519Vi0h8JXx4.png" },
  { name: "Adnams Ghost Ship", style: "Pale Ale", abv: "4.6%", ibu: "40", size: "500ml", price: "$28.000", image: "https://framerusercontent.com/images/ZUTrsJbUjqcilKOIMYll12FQ06s.png" },
  { name: "Adnams Kobold", style: "English Lager", abv: "4.8%", ibu: "44", size: "500ml", price: "$28.000", image: "https://framerusercontent.com/images/mGPh2d5lTS2MJywbfTo5aiXIA.png" },
  { name: "Adnams Stout", style: "Stout", abv: "4.4%", ibu: "31", size: "500ml", price: "$28.000", image: "https://framerusercontent.com/images/HOTjYtu7Zp9wwohan3ZDbzIEto.png" },
  { name: "Prazacka Svetla Desitka", style: "Czech Pale Lager", abv: "4.0%", ibu: "22", size: "500ml", price: "$26.000", image: "https://framerusercontent.com/images/qGr3OYdqSXCAWQRXmhrcTSiJbU.png" },
  { name: "Innis & Gunn Original", style: "Scottish Ale", abv: "6.6%", ibu: "18", size: "330ml", price: "$35.000", image: "https://framerusercontent.com/images/h7QDceM5b1aYndBu3UbhVRkLA.png" },
];

export const COMIDA_ENTRADAS: FoodItem[] = [
  { name: "Patatas Bravas", description: "Papas fritas en casco, bañadas con salsa brava de la casa.", price: "$20.000", image: "https://framerusercontent.com/images/aebiBoMWF0Vcdq5lsAHEzxQTcc.webp" },
  { name: "Chicharroncitos", description: "Trocitos de chicharrón carnudo crocante acompañados con guacamole de la casa.", price: "$38.000", image: "https://framerusercontent.com/images/DCreA7X4KCJMjmue8RAlGG4JW0.webp" },
  { name: "Tentáculos de Mazorca", description: "Mazorca dulce en forma de tentáculos, con salsa agria de la casa.", price: "$31.000", image: "https://framerusercontent.com/images/xYiLYpOIhpPyiqwMAtp67vBgQGA.webp" },
  { name: "Buñuelitos de Queso", description: "Buñuelitos de queso costeño apanados, acompañados con salsa BBQ dulce.", price: "$28.000", image: "https://framerusercontent.com/images/mhFF8DjYA1pGCHTn1OcTQVTGQ.webp" },
  { name: "Belgium Frites", description: "Papas fritas con receta Belga, acompañadas con mayonesa de la casa.", price: "$15.000", image: "https://framerusercontent.com/images/KQMApKoh27XcEMtW6X4ZiQOT5EU.webp" },
];

export const COMIDA_FUERTES: FoodItem[] = [
  { name: "Fenli Burguer", description: "Carne de res artesanal, queso paipa, mayonesa de ajo negro, cebolla caramelizada con tocineta en reducción de vinagre balsámico, mermelada de tomates cherry y mayonesa de cilantro. Papas rústicas de acompañamiento.", price: "$44.000", image: "https://framerusercontent.com/images/t7Sq6TSBCXkv9T4wu8DvVyTZh0M.webp" },
  { name: "Beer Lovers Burger", description: "Carne de res artesanal, tocineta, queso chedar, pepinillos encurtidos, mostaza, mayonesa de cilantro y pan de papa artesanal. Papas rústicas de acompañamiento.", price: "$44.000", image: "https://framerusercontent.com/images/0TpXVZKI7hToNV7jqRMz3lahBI.jpg" },
  { name: "Krispy Chicken Sandwich", description: "Pechuga de pollo apanado, en salsa de miel picante, repollo encurtido, pepinillos encurtidos, mayonesa de cilantro y mayonesa chipottle. Papas rústicas de acompañamiento.", price: "$40.000", image: "https://framerusercontent.com/images/yNfFGdN9lXuAh4F7keRCDopWE9Y.webp" },
  { name: "Choripan", description: "Salchicha artesanal, con pan perro artesanal (elige tu salchicha) con chimichurri y mayonesa de la casa. Viene con papas rústicas.", price: "$35.000", image: "https://framerusercontent.com/images/YEYGqhF3Jx8glhtu3r7YIH0tN3A.webp" },
  { name: "Bratwurtz", description: "Salchicha artesanal (elige tu salchicha) con una base de miel picante, pepinillos encurtidos, repollo encurtido y mayonesa de la casa. Viene con papas rústicas.", price: "$29.000", image: "https://framerusercontent.com/images/M40ViTWpKxa2YB9ew0usHOOmfk.webp" },
];

export const COMIDA_COMPARTIR: FoodItem[] = [
  { name: "Tapa Española", description: "Jamón serrano 9 meses, chorizo riojano picante, salami finas hiervas, queso de cabra, tostadas de pan en aceite de oliva, orégano y aceitunas.", price: "$55.000", image: "https://framerusercontent.com/images/Ky1dyylj84M7gGOZf0WBSxXivEs.webp" },
  { name: "Empanaditas Beer Lovers", description: "5 empanaditas caseras con carne desmechada, puré de papa, ají casero y limón.", price: "$26.000", image: "https://framerusercontent.com/images/VnokqnmrTKxWjwmlD1htr363D5o.webp" },
  { name: "Tostadas de Chicharrón", description: "3 tortillas de maíz amarillo, con chicharrón carnudo, pico de gallo y salsa chipotle.", price: "$36.000", image: "https://framerusercontent.com/images/QgkzGCJeEZhkhLT7EdmPFMskC4E.webp" },
  { name: "Tacos de Morillo", description: "3 tortillas de maíz morado, con carne de morillo, pico de gallo y salsa de chipotle.", price: "$36.000", image: "https://framerusercontent.com/images/Nb45bUKHiU6LRJDKoISIOun4rBI.webp" },
  { name: "Tacos de Pescado", description: "3 tortillas de maíz amarillo, filete de tilapia empanizado, con repollo encurtido y mayonesa de cilantro de la casa.", price: "$36.000", image: "https://framerusercontent.com/images/g2ZeR9jIlANbQ76PLRVyz5jntXg.webp" },
  { name: "Fish & Chips", description: "Tiras de filete de tilapia fresco empanizados, acompañados de salsas de la casa. Papas rústicas de acompañamiento.", price: "$33.000", image: "https://framerusercontent.com/images/HPCHOsT2yXOXFT427nsuSfL6ISg.webp" },
  { name: "Picada Beer Lovers", description: "400g de papa rústica, salchicha artesanal, 3 brochetas de pollo, 4 empanaditas, 100g de buñuelitos de queso, 2 alitas de pollo, ají casero, salsa de la casa, salsa de tomate y limón.", price: "$110.000", image: "https://framerusercontent.com/images/NO43TOHwTqg8cT2W6StUgxBGM.webp" },
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
  { num: "02", label: "Cervezas", to: "/cervezas", caption: "Bélgica · Alemania · Otros" },
  { num: "03", label: "Comida", to: "/comida", caption: "Para acompañar" },
  { num: "04", label: "Bebidas", to: "/bebidas", caption: "Cocktails & mocktails" },
  { num: "05", label: "Licores", to: "/licores", caption: "Selección exclusiva" },
  { num: "06", label: "Nosotros", to: "/nosotros", caption: "Nuestra historia" },
];
