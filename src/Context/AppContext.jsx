import React, { useState } from 'react';

export const AppContext = React.createContext(null);

export const AppContextProvider = ({ children }) => {
    const [score, setScore] = useState(0);
    const [time, setTime] = React.useState({
        minutes: 0,
        seconds: 5,
    });
    const [over, setOver] = useState(false)
    const handleOver = () => {

        setOver(true);
    };

    const [timeTaken, setTimeTaken] = useState({
        minutes: 0,
        seconds: 5,
    })



    return (
        <AppContext.Provider
            value={{
                score, setScore, handleOver, over, timeTaken, setTimeTaken, time, setTime
            }}
        >
            {children}


        </AppContext.Provider>
    );
};
