import React, { createContext, useState } from 'react';

interface UserContextType {
  name: string;
  setName: (name: string) => void;
  cityState: string;
  setCityState: (cityState: string) => void;
  isLoggedin: boolean,
  setIsLoggedin: (bool: boolean) => void;
}

export const UserContext = createContext<UserContextType>({
  name: '',
  setName: () => {},
  cityState: '',
  setCityState: () => {},
  isLoggedin: false,
  setIsLoggedin: () => {}
});

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [name, setName] = useState('');
  const [cityState, setCityState] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);

  
  return (
    <UserContext.Provider value={{ name, setName, cityState, setCityState, isLoggedin, setIsLoggedin}}>
      {children}
    </UserContext.Provider>
  );
};