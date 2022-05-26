import { ethers } from 'ethers'
import SquadNFT from './artifacts/contracts/SquadNFT.sol/SquadNFT.json'
import QuestManager from './artifacts/contracts/QuestManager.sol/QuestManager.json'
import LootToken from './artifacts/contracts/LootToken.sol/LootToken.json'
import { NFT_SQUAD_ADDRESS, QUEST_MANAGER_ADDRESS, LOOT_TOKEN_ADDRESS, MINT_PRICE, MEAL_PRICE, CHAIN_ID, CHAIN_NAME, RPC_URL} from './Constants'

export async function loadEthereumRequestAccount() {
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
    return account;
}

export async function loadEthereumAccount() {
    const [account] = await window.ethereum.request({ method: 'eth_accounts' })
    return account;
}

export async function loadEthereumChainId() {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' })
    return chainId;
}

export async function switchNetwork() {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: CHAIN_ID }],
        });
    } catch (switchError) {
        if (switchError.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainId: CHAIN_ID,
                            chainName: CHAIN_NAME,
                            rpcUrls: [RPC_URL],
                        },
                    ],
                });
            } catch (addError) {
            }
        }
    }
}

export async function mintSquad() {

    await loadEthereumAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(NFT_SQUAD_ADDRESS, SquadNFT.abi, signer);

    try {
        const transaction = await contract.registerSquad({
            value: ethers.utils.parseEther(MINT_PRICE)
        });
        await transaction.wait();
        window.location.reload();
    }
    catch (err) {
        console.error(err);
    }
}

export async function fetchSquad() {
    const account = await loadEthereumAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(NFT_SQUAD_ADDRESS, SquadNFT.abi, provider);
    try {
        const userNFTs = await contract.balanceOf(account);
        if (userNFTs >= 1) {
            const data = await contract.getSquadComposition(account);
            return data;
        }
        else {
            return null;
        }
    } catch (err) {
        console.error(err)
    }

}

export async function getPlayerRemainingTime() {
    const account = await loadEthereumAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(QUEST_MANAGER_ADDRESS, QuestManager.abi, provider);
    try {
        const data = await contract.getRemainingTime(account);
        return data;
    } catch (err) {
        console.error(err)
    }
}

export async function getPlayerLootTokens() {
    const account = await loadEthereumAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(LOOT_TOKEN_ADDRESS, LootToken.abi, provider);
    try {
        const data = await contract.balanceOf(account);
        return data.toNumber();
    } catch (err) {
        console.error(err)
    }
}

export async function playQuest() {
    await loadEthereumAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(QUEST_MANAGER_ADDRESS, QuestManager.abi, signer);
    try {
        const transaction = await contract.playQuest(LOOT_TOKEN_ADDRESS, {
            gasLimit: 160000
        });
        const txResult = await transaction.wait();
        return txResult;

    } catch (err) {
        console.error(err)
    }
}

export async function removeBattleFatigue() {
    await loadEthereumAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(QUEST_MANAGER_ADDRESS, QuestManager.abi, signer);
    try {
        const transaction = await contract.removeBattleFatigue({
            value: ethers.utils.parseEther(MEAL_PRICE)
        });
        await transaction.wait();
        window.location.reload();

    } catch (err) {
        console.error(err)
    }
}
