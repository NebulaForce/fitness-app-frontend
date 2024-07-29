import ConnectButton from "../../../utilities/ConnectButton"
import logo from "../../../assets/logo.svg"
import { useNavigate } from 'react-router-dom'
import { Button } from "reactstrap"
import useAuth from "../../../hooks/useAuth"

const Main = () => {
  useAuth();
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/register-user');
  };
  
  return (
    <>
      <div className='logo-container'>
        <img src={logo} className="logo" alt="Move&Mint logo" />
      </div>
      <Button color="primary" size="lg" className="my-5" onClick={handleGetStartedClick}>Get Started</Button>
      <ConnectButton />
    </>
  );
};

export default Main;
