import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Header from '../../molecules/Header';
import gymBg from '../../../assets/gym.jpg';
import ConnectButton from '../../../utilities/ConnectButton';
import { useAccount } from 'wagmi';
import { useContract } from '../../../hooks/useContract';
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {
  const { isConnected } = useAccount();
  const { registerNewUser, txStatus } = useContract();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await registerNewUser(name, email);
    } catch (err) {
      setError('Failed to register user.');
      console.error('Error:', err);
    }
  };

  const handleGoToDashboard = () => {
    navigate('/home');
  };

  return (
    <div className='flex flex-col'>
      <Header />

      <div
        className="relative w-full h-[100vh] max-h-custom bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${gymBg})`,
        }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-20 backdrop-blur-sm"></div>
        <div className="relative z-10 p-8 rounded-2xl w-fit bg-transparent-white flex flex-col gap-y-8 min-w-[calc(100%-2rem)] md:min-w-[500px]">
          {
            txStatus === "success" ? (
              <div className='flex flex-col justify-center items-center gap-y-4'>
                <h1 className="text-center max-w-[300px] leading-[60px] mb-8 font-black">Welcome to Move&Mint</h1>
                <h2 className="text-center mb-8 font-medium text-2xl">You have successfully registered!</h2>
                <Button className='text-center' onClick={handleGoToDashboard}>
                  Go to Dashboard
                </Button>
              </div>
            )
              : (
                <>
                  { (error || txStatus === "error") && (<div className='font-medium font-xl bg-danger p-4 text-white rounded'>Sorry! An error has occurred. Try again.</div>)}
                  <h1 className="my-4 text-center font-black">Register</h1>
                  <Form onSubmit={handleSubmit} className='flex flex-col gap-y-5'>
                    <FormGroup className='flex flex-col gap-y-2'>
                      <Label for="name">Name</Label>
                      <Input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                        className='rounded p-2'
                      />
                    </FormGroup>
                    <FormGroup className='flex flex-col gap-y-2'>
                      <Label for="email">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className='rounded p-2'
                      />
                    </FormGroup>
                    <FormGroup className='flex flex-col gap-y-2'>
                      <Label for="wallet">Wallet</Label>
                      <ConnectButton label="Connect my wallet" />
                    </FormGroup>
                    <Button color="primary" type="submit" className='mt-8' disabled={!isConnected || txStatus === "pending"}>
                      {txStatus === "pending" ? 'Registering...' : 'Register'}
                    </Button>
                  </Form>
                </>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
