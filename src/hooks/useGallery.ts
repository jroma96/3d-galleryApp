import { useReducer } from "react";

const catalogImages = [
  {
    src: "/images/fox-3D.png",
    alt: "Figura de un zorro 3D",
    name: "Fox",
    fecha: new Date(),
    price: 80.5,
    category: "Videojuegos",
  },
  {
    src: "/images/dragon-3D.png",
    alt: "Figura de un dragon 3D",
    name: "Dragon",
    fecha: new Date(),
    price: 75.0,
    category: "Anime",
  },
  {
    src: "/images/knight-3D.png",
    alt: "FIgura de un caballero 3D",
    name: "Knight",
    fecha: new Date("2026/11/01"),
    price: 80.0,
    category: "Peliculas",
  },
  {
    src: "/images/cat-3D.png",
    alt: "Figura de un gato 3D",
    name: "Cat",
    fecha: new Date("2026/11/02"),
    price: 90.0,
    category: "Originales",
  },
  {
    src: "/images/maceta-3D.png",
    alt: "FIgura de un caballero 3D",
    name: "Maceta",
    fecha: new Date("2026/11/10"),
    price: 95.0,
    category: "Decoracion",
  },
  {
    src: "/images/jarron-3D.png",
    alt: "Figura de un gato 3D",
    name: "Jarron",
    fecha: new Date("2026/11/11"),
    price: 85.0,
    category: "Decoracion",
  },
  {
    src: "/images/cat-3D.png",
    alt: "Figura de un gato 3D",
    name: "Cat",
    fecha: new Date("2026/11/04"),
    price: 85.0,
    category: "Originales",
  },
  {
    src: "/images/maceta-3D.png",
    alt: "FIgura de un caballero 3D",
    name: "Maceta",
    fecha: new Date("2026/11/07"),
    price: 95.0,
    category: "Decoracion",
  },
  {
    src: "/images/jarron-3D.png",
    alt: "Figura de un gato 3D",
    name: "Jarron",
    fecha: new Date("2026/11/13"),
    price: 100.0,
    category: "Decoracion",
  },
];

const init = {
  query: "",
  filter: "",
  sort: "Reciente",
  gallery: catalogImages,
};

interface gallery {
  src: string;
  alt: string;
  name: string;
  fecha: Date;
  price: number;
  category: string;
}

interface state {
  query: string;
  filter: string;
  sort: string;
  gallery: gallery[];
}

type action =
  | { type: "search"; payload: string }
  | { type: "filter"; payload: string }
  | { type: "sort"; payload: string };

function sortGallery(order: string, gallery: gallery[]): gallery[] {
  switch (order) {
    case "Reciente":
      return gallery.toSorted((a, b) => Number(b.fecha) - Number(a.fecha));
    case "Precio ascendente":
      return gallery.toSorted((a, b) => a.price - b.price);
    case "Precio descendente":
      return gallery.toSorted((a, b) => b.price - a.price);
    default:
      return gallery.toSorted((a, b) => Number(b.fecha) - Number(a.fecha));
  }
}

function galleryReducer(state: state, action: action): state {
  const { type, payload } = action;
  switch (type) {
    case "search":
      if (state.filter === "" || state.filter === "Todas") {
        return {
          ...state,
          query: payload,
          gallery: sortGallery(
            state.sort,
            catalogImages.filter((i) => i.name.toLowerCase().includes(payload)),
          ),
        };
      } else {
        return {
          ...state,
          query: payload,
          gallery: sortGallery(
            state.sort,
            catalogImages
              .filter((i) => i.name.toLowerCase().includes(payload))
              .filter((i) => i.category === state.filter),
          ),
        };
      }
    case "filter":
      if (payload === "" || payload === "Todas") {
        return {
          ...state,
          filter: payload,
          gallery: sortGallery(
            state.sort,
            catalogImages.filter((i) =>
              i.name.toLowerCase().includes(state.query),
            ),
          ),
        };
      } else {
        return {
          ...state,
          filter: payload,
          gallery: sortGallery(
            state.sort,
            catalogImages
              .filter((i) => i.name.toLowerCase().includes(state.query))
              .filter((i) => i.category === payload),
          ),
        };
      }

    case "sort":
      if (state.filter === "" || state.filter === "Todas") {
        return {
          ...state,
          sort: payload,
          gallery: sortGallery(
            payload,
            catalogImages.filter((i) =>
              i.name.toLowerCase().includes(state.query),
            ),
          ),
        };
      } else {
        return {
          ...state,
          sort: payload,
          gallery: sortGallery(
            payload,
            catalogImages
              .filter((i) => i.name.toLowerCase().includes(state.query))
              .filter((i) => i.category === state.filter),
          ),
        };
      }
    default:
      return state;
  }
}

export function useGallery() {
  const [gallery, dispatch] = useReducer(galleryReducer, init);
  return { gallery, dispatch };
}
