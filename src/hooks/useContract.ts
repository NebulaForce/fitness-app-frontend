import { useReadContract } from 'wagmi'
import { abi } from '../utilities/abi'
import { EMPTY_STRING } from '../constants/common'

export function useContract(accountAddress: `0x${string}` | undefined) {

  const contractAddress = '0xde0e0b348a3e8dc68993132e1a9ed3d6f392be19'; //TODO: Change this to the address of your deployed contract

  const getOwner = async () => {
    const owner = await useReadContract({
      abi,
      address: contractAddress,
      functionName: 'owner'
    })

    return owner.data;
  }

  const isOwner = async () => {
    return await getOwner() === accountAddress;
  }

  const isCoach = async (address: `0x${string}`) => {
    const result = await useReadContract({
      abi,
      address: contractAddress,
      functionName: 'coaches',
      args: [address]
    }).data;

    return (result?.[0] !== EMPTY_STRING && result?.[1] !== EMPTY_STRING);
  };

  const isUser = async (address: `0x${string}`) => {
    const result = await useReadContract({
      abi,
      address: contractAddress,
      functionName: 'users',
      args: [address]
    }).data;

    return (result?.[0] !== EMPTY_STRING && result?.[1] !== EMPTY_STRING);
  };

  const getRole = async () => {
    if (accountAddress) {
      if (await isOwner()) {
        return 'owner';
      }

      if (await isCoach(accountAddress)) {
        return 'coach';
      }

      if (await isUser(accountAddress)) {
        return 'user';
      }
      return 'none';
    }
    return 'none';
  }

  return {
    getOwner,
    isOwner,
    isCoach,
    isUser,
    getRole
  };

};
