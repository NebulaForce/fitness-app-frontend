import { MAIN } from "../constants/routes";
import { Navigate } from 'react-router-dom';
import { useWallet } from "../context/WalletContext";
import DashboardTemplate from "../components/templates/DashboardTemplate";

export default function PrivateRoute({ children }: any) {
  const { isConnected } = useWallet();

  return isConnected ? <DashboardTemplate selectedItemId={""}>{children}</DashboardTemplate> : <Navigate to={MAIN} />;
}
