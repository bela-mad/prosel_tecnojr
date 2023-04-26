import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";

import logo from './logo.svg';
import Home from './pages/Home'
import CompraIngresso from './pages/CompraIngresso/CompraIngresso'
import EmManutencao from './pages/EmManutencao/EmManutencao'

const router = createBrowserRouter([
  {
    path: "/compra",
    element: <CompraIngresso />,
  },
  {
    path: "/manutencao",
    element: <EmManutencao />
  },
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
    );
  }

  export default App;
