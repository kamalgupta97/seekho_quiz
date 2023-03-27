import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import Chip from '../Common/Chip';

const OtpTimer = () => {
    const { setTime, time, over, handleOver } = useContext(AppContext)

    const tick = () => {
        if (over) return;
        if (time.minutes === 0 && time.seconds === 0) handleOver();
        else if (time.seconds === 0)
            setTime({
                minutes: time.minutes - 1,
                seconds: 59,
            });
        else
            setTime({
                minutes: time.minutes,
                seconds: time.seconds - 1,
            });
    };

    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });

    return (
        <Chip className={"p-bg"} text={`${time.minutes.toString().padStart(2, '0')}:${time.seconds
            .toString()
            .padStart(2, '0')}`} />

    );
};

export default OtpTimer;
