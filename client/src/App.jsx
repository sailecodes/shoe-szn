import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Casual from "./components/pages/Casual";
import Streetwear from "./components/pages/Streetwear";
import Comfy from "./components/pages/Comfy";
import CommunityPicks from "./components/pages/CommunityPicks";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
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
