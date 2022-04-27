import { useEffect, useState } from 'react';

function Timer(props) {
    const [counter, setCounter] = useState(props.remainingTime);

    useEffect(() => {
        let timer;
        getPlayerRemainingTime().then((val) => {
            // El timer se setea asincronamente, cambiara cuando se complete la promesa
            setCounter(val);
            timer = counter > 0 && setInterval(() => setCounter((prevCounter) => prevCounter - 1), 1000); // Usar el valor previo
        });
        return () => timer && clearInterval(timer);
    }, []); // Sin dependecias para que solo se lance en el mount

    return <div>Countdown: {counter}</div>;
}

export { Timer }
