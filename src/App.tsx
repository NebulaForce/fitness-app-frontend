import './App.css'
import ConnectButton from './utilities/ConnectButton'
import logo from './assets/logo.svg'

function App() {

  return (
    <>
    <div className='logo-container'>
      <img src={logo} className="logo" alt="Move&Mint logo" />
    </div>
      
    <ConnectButton />
    </>
  )
}

export default App
