import {createContext} from 'react'

const UIContext: any = createContext(null);

export const UIContextProvider = UIContext.Provider

export default UIContext;
