import { useReadContract } from 'wagmi'
import { abi } from '../utilities/abi'
import { EMPTY_STRING } from '../constants/common'

export function useContract(accountAddress: `0x${string}`) {

  const contractAddress = '0xde0e0b348a3e8dc68993132e1a9ed3d6f392be19'; //TODO: Change this to the address of your deployed contract

  const { data: owner } = useReadContract({
    abi,
    address: contractAddress,
    functionName: 'owner',
  });

  const { data: coachData } = useReadContract({
    abi,
    address: contractAddress,
    functionName: 'coaches',
    args: [accountAddress],
  });

  const { data: userData } = useReadContract({
    abi,
    address: contractAddress,
    functionName: 'users',
    args: [accountAddress],
  });

  // Define utility functions
  const isOwner = owner === accountAddress;
  
  const isCoach = coachData?.[0] !== EMPTY_STRING && coachData?.[1] !== EMPTY_STRING;

  const isUser = userData?.[0] !== EMPTY_STRING && userData?.[1] !== EMPTY_STRING;

  const getRole = () => {
    if (accountAddress) {
      if (isOwner) {
        return 'owner';
      }

      if (isCoach) {
        return 'coach';
      }

      if (isUser) {
        return 'user';
      }

      return 'none';
    }
    return 'none';
  };

  return {
    getOwner: () => owner,
    isOwner,
    isCoach,
    isUser,
    getRole,
  };

};
