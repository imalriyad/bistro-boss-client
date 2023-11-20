import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import MainLayout from "./Layout/MainLayout";
import AuthProvider from "./Context/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}>
          <MainLayout></MainLayout>
        </RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
