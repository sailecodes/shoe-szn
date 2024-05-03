import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import _Home from "./components/pages/_Home";
import Casual from "./components/pages/Casual";
import Streetwear from "./components/pages/Streetwear";
import Comfy from "./components/pages/Comfy";
import CommunityPicks from "./components/pages/CommunityPicks";
import Profile from "./components/pages/Profile";
import Cart from "./components/pages/Cart";
import _Layout from "./components/pages/_Layout";
import _Item from "./components/pages/_Item";

import "./assets/sass/style.scss";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    // path: "/",
    // element: <Layout />,
    // children: [
    //   {
    //     index: true,
    //     element: <Home />,
    //   },
    path: "/",
    element: <_Layout />,
    children: [
      {
        index: true,
        element: <_Home />,
      },
      {
        path: "/casual",
        element: <Casual />,
      },
      {
        path: "/streetwear",
        element: <Streetwear />,
      },
      {
        path: "/comfy",
        element: <Comfy />,
      },
      {
        path: "/community-picks",
        element: <CommunityPicks />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/item",
        element: <_Item />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
