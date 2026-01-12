import React, { useEffect, useState } from 'react';

const Countdown = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-11-30T17:00:00') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

            timeLeft = {
                months,
                days,
                hours,
                minutes,
            };
        } else {
            timeLeft = {
                months: 0,
                days: 0,
                hours: 0,
                minutes: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    return (
        <div className="flex gap-2 mt-4 text-[#FFF]">
            <Slot time={timeLeft.months} title="Meses" />
            <Slot time={timeLeft.days} title="Dias" />
            <Slot time={timeLeft.hours} title="Horas" />
            <Slot time={timeLeft.minutes} title="Minutos" />
        </div>
    );
};

const Slot = ({ time, title }) => {
    return (
        <div className="flex flex-col items-center justify-center text-lg bg-black/25 shadow-md w-28 h-24 rounded-md backdrop-blur-sm">
            <span className="text-[26px] text-shadow">{time}</span>
            <span className="text-[18px] text-shadow">{title}</span>
        </div>
    )
}

export default Countdown;