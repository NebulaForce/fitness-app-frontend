import ConnectButton from "../../../utilities/ConnectButton"
import logo from "../../../assets/logo.svg"
import { useNavigate } from 'react-router-dom'
import { Button } from "reactstrap"
import useAuth from "../../../hooks/useAuth"
import { REGISTER_USER } from "../../../constants/routes"

const Main = () => {
  useAuth();
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate(REGISTER_USER);
  };
  
  return (
    <>
      <div className='logo-container'>
        <img src={logo} className="logo" alt="Move&Mint logo" />
      </div>
      <Button color="primary" size="lg" className="my-5" onClick={handleGetStartedClick}>Get Started</Button>
      <ConnectButton label="Login" />
    </>
  );
};

export default Main;
