import React, { useEffect } from 'react';

const Blob = () => {
    

    useEffect(() => {
        document.body.onpointermove = event => {
            const blob = document.querySelector('.blob');
            const { clientX, clientY } = event
            blob.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 3000, fill: 'forwards'})
        }
    }, []);

    

    return (
        <div
            className="blob"
            style={{
                transform: 'translate(-50%, -50%)',
                position: 'absolute',
            }}
        ></div>
    );
};

export default Blob;
