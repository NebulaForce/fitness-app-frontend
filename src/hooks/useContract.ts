import { useAccount, useReadContract, useWriteContract } from 'wagmi'
import { abi } from '../utilities/abi'
import { ADDRESS_ZERO, EMPTY_STRING } from '../constants/common'

export function useContract() {

  const contractAddress = '0xd11a25b63a871aA7C65417062e0BCe6348Fb05B5'; //TODO: Change this to the address of your deployed contract

  const { address: accountAddress } = useAccount();

  // Reading contract data
  const { data: owner } = useReadContract({
    abi,
    address: contractAddress,
    functionName: 'owner',
  });

  const { data: coachData } = useReadContract({
    abi,
    address: contractAddress,
    functionName: 'coaches',
    args: [accountAddress || ADDRESS_ZERO],
  });

  const { data: userData } = useReadContract({
    abi,
    address: contractAddress,
    functionName: 'users',
    args: [accountAddress || ADDRESS_ZERO],
  });

  // Utility functions for roles
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

  // Write to contract
  const { writeContract, data: txData, error: txError, status: txStatus } = useWriteContract();

  const registerNewUser = async (name: string, email: string) => {
    try {
      await writeContract({
        abi,
        address: contractAddress,
        functionName: 'register',
        args: [name, email],
      });
    } catch (error) {
      console.error('Error executing registerUser:', error);
      throw error;
    }
  };

  const registerNewCoach = async (coachAddress: `0x${string}`, name: string, email: string) => {
    try {
      await writeContract({
        abi,
        address: contractAddress,
        functionName: 'addCoach',
        args: [coachAddress, name, email],
      });
    } catch (error) {
      console.error('Error executing registerCoach:', error);
      throw error;
    }
  };

  const assignCoach = async (userAddress: `0x${string}`, coachAddress: `0x${string}`) => {
    try {
      await writeContract({
        abi,
        address: contractAddress,
        functionName: 'assignCoach',
        args: [userAddress, coachAddress],
      });
    } catch (error) {
      console.error('Error executing assignCoach:', error);
      throw error;
    }
  };

  const saveGoal = async (fatPercentage: number, muscleMass: number, user: `0x${string}`) => {
    try {
      await writeContract({
        abi,
        address: contractAddress,
        functionName: 'setGoal',
        args: [fatPercentage, muscleMass, user],
      });
    } catch (error) {
      console.error('Error executing assignCoach:', error);
      throw error;
    }
  };

  const logMeasurement = async (weight: number, bmi: number, fatPercentage: number, visceralFat: number, bodyWater: number, muscleMass: number, user: `0x${string}`) => {
    try {
      await writeContract({
        abi,
        address: contractAddress,
        functionName: 'logMeasurement',
        args: [weight, bmi, fatPercentage, visceralFat, bodyWater, muscleMass, user],
      });
    } catch (error) {
      console.error('Error executing assignCoach:', error);
      throw error;
    }
  };

  return {
    getOwner: () => owner,
    isOwner,
    isCoach,
    isUser,
    getRole,
    registerNewUser,
    registerNewCoach,
    assignCoach,
    saveGoal,
    logMeasurement,
    txData,
    txError,
    txStatus
  };

};
