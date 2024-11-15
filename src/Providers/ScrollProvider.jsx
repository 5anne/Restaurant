import React, { createContext, useContext, useRef } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const aboutRef = useRef(null);

    const scrollToAbout = () => {
        aboutRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <ScrollContext.Provider value={{ scrollToAbout, aboutRef }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScrollContext = () => useContext(ScrollContext);