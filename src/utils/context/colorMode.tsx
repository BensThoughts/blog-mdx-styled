import {createContext, ReactNode, useEffect, useState} from 'react';
interface ThemeContextProps {
  colorMode: string | undefined;
  setColorMode: (value: string) => void
};

const themeContext: ThemeContextProps = {
  colorMode: undefined,
  // TODO: can remove value: string?
  setColorMode: (value: string) => {},
};

export const ThemeContext = createContext(themeContext);
interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
  // TODO: Scary use of ! (better way? is it guaranteed to be set?)
  const [colorMode, rawSetColorMode] = useState<string>(document.body.dataset.theme!);
  // const [colorMode, rawSetColorMode] = useState<string | undefined>(undefined);


  useEffect(() => {
    const initialColorMode = document.body.dataset.theme;
    if (initialColorMode) {
      window.localStorage.setItem('color-mode', initialColorMode);
      rawSetColorMode(initialColorMode);
    } else {
      window.localStorage.setItem('color-mode', 'light');
      rawSetColorMode('light');
      document.body.dataset.theme = 'light';
    }
  }, []);

  function setColorMode(newValue: string) {
    rawSetColorMode(newValue);
    localStorage.setItem('color-mode', newValue);
    document.body.dataset.theme = newValue;
  };

  return (
    <ThemeContext.Provider value={{colorMode, setColorMode}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
