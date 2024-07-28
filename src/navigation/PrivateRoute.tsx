import { MAIN } from "../constants/routes";
import { Navigate } from 'react-router-dom';
import DashboardTemplate from "../components/templates/DashboardTemplate";
import { useAccount } from "wagmi";

export default function PrivateRoute({ children }: any) {
  const { isConnected } = useAccount();

  return isConnected ? <DashboardTemplate selectedItemId={""}>{children}</DashboardTemplate> : <Navigate to={MAIN} />;
}
