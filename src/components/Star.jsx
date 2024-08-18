import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const IntervalTime = 1000;

const Star = () => {
    const [color, setColor] = useState('rgb(255, 255, 255)');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            setColor(randomColor);
        }, IntervalTime);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="w-fit star">
            <FaStar style={{ color: color }} className="w-5 h-5" />
        </div>
    );
};

export default Star;
