import { ethers } from 'ethers'
import SquadNFT from './artifacts/contracts/SquadNFT.sol/SquadNFT.json'
import QuestManager from './artifacts/contracts/QuestManager.sol/QuestManager.json'
import LootToken from './artifacts/contracts/LootToken.sol/LootToken.json'

const mintPrice = "5.0";
const mealPrice = "1.0";

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
            params: [{ chainId: '0x539' }],
        });
    } catch (switchError) {
        if (switchError.code === 4902) {
            try {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainId: '0x539',
                            chainName: '...',
                            rpcUrls: ['http://localhost:8545'] /* ... */,
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
    const contract = new ethers.Contract(nftSquadAddress, SquadNFT.abi, signer);

    try {
        const transaction = await contract.registerSquad({
            value: ethers.utils.parseEther(mintPrice)
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
    const contract = new ethers.Contract(nftSquadAddress, SquadNFT.abi, provider);
    try {
        const userNFTs = await contract.balanceOf(account);
        console.log(parseInt(userNFTs));
        if (userNFTs >= 1) {
            const data = await contract.getSquadComposition(account);
            return data;
        }
        else {
            return null;
        }
    } catch (err) {
        console.log(err)
    }

}

export async function getPlayerRemainingTime() {
    const account = await loadEthereumAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(questManagerAddress, QuestManager.abi, provider);
    try {
        const data = await contract.getRemainingTime(account);
        return data;
    } catch (err) {
        console.log(err)
    }
}

export async function getPlayerLootTokens() {
    const account = await loadEthereumAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(lootToken, LootToken.abi, provider);
    try {
        const data = await contract.balanceOf(account);
        return data.toNumber();
    } catch (err) {
        console.log(err)
    }
}

export async function playQuest() {
    await loadEthereumAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(questManagerAddress, QuestManager.abi, signer);
    try {
        const transaction = await contract.playQuest(lootToken, {
            gasLimit: 160000
        });
        const txResult = await transaction.wait();
        return txResult;

    } catch (err) {
        console.log(err)
    }
}

export async function removeBattleFatigue() {
    await loadEthereumAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(questManagerAddress, QuestManager.abi, signer);
    try {
        const transaction = await contract.removeBattleFatigue({
            value: ethers.utils.parseEther(mealPrice)
        });
        await transaction.wait();
        window.location.reload();

    } catch (err) {
        console.log(err)
    }
}

export const nftSquadAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
export const questManagerAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
export const lootToken = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";