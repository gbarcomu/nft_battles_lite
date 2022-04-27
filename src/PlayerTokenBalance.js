import { useEffect, useState } from 'react';
import { getPlayerLootTokens } from './ethereumConnector.js';

function PlayerTokenBalance() {

    const [tokenBalance, setTokenBalance] = useState();

    useEffect(() => {
        try {
            getPlayerLootTokens().then(data => {
                setTokenBalance(<p>{data}</p>);
            });
        }
        catch (err) {
            setTokenBalance(<p>0</p>);
        }

    }, []);
    return (
        <div>
            Loot Tokens: {tokenBalance}
        </div>
    );
}

export { PlayerTokenBalance }