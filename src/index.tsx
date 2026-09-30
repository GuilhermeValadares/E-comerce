import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>,
);
