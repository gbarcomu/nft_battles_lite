import { useEffect, useState } from 'react';
import { getPlayerRemainingTime } from './ethereumConnector';

function Timer() {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        let timer;
        getPlayerRemainingTime().then((val) => {
            val = val == undefined ? 0 : val.toNumber();
            setCounter(val);
            timer = counter > 0 && setInterval(() => setCounter((prevCounter) => 
            {
                if(prevCounter == 0) {
                    window.location.reload();
                }
                return prevCounter > 0 ? prevCounter - 1 : 0;
            }), 1000);
        });
        return () => timer && clearInterval(timer);
    }, []);

    return counter;
}

export { Timer }
