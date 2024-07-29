import ConnectButton from "../../../utilities/ConnectButton"
import logo from "../../../assets/logo.svg"
import useRedirectOnConnect from "../../../hooks/useRedirectOnConnect";
import { Button } from "reactstrap";

const Main = () => {
  useRedirectOnConnect();
  
  return (
    <>
      <div className='logo-container'>
        <img src={logo} className="logo" alt="Move&Mint logo" />
      </div>
      <Button color="primary" size="lg" className="my-5">Get Started</Button>
      <ConnectButton />
    </>
  );
};

export default Main;
