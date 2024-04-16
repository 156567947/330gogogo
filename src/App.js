import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import RootLayout from "./pages/Root";
import ErrorPage from './pages/Error'
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
