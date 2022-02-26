import React from 'react'

const NameContext = React.createContext();

export const NameProvider = NameContext.Provider;
export const NameConsumer = NameContext.Consumer;

export default NameContext;