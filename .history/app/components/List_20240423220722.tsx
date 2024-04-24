import React, { createContext, useContext, useReducer } from 'react';

// Defina as ações para alterar o estado do modo de tema
const TOGGLE_THEME = 'TOGGLE_THEME';

// Define o estado inicial
const initialState = {
  modoNoite: false,
};

// Define o reducer para manipular as ações
const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, modoNoite: !state.modoNoite };
    default:
      return state;
  }
};

// Crie o contexto
const ThemeContext = createContext();

// Provedor do contexto
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para consumir o contexto
export const useTheme = () => useContext(ThemeContext);

// Componente List
export const List: React.FC = () => {
  const { state, dispatch } = useTheme();

  const alternarModoNoite = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  // Restante do seu componente utilizando state.modoNoite para o modo de tema
};
