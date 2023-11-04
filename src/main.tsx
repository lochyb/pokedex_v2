import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./root.tsx";
import "./index.css";
import { store } from "./redux/store.ts";
import Error from "./routes/error.tsx";
import Search from "./routes/search.tsx";
import List from "./routes/list.tsx";
import Index from "./routes";
import { searchAction } from "./actions/searchAction.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "list/generations/:generationId?",
        element: <List />,
      },
      {
        path: "search/:name?",
        element: <Search />,
        action: searchAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
