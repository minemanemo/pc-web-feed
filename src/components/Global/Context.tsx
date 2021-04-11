import { createContext } from 'react';

export interface LoadingModal {
  open: () => void;
  close: () => void;
}

export interface ContextI {
  loading: LoadingModal;
}

export const defaultContext: ContextI = {
  loading: {
    open: (): void => console.log('open loading'),
    close: (): void => console.log('close loading'),
  },
};

const Context = createContext<ContextI>(defaultContext);

export default Context;
