import { useEffect, useState } from 'react';
import { getPlayerLootTokens } from './ethereumConnector.js';

function PlayerTokenBalance() {

    const [tokenBalance, setTokenBalance] = useState();

    useEffect(() => {
        try {
            getPlayerLootTokens().then(data => {
                setTokenBalance(data);
            });
        }
        catch (err) {
            setTokenBalance(0);
        }

    }, []);
    return (
        <div>
            Gold: {tokenBalance}
        </div>
    );
}

export { PlayerTokenBalance }