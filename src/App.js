import { isMetaMaskInstalled } from './ethereumConnector.js';
import { useEffect, useState } from 'react';

import { NFTSquadGame } from './NFTSquadGame';
import { NoMetamask } from './NoMetamask'

export default function App() {

  const [dAppDAppnt, setDAppDappnt] = useState(<div></div>);

  useEffect(() => {
    setDAppDappnt(isMetaMaskInstalled() ? <NFTSquadGame /> : <NoMetamask />);
  }, []);

  return (dAppDAppnt);
}



