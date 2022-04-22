import { ethers } from 'ethers'
import SquadNFT from './artifacts/contracts/SquadNFT.sol/SquadNFT.json'
import QuestManager from './artifacts/contracts/QuestManager.sol/QuestManager.json'
import { toHexString, exportToJson } from './utils'

const mintPrice = "5.0";
const questPrice = "5.5";

export async function loadEthereumAccount() {
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
    return account;
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
        console.log(`Squad successfully registered`);
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

export async function fetchQuestStage() {
}

export async function getRemainingTime() {
    // await loadEthereumAccount();
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const contract = new ethers.Contract(dungeonAddress, Dungeon.abi, provider);
    // try {
    //     const stage = await contract.getRemainingTime();
    //     return stage;
    // } catch (err) {
    //     console.log(err)
    // }

}

export async function playQuest() {
    await loadEthereumAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(questManagerAddress, QuestManager.abi, signer);
    try {
        const transaction = await contract.playQuest({
            gasLimit: 70000
        });
        const txResult = await transaction.wait();
        return txResult;

    } catch (err) {
        console.log(err)
    }
}
export async function resolveQuest() {
}
export async function startQuest() {
}
export const dungeonAddress = "0x";


export const nftSquadAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
export const questManagerAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";