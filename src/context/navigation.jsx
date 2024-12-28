import { useEffect, useState } from 'react';
import { createContext } from 'react';

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);

    return () => window.removeEventListener('popstate', handler);
  });

  const navigation = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigation }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
export { NavigationProvider };
