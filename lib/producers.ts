export type Producer = {
  id: string;
  name: string;
  region: string;
  canton: string;
  village: string;
  philosophy: "natural" | "biodynamic" | "organic";
  certification?: string;
  hectares: number;
  founded: number;
  signature: string;
  blurb: string;
  lat: number;
  lng: number;
  image: string;
  website?: string;
};

// REPLACE WITH REAL PARTNERS — placeholders illustrating the structure.
// Coordinates are real Swiss wine villages.
export const producers: Producer[] = [
  {
    id: "domaine-fully",
    name: "Domaine de Fully",
    region: "Valais",
    canton: "VS",
    village: "Fully",
    philosophy: "biodynamic",
    certification: "Demeter",
    hectares: 6.5,
    founded: 2008,
    signature: "Petite Arvine",
    blurb:
      "Granite-driven whites on the steep terraces above the Rhône. Horse-ploughed, hand-picked, fermented with native yeast.",
    lat: 46.1408,
    lng: 7.1144,
    image: "/images/region-valais.jpg",
  },
  {
    id: "vigneron-lavaux",
    name: "Cave de Lavaux",
    region: "Vaud",
    canton: "VD",
    village: "Epesses",
    philosophy: "natural",
    hectares: 4.2,
    founded: 2014,
    signature: "Chasselas",
    blurb:
      "Six generations on UNESCO terraces above Lac Léman. Skin-contact Chasselas and zero-sulphur reds aged in old foudres.",
    lat: 46.4906,
    lng: 6.7689,
    image: "/images/region-vaud.jpg",
  },
  {
    id: "geneva-coteaux",
    name: "Coteaux de Satigny",
    region: "Genève",
    canton: "GE",
    village: "Satigny",
    philosophy: "organic",
    certification: "Bio Suisse",
    hectares: 8.0,
    founded: 1998,
    signature: "Gamaret",
    blurb:
      "Family domaine in Switzerland's largest wine commune. Field blends, long élevage, no fining or filtration.",
    lat: 46.2069,
    lng: 6.0383,
    image: "/images/region-geneva.jpg",
  },
  {
    id: "ticino-merlot",
    name: "Tenuta Mendrisio",
    region: "Ticino",
    canton: "TI",
    village: "Mendrisio",
    philosophy: "biodynamic",
    certification: "Demeter",
    hectares: 5.1,
    founded: 2011,
    signature: "Merlot del Ticino",
    blurb:
      "South-facing slopes a stone's throw from Italy. Whole-cluster Merlot in concrete egg, plus an unusual orange Sauvignon.",
    lat: 45.8703,
    lng: 8.9836,
    image: "/images/region-ticino.jpg",
  },
  {
    id: "neuchatel-pinot",
    name: "Maison du Lac",
    region: "Three Lakes",
    canton: "NE",
    village: "Auvernier",
    philosophy: "natural",
    hectares: 3.8,
    founded: 2017,
    signature: "Pinot Noir",
    blurb:
      "Limestone Pinot from the shores of Lake Neuchâtel. Whole-bunch ferments, neutral oak, bottled by gravity.",
    lat: 46.9744,
    lng: 6.8767,
    image: "/images/region-threelakes.jpg",
  },
  {
    id: "graubunden-blau",
    name: "Weingut Bündner",
    region: "Graubünden",
    canton: "GR",
    village: "Malans",
    philosophy: "biodynamic",
    certification: "Demeter",
    hectares: 4.5,
    founded: 2005,
    signature: "Completer",
    blurb:
      "Alpine Pinot and the rare native Completer grape, farmed at 600m. Long, cold ferments and a deep love of Riesling-Sylvaner.",
    lat: 46.9844,
    lng: 9.5783,
    image: "/images/region-graubunden.jpg",
  },
];
