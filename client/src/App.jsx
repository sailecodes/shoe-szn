import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./assets/sass/style.scss";
import _Home from "./components/pages/_Home";
import Casual from "./components/pages/Casual";
import Streetwear from "./components/pages/Streetwear";
import Comfy from "./components/pages/Comfy";
import CommunityPicks from "./components/pages/CommunityPicks";
import Profile from "./components/pages/Profile";
import Cart from "./components/pages/Cart";
import _Layout from "./components/pages/_Layout";
import _Item from "./components/pages/_Item";

const apolloClient = new ApolloClient({
  uri: "http://localhost:5200/graphql",
  cache: new InMemoryCache(),
  credentials: "include",
  connectToDevTools: true,
});

const router = createBrowserRouter([
  {
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
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
};

export default App;
