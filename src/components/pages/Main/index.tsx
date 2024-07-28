import ConnectButton from "../../../utilities/ConnectButton"
import logo from "../../../assets/logo.svg"

const Main = () => {
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
