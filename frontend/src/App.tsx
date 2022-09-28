import React from 'react';
import { useTranslation } from 'react-i18next';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Header } from './components';
import Footer from './components/footer/Footer';
import { List, Summary } from './routes';

const router = createBrowserRouter([
  {
    path: '/arcaffe_stock_management',
    element: (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    ),
    children: [
      {
        index: true,
        element: <List />,
      },
      {
        path: '/arcaffe_stock_management/summary',
        element: <Summary />,
      },
    ],
  },
]);

const App = (): JSX.Element => {
  const { i18n } = useTranslation();

  const lang = i18n.language;
  return (
    <div className="app" lang={lang} dir={lang === 'he' ? 'rtl' : 'ltr'}>
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
