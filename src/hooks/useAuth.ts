import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { HOME } from '../constants/routes';

const useAuth = () => {
  const navigate = useNavigate();
  const { isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      navigate(HOME);
    }
  }, [isConnected, navigate]);
};

export default useAuth;