import { useEffect, useState } from 'react';

function Timer(props) {

    //const remainingTime = await getPlayerRemainingTime();
    const [counter, setCounter] = useState(props.remainingTime);

    useEffect(() => {
        //getPlayerRemainingTime().then(val => console.log(val));
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <div>Countdown: {counter}</div>
    );
}

export { Timer }