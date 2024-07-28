import { MAIN } from "../constants/routes";
import { Navigate } from 'react-router-dom';
import { useWallet } from "../context/WalletContext";

export default function PrivateRoute({ children }: any) {
  const { address, isConnected } = useWallet();

  return isConnected ? <div>Connected wallet: {address} {children}</div> : <Navigate to={MAIN} />;
}
