import Layout from "./layouts/Layout";
import { createBrowserRouter } from "react-router-dom";
import NewProduct, { action as newProductAction } from "./views/NewProduct";
import { action as deleteProductoAction } from "./components/ProductDetails";
import Products, {
  loader as productsLoader,
  action as updateAvailabilityAction,
} from "./views/Products";
import EditProduct, {
  loader as editProductLoader,
  action as editProductAction,
} from "./views/EditProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
        action: updateAvailabilityAction,
      },
      {
        path: "productos/nuevo",
        element: <NewProduct />,
        action: newProductAction,
      },
      {
        path: "productos/:id/editar",
        element: <EditProduct />,
        loader: editProductLoader,
        action: editProductAction,
      },
      {
        path: "productos/:id/eliminar",
        action: deleteProductoAction,
      },
    ],
  },
]);
