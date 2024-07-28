import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useAccount } from 'wagmi';

interface WalletContextType {
  address: string | null;
  isConnected: boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { address, isConnected } = useAccount();
  
  const [walletAddress, setWalletAddress] = useState<string | null>(address || null);

  React.useEffect(() => {
    if (isConnected) {
      setWalletAddress(address || null);
    } else {
      setWalletAddress(null);
    }
  }, [address, isConnected]);

  return (
    <WalletContext.Provider value={{ address: walletAddress, isConnected }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
