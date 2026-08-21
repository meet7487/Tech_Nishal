import { useEffect, useMemo, useState } from 'react';
import { ThemeModeContext } from './modeContext';

export function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    localStorage.setItem('technishal-theme', mode);
    document.documentElement.dataset.theme = mode;
  }, [mode]);

  const value = useMemo(
    () => ({
      mode,
      toggleMode: () => setMode((currentMode) => (currentMode === 'dark' ? 'light' : 'dark')),
    }),
    [mode],
  );

  return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>;
}
