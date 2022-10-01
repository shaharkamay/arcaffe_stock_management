import { createContext, Dispatch, SetStateAction } from 'react';

interface ThemeContextInterface {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const Theme = createContext<ThemeContextInterface>({
  theme: localStorage.getItem('theme') || 'theme-auto',
  setTheme: () => {
    localStorage.setItem('theme', 'theme-auto');
  },
});

export default Theme;
