import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Header } from './components';
import Footer from './components/footer/Footer';
import Theme from './context/Theme';
import { List, Summary } from './routes';

const router = createBrowserRouter([
  {
    path: '/',
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
        path: '/summary',
        element: <Summary />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'theme-auto'
  );

  return (
    <Theme.Provider value={{ theme, setTheme }}>
      <QueryClientProvider client={queryClient}>
        <div
          className={`app ${theme}`}
          lang={lang}
          dir={lang === 'he' ? 'rtl' : 'ltr'}
        >
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </Theme.Provider>
  );
};
export default App;
