import { useContract } from "../../../hooks/useContract";
import { Button } from "reactstrap";
import './styles.css';

const Home = () => {
  const { getRole } = useContract();

  const role = getRole();

  return (
    role === 'owner' ? (
      <div>
        <h1>Owner Home</h1>
      </div>
    ) : role === 'coach' ? (
      <div>
        <h1>Coach Home</h1>
      </div>
    ) : role === 'user' ? (
      <div>
        <h1>User Home</h1>
      </div>
    ) : (
      <div className="unauthorizedContainer">
        <h1>Unauthorized</h1>
        <Button href="/register-user" className="goBackBtn" size="lg">Sign Up</Button>
      </div>
    )
  );
};

export default Home;