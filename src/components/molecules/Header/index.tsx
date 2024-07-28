import { Navbar, NavbarBrand, Button } from 'reactstrap';
import { FC } from 'react';
import logo from '../../../assets/logo.svg';
import { HOME } from '../../../constants/routes';
import { useDisconnect } from 'wagmi';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Header: FC = () => {
  const navigate = useNavigate();
  const { disconnect } = useDisconnect(); 

  const handleLogout = () => {
    disconnect();
    navigate('/');
  };

  return (
    <Navbar
      color="light"
      dark
    >
      <NavbarBrand href={HOME}>
        <img
          alt="logo"
          src={logo}
          style={{
            height: 50,
            width: 'auto',
            marginLeft: '13px'
          }}
        />
      </NavbarBrand>
      <div>
        <Button onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </Navbar>
  );
};

export default Header;