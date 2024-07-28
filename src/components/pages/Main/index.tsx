import ConnectButton from "../../../utilities/ConnectButton"
import logo from "../../../assets/logo.svg"
import useRedirectOnConnect from "../../../hooks/useRedirectOnConnect";

const Main = () => {
  useRedirectOnConnect();
  
  return (
    <>
      <div className='logo-container'>
        <img src={logo} className="logo" alt="Move&Mint logo" />
      </div>
      <ConnectButton />
    </>
  );
};

export default Main;
