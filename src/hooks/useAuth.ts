import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'
import { useContract } from './useContract'

const useAuth = () => {
  const navigate = useNavigate();
  const { address } = useAccount();
  const { getRole } = useContract(address);

  const [role, setRole] = useState('none'); // Initialize with a default value
  const isRegistered = role !== 'none';

  useEffect(() => {
    const fetchRole = async () => {
      if (address) { // Ensure address is available
        try {
          const fetchedRole = await getRole();
          setRole(fetchedRole);
        } catch (error) {
          console.error('Failed to fetch role:', error);
          setRole('none'); // Handle error and set default role
        }
      }
    };

    fetchRole();
  }, [address, getRole]); // Dependency on address and getRole

  useEffect(() => {
    if (isRegistered) {
      navigate('/home');
    } else {
      navigate('/');
    }
  }, [isRegistered, navigate]); // Dependency on isRegistered and navigate
};

export default useAuth;
