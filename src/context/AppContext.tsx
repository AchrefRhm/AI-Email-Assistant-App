import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface AppState {
  user: {
    name: string;
    email: string;
    avatar: string;
    connectedAccounts: string[];
  } | null;
  emails: any[];
  isLoading: boolean;
  error: string | null;
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<any>;
}

const initialState: AppState = {
  user: {
    name: 'Achref Rhouma',
    email: 'achref.rhouma@example.com',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
    connectedAccounts: ['Gmail', 'Outlook']
  },
  emails: [],
  isLoading: false,
  error: null,
};

function appReducer(state: AppState, action: any): AppState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'ADD_EMAIL':
      return { ...state, emails: [...state.emails, action.payload] };
    default:
      return state;
  }
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}