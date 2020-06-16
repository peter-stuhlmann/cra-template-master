import React from 'react';

export const Context = React.createContext(null);

export default function ContextProvider({ children }) {
  return (
    <Context.Provider
      value={
        {
          // values
        }
      }
    >
      {children}
    </Context.Provider>
  );
}
