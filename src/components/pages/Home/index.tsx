import { useContract } from "../../../hooks/useContract";
import { Button } from "reactstrap";
import './styles.css';
import DashboardAdmin from "../DashboardAdmin";
import DashboardCoach from "../DashboardCoach";
import DashboardUser from "../DashboardUser";

const Home = () => {
  const { getRole } = useContract();

  const role = getRole();

  return (
    role === 'owner' ? (
      <DashboardAdmin />
    ) : role === 'coach' ? (
      <DashboardCoach />
    ) : role === 'user' ? (
      <DashboardUser />
    ) : (
      <div className="unauthorizedContainer">
        <h1>Unauthorized</h1>
        <Button href="/register-user" className="goBackBtn" size="lg">Sign Up</Button>
      </div>
    )
  );
};

export default Home;