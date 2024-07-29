import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./assets/sass/style.scss";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Casual from "./components/pages/Casual";
import Streetwear from "./components/pages/Streetwear";
import Comfy from "./components/pages/Comfy";
import CommunityPicks from "./components/pages/CommunityPicks";
import Item from "./components/pages/Item";
import Cart from "./components/pages/Cart";
import Profile from "./components/pages/Profile";

const apolloClient = new ApolloClient({
  // uri: "https://shoeszn.up.railway.app/graphql",
  uri: "http://localhost:5200/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
});

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
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/item/:id",
        element: <Item />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
};

export default App;
