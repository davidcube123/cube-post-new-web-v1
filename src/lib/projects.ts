// Legacy archive uses release year. September 2026 additions retain the year supplied by CUBE; discrepancies are documented in review/catalogue-update-2026.json.
export interface Project {
  title: string;
  poster: string;
  director?: string;
  dop?: string;
  lmt?: string;
  omdbTitle: string;
  year?: number;
  yearSource?: string;
  featured?: boolean;
  imdbUrl?: string;
  searchAliases?: string[];
  posterFit?: "contain";
  imageKind?: "publicity";
}
export const projects: Project[] = [
  // Additional title supplied by CUBE.
{
  "title": "53 domingos",
  "year": 2026,
  "yearSource": "Alta facilitada por CUBE en conversación",
  "poster": "/catalogue/update-2026-53-domingos.jpg",
  "director": "Cesc Gay",
  "dop": "Andreu Rebes",
  "omdbTitle": "53 domingos",
  "featured": true,
  "posterFit": "contain",
  "imdbUrl": "https://www.imdb.com/es-es/title/tt32155665/",
  "searchAliases": [
    "53 Sundays"
  ]
},
  // Additions from titulos Web.xlsx; workbook order and highlight flags preserved.
{
  "title": "Cronos",
  "year": 2026,
  "yearSource": "titulos Web.xlsx — clasificación facilitada por CUBE",
  "poster": "/catalogue/update-2026-cronos.jpg",
  "director": "Fernando Gonzalez Molina",
  "omdbTitle": "Cronos",
  "featured": true,
  "posterFit": "contain",
  "dop": "Pau Castejon",
  "imdbUrl": "https://www.imdb.com/title/tt35223471/"
},
{
  "title": "Monstruosa Mía",
  "year": 2026,
  "yearSource": "titulos Web.xlsx — clasificación facilitada por CUBE",
  "poster": "/catalogue/update-2026-mia.jpg",
  "director": "Verena Fels",
  "omdbTitle": "Monstruosa Mía",
  "featured": false,
  "posterFit": "contain",
  "imdbUrl": "https://www.imdb.com/title/tt38807889/",
  "searchAliases": [
    "Monster Mia"
  ]
},
{
  "title": "Cinco minutos más",
  "year": 2026,
  "yearSource": "titulos Web.xlsx — clasificación facilitada por CUBE",
  "poster": "/catalogue/update-2026-cinco.jpg",
  "director": "Javi Ruiz Caldera",
  "omdbTitle": "Cinco minutos más",
  "featured": true,
  "posterFit": "contain",
  "dop": "Sergi Vilanova",
  "imdbUrl": "https://www.imdb.com/title/tt38632412/",
  "searchAliases": [
    "5 minutos más"
  ]
},
{
  "title": "Escape Room 2",
  "year": 2026,
  "yearSource": "titulos Web.xlsx — clasificación facilitada por CUBE",
  "poster": "/catalogue/update-2026-escape.jpg",
  "director": "hector Claramunt",
  "omdbTitle": "Escape Room 2",
  "featured": true,
  "posterFit": "contain",
  "dop": "Xavi Gimenez",
  "imdbUrl": "https://www.imdb.com/title/tt39119561/"
},
{
  "title": "Ruega por nosotras",
  "year": 2026,
  "yearSource": "titulos Web.xlsx — clasificación facilitada por CUBE",
  "poster": "/catalogue/update-2026-ruega.jpg",
  "director": "Daniel Monzon",
  "omdbTitle": "Ruega por nosotras",
  "featured": true,
  "posterFit": "contain",
  "dop": "Carles Gusi",
  "imdbUrl": "https://www.imdb.com/title/tt37729109/"
},
{
  "title": "Abandonados",
  "year": 2026,
  "yearSource": "titulos Web.xlsx — clasificación facilitada por CUBE",
  "poster": "/catalogue/update-2026-abandonados.jpg",
  "director": "Carlos Alonso Ojea",
  "omdbTitle": "Abandonados",
  "featured": true,
  "posterFit": "contain",
  "dop": "Yuse Riera",
  "imdbUrl": "https://www.imdb.com/title/tt42416598/"
},
{
  "title": "Apocalipsis Z: Nuevo mundo",
  "year": 2026,
  "yearSource": "titulos Web.xlsx — clasificación facilitada por CUBE",
  "poster": "/catalogue/update-2026-apocalipsis-poster.png",
  "director": "Carles Torrens",
  "omdbTitle": "Apocalipsis Z: Nuevo mundo",
  "imdbUrl": "https://www.imdb.com/es-es/title/tt37522541/",
  "featured": true,
  "posterFit": "contain",
  "dop": "Elias M. Felix",
  "searchAliases": [
    "Apocalipsis Z II",
    "Apocalipsis Z: Un nuevo mundo",
    "Apocalipsis Z: Nuevo mundo"
  ]
},
{
  "title": "Más allá de la sociedad",
  "year": 2026,
  "yearSource": "titulos Web.xlsx — clasificación facilitada por CUBE",
  "poster": "/catalogue/update-2026-masalla.jpg",
  "director": "J.Bayona / Carlos Torres",
  "omdbTitle": "Más allá de la sociedad",
  "featured": true,
  "posterFit": "contain",
  "dop": "Tomas Ybarra",
  "imdbUrl": "https://www.imdb.com/title/tt43659288/",
  "imageKind": "publicity"
},
{
  "title": "En nombre de otro",
  "year": 2026,
  "yearSource": "titulos Web.xlsx — clasificación facilitada por CUBE",
  "poster": "/catalogue/update-2026-nombre.jpg",
  "director": "Oriol Paulo",
  "omdbTitle": "En nombre de otro",
  "featured": true,
  "posterFit": "contain",
  "dop": "Bernat Bosch",
  "imdbUrl": "https://www.imdb.com/title/tt38973703/",
  "imageKind": "publicity"
},
{
  "title": "Génesis",
  "year": 2026,
  "yearSource": "titulos Web.xlsx — clasificación facilitada por CUBE",
  "poster": "/catalogue/update-2026-genesis.jpg",
  "director": "David Pujol",
  "omdbTitle": "Génesis",
  "featured": true,
  "posterFit": "contain",
  "dop": "Roman Martinez de Bujo",
  "imdbUrl": "https://www.imdb.com/title/tt38483587/",
  "imageKind": "publicity",
  "searchAliases": [
    "Gènesi"
  ]
},
{
  "title": "La superviviente",
  "year": 2026,
  "yearSource": "titulos Web.xlsx — clasificación facilitada por CUBE",
  "poster": "/catalogue/update-2026-superviviente-poster.jpg",
  "director": "Kike Maillo",
  "omdbTitle": "La superviviente",
  "featured": false,
  "posterFit": "contain",
  "imdbUrl": "https://www.imdb.com/es-es/title/tt44879169/"
},
{
  "title": "Viva",
  "year": 2026,
  "yearSource": "titulos Web.xlsx — clasificación facilitada por CUBE",
  "poster": "/catalogue/update-2026-viva.jpg",
  "director": "Aina Clotet",
  "omdbTitle": "Viva",
  "featured": false,
  "posterFit": "contain",
  "dop": "Nilo Zimmerman",
  "imdbUrl": "https://www.imdb.com/title/tt36822560/",
  "searchAliases": [
    "Oh Nora!"
  ]
},
{
  "title": "Cites: La película",
  "year": 2026,
  "yearSource": "titulos Web.xlsx — clasificación facilitada por CUBE",
  "poster": "/catalogue/update-2026-cites.jpg",
  "director": "Gemma Ferrate",
  "omdbTitle": "Cites: La película",
  "featured": false,
  "posterFit": "contain",
  "dop": "David Valldeperez",
  "imdbUrl": "https://www.imdb.com/title/tt40185366/",
  "searchAliases": [
    "Citas: La película"
  ]
},
{
  "title": "El director",
  "year": 2026,
  "yearSource": "titulos Web.xlsx — clasificación facilitada por CUBE",
  "poster": "/catalogue/update-2026-director.jpg",
  "director": "Dani de la Orden",
  "omdbTitle": "El director",
  "featured": true,
  "posterFit": "contain",
  "dop": "Maria Codina",
  "imdbUrl": "https://www.imdb.com/title/tt38454494/"
},
  // 1. Deep Water (2026)
  {
    title: "Deep Water",
    year: 2026,
    poster: "/catalogue/2e5f5f17a0bc2bec.jpg",
    director: "Renny Harlin",
    omdbTitle: "Deep Water",
  },
  // 2. Tadeo Jones y la Lámpara Maravillosa (2026)
  {
    title: "Tadeo Jones y la Lámpara Maravillosa",
    year: 2026,
    poster: "/catalogue/b62616afe6b2377c.jpg",
    director: "Enrique Gato",
    omdbTitle: "Tad and the Magic Lamp",
  },
  // 3. SIRAT
  {
    title: "SIRAT",
    year: 2025,
    yearSource: "https://en.wikipedia.org/wiki/Sir%C4%81t",
    poster: "/catalogue/aa15c45f1d10d451.jpg",
    director: "Oliver Laxe",
    dop: "Mauro Herce",
    omdbTitle: "Sirat",
  },
  // 2. The Night Manager S02
  {
    title: "The Night Manager S02",
    year: 2026,
    yearSource: "https://www.primevideo.com/detail/0OQ744ET66DEPGX9E353MKULR5",
    poster: "/catalogue/d159c46bff1a532d.jpg",
    omdbTitle: "The Night Manager",
  },
  // 3. Ídolos
  {
    title: "Ídolos",
    year: 2026,
    yearSource: "https://en.wikipedia.org/wiki/Idols_%282026_film%29",
    poster: "/catalogue/5d85ac564b92d3dd.jpg",
    omdbTitle: "Idolos",
  },
  // 4. Dos Tumbas (was 13)
  {
    title: "Dos Tumbas",
    year: 2025,
    yearSource: "https://www.netflix.com/title/81701717",
    lmt: "/lmt/dos-tumbas-lmt.jpg",
    poster: "/catalogue/40f18bb06f7d960f.jpg",
    director: "Kike Maíllo",
    dop: "Román Martínez de Bujo",
    omdbTitle: "Dos Tumbas",
  },
  // 5. Ruido (was 10)
  {
    title: "Ruido",
    year: 2025,
    yearSource: "https://www.filmaffinity.com/es/film111461.html",
    lmt: "/lmt/ruido-lmt.jpg",
    poster: "/catalogue/d4a044b3c0940537.jpg",
    director: "Ingride Santos",
    dop: "Beatriz Sastre",
    omdbTitle: "Ruido",
  },
  // 6. The Map That Leads to You (was 12)
  {
    title: "The Map That Leads to You",
    year: 2025,
    yearSource: "https://en.wikipedia.org/wiki/The_Map_That_Leads_to_You",
    lmt: "/lmt/map-leads-to-you-lmt.jpg",
    poster: "/catalogue/d7899d8494a69dd7.jpg",
    director: "Lasse Hallström",
    dop: "Elias M. Felix",
    omdbTitle: "The Map That Leads to You",
  },
  // 7. Siempre es Invierno (was 11)
  {
    title: "Siempre es Invierno",
    year: 2025,
    yearSource:
      "https://elpais.com/cultura/cine/2025-11-08/los-dos-pequenos-problemas-de-boyero-con-la-nueva-pelicula-de-david-trueba-el-resto-me-parece-modelico.html",
    lmt: "/lmt/siempre-es-invierno-lmt.jpg",
    poster: "/catalogue/19b77d92bd70a2c1.jpg",
    director: "David Trueba",
    dop: "Agnès Piqué Corbera",
    omdbTitle: "Siempre es invierno",
  },
  // 8. Golpes (was 7)
  {
    title: "Golpes",
    year: 2025,
    yearSource: "https://en.wikipedia.org/wiki/Golpes",
    lmt: "/lmt/golpes-lmt.jpg",
    poster: "/catalogue/f233c1466a028b88.jpg",
    director: "Rafael Cobos",
    dop: "Sergi Vilanova",
    omdbTitle: "Golpes",
  },
  // 9. El Rastre del Llop (was 9)
  {
    title: "El Rastre del Llop",
    year: 2026,
    yearSource:
      "https://www.audiovisual451.com/el-rastro-del-lobo-estreno-en-cines-6-de-febrero/",
    lmt: "/lmt/rastre-del-llop-lmt.jpg",
    poster: "/catalogue/b38107ede870dbe3.jpg",
    director: "Ángeles Hernández",
    dop: "Mariano Suárez",
    omdbTitle: "El rastre del llop",
  },
  // 10. Les Irresponsables (was 8)
  {
    title: "Les Irresponsables",
    year: 2025,
    yearSource:
      "https://elpais.com/suscripciones/elpaismas/2025-07-09/asiste-al-preestreno-de-las-irresponsables.html",
    lmt: "/lmt/les-irresponsables-lmt.jpg",
    poster: "/catalogue/ddf431c8bfd2b543.jpg",
    director: "Laura Mañá",
    dop: "Sergi Gallardo",
    omdbTitle: "Les irresponsables",
  },
  // 11. Apocalipsis Z (was 17)
  {
    title: "Apocalipsis Z",
    year: 2024,
    yearSource:
      "https://en.wikipedia.org/wiki/Apocalypse_Z:_The_Beginning_of_the_End",
    lmt: "/catalogue/27562e4597517806.jpg",
    poster: "/catalogue/be610e95f6ccd399.jpg",
    dop: "Elias M. Felix",
    omdbTitle: "Apocalypse Z: The Beginning of the End",
  },
  // 12. Cites Barcelona S02 (was 19)
  {
    title: "Cites Barcelona S02",
    year: 2024,
    yearSource:
      "https://www.aboutamazon.es/noticias/entretenimiento/segunda-temporada-citas-barcelona-prime-video-21-octubre",
    lmt: "/catalogue/4a0fedab2c56a26f.jpg",
    poster: "/catalogue/6b0ef16a4ce2491b.jpg",
    dop: "Albert Pascual",
    omdbTitle: "Cites",
  },
  // 13. The Penguin Lessons (was 20)
  {
    title: "The Penguin Lessons",
    year: 2025,
    yearSource: "https://www.sonypictures.com/corp/press_releases/2025/01170",
    lmt: "/catalogue/18a363801cf4bb73.jpg",
    poster: "/catalogue/7c4cceb11336e269.jpg",
    director: "Peter Cattaneo",
    dop: "Xavi Gimenez",
    omdbTitle: "The Penguin Lessons",
  },
  // 14. Mi Amiga Eva (was 24)
  {
    title: "Mi Amiga Eva",
    year: 2025,
    yearSource: "https://www.filmax.com/distribucion/mi-amiga-eva/299",
    lmt: "/catalogue/9cf486113ce51ed0.jpg",
    poster: "/catalogue/fe7108485702b657.jpg",
    director: "Cesc Gay",
    dop: "Andreu Rebes",
    omdbTitle: "Mi amiga Eva",
  },
  // 15. Mariposas Negras (was 5)
  {
    title: "Mariposas Negras",
    year: 2024,
    yearSource:
      "https://elpais.com/suscripciones/elpaismas/experiencias/2024-11-27/asiste-al-preestreno-de-mariposas-negras.html",
    poster: "/catalogue/df358f31b698704c.jpg",
    director: "David Baute",
    omdbTitle: "Mariposas Negras",
  },
  // 16. La Luz de Aisha (was 6)
  {
    title: "La Luz de Aisha",
    year: 2025,
    yearSource: "https://en.wikipedia.org/wiki/The_Light_of_Aisha",
    poster: "/catalogue/8cda9fb2b59f1150.jpg",
    director: "Shadi Adib",
    omdbTitle: "La luz de Aisha",
  },
  // 17. La Buena Letra (was 23)
  {
    title: "La Buena Letra",
    year: 2025,
    yearSource: "https://es.wikipedia.org/wiki/La_buena_letra",
    lmt: "/catalogue/ef229ac98f24bad0.jpg",
    poster: "/catalogue/b0ea936709cc4cdb.jpg",
    director: "Celia Rico",
    dop: "Sara Gallego",
    omdbTitle: "La buena letra",
  },
  // 18. La ultima noche en Tremore Beach (was 21)
  {
    title: "La ultima noche en Tremore Beach",
    year: 2024,
    yearSource: "https://www.netflix.com/title/81610976",
    lmt: "/catalogue/65aefcfc5887c043.jpg",
    poster: "/catalogue/ec7594d549ec0117.jpg",
    director: "Oriol Paulo",
    dop: "Bernat Bosch, Albert Pascual",
    omdbTitle: "The Last Night at Tremore Beach",
  },
  // 19. Wolfgang (was 25)
  {
    title: "Wolfgang",
    year: 2025,
    yearSource:
      "https://elpais.com/cultura/2025-03-14/wolfgang-una-correcta-comedia-espanola-familiar-con-nino-genio-y-padre-fortuito.html",
    lmt: "/catalogue/b0b3335dab96296f.jpg",
    poster: "/catalogue/332b76ea8e3ecf78.jpg",
    director: "Javi Ruiz Caldera",
    dop: "Sergi Vilanova",
    omdbTitle: "Wolfgang",
  },
  // 20. Mamen Mayo (was 22)
  {
    title: "Mamen Mayo",
    year: 2024,
    yearSource: "https://en.wikipedia.org/wiki/Mamen_Mayo",
    lmt: "/catalogue/eedcd47a82f9e005.jpg",
    poster: "/catalogue/61602a7f9c568d96.jpg",
    director: "Carmen Aumedes, Oriol Perez",
    dop: "Josep Pardo, Pau Munoz",
    omdbTitle: "Mamen Mayo",
  },
  // 21. Campamento Garra de Oso (was 4)
  {
    title: "Campamento Garra de Oso",
    year: 2025,
    yearSource: "https://www.filmaffinity.com/en/film777897.html",
    poster: "/catalogue/dd717fc0550c2d5f.jpg",
    director: "Silvia Quer",
    omdbTitle: "Campamento Garra de Oso",
  },
  // 22. Salve Maria (was 18)
  {
    title: "Salve Maria",
    year: 2024,
    yearSource:
      "https://elpais.com/cultura/2024-10-31/salve-maria-mar-coll-compone-un-escalofriante-cuadro-sobre-las-tinieblas-de-la-maternidad.html",
    lmt: "/catalogue/f141e612cf109831.jpg",
    poster: "/catalogue/95866deac8eef6be.jpg",
    director: "Mar Coll",
    dop: "Rulo Zimmerman",
    omdbTitle: "Salve Maria",
  },
  // 23. Escape (was 16)
  {
    title: "Escape",
    year: 2024,
    yearSource: "https://en.wikipedia.org/wiki/Escape_%282024_Spanish_film%29",
    lmt: "/catalogue/83f801ba330b4986.jpg",
    poster: "/catalogue/1cda03975507649d.jpg",
    director: "Rodrigo Cortes",
    dop: "Rafa Garcia",
    omdbTitle: "Escape",
  },
  // 24. Estacion Rocafort (was 14)
  {
    title: "Estacion Rocafort",
    year: 2024,
    yearSource: "https://en.wikipedia.org/wiki/Last_Stop:_Rocafort_St.",
    lmt: "/catalogue/3010986a35430802.jpg",
    poster: "/catalogue/bb1e61cbb4c1db4a.jpg",
    dop: "Marc Miro",
    omdbTitle: "Estación Rocafort",
  },
  // 25. Norberta (was 15)
  {
    title: "Norberta",
    year: 2024,
    yearSource: "https://en.wikipedia.org/wiki/Norberta_%28film%29",
    lmt: "/catalogue/4e05eca279a15e05.jpg",
    poster: "/catalogue/741da29187fcacfd.jpg",
    dop: "David Valldeperez",
    omdbTitle: "Norberta",
  },
];
