import React from 'react'
import ReactDOM from 'react-dom/client'
import { App }  from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Post } from "./components/Posts/Post.tsx";
import ROUTER_PATH from "./constants/routes.ts";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const router = createBrowserRouter([
  {
    path: ROUTER_PATH.ROOT,
    element: <App />,
  },
  {
    path: `/${ROUTER_PATH.POST}`,
    element: <Post />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
