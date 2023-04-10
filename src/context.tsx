import React, { createContext, useState } from 'react';

interface UserContextType {
  name: string;
  setName: (name: string) => void;
  cityState: string;
  setCityState: (cityState: string) => void;
}

export const UserContext = createContext<UserContextType>({
  name: '',
  setName: () => {},
  cityState: '',
  setCityState: () => {},
});

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [name, setName] = useState('');
  const [cityState, setCityState] = useState('');

  return (
    <UserContext.Provider value={{ name, setName, cityState, setCityState }}>
      {children}
    </UserContext.Provider>
  );
};