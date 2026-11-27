import { createBrowserRouter } from "react-router";

import MainLayout from "./components/layout/MainLayout";
import HomePage from "./components/pages/HomePage";
import CatalogPage from "./components/pages/CatalogPage";
import ProductDetailPage from "./components/pages/ProductDetailPage";
import CustomizationPage from "./components/pages/CustomizationPage";
import ContactPage from "./components/pages/ContactPage";
import Cart from "./components/pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "catalogo", element: <CatalogPage /> },
      {
        path: "catalogo/:slug",
        element: <ProductDetailPage />,
      },
      {
        path: "personalizacion",
        element: <CustomizationPage />,
      },
      { path: "contacto", element: <ContactPage /> },
      { path: "cart", element: <Cart /> },
      {
        path: "*",
        element: <h1>Página no encontrada</h1>,
      },
    ],
  },
]);
