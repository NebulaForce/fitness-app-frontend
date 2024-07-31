import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import workout from '../../../assets/workout-2.jpg';
import { useAccount } from 'wagmi';
import { useContract } from '../../../hooks/useContract';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../../constants/routes';
import BgTemplate from '../../templates/BgTemplate';
import { ADDRESS_ZERO } from '../../../constants/common';

const RegisterCoach = () => {
  const { isConnected } = useAccount();
  const { registerNewCoach, txStatus } = useContract();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [wallet, setWallet] = useState<`0x${string}`>('' as `0x${string}`);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await registerNewCoach(wallet, name, email);
    } catch (err) {
      setError('Failed to register coach.');
      console.error('Error:', err);
    }
  };

  const handleGoToDashboard = () => {
    navigate(HOME);
  };

  return (

      <BgTemplate bgImage={workout}>
        <div className="p-8 rounded-2xl w-fit bg-transparent-white flex flex-col gap-y-8 min-w-[calc(100%-2rem)] md:min-w-[500px]">
          {
            txStatus === "success" ? (
              <div className='flex flex-col justify-center items-center gap-y-4'>
                <h1 className="text-center max-w-[80%] leading-[60px] mb-8 font-black">Coach added!</h1>
                <h2 className="text-center mb-8 font-medium text-2xl">You have successfully added a new coach!</h2>
                <Button className='text-center' onClick={handleGoToDashboard}>
                  Go Back
                </Button>
              </div>
            )
              : (
                <>
                  { (error || txStatus === "error") && (<div className='font-medium font-xl bg-danger p-4 text-white rounded'>Sorry! An error has occurred. Try again.</div>)}
                  <h1 className="my-4 text-center font-black">Register Coach</h1>
                  <Form onSubmit={handleSubmit} className='flex flex-col gap-y-5'>
                    <FormGroup className='flex flex-col gap-y-2'>
                      <Label for="name">Name</Label>
                      <Input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
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
                        placeholder="coach@example.com"
                        required
                        className='rounded p-2'
                      />
                    </FormGroup>
                    <FormGroup className='flex flex-col gap-y-2'>
                      <Label for="wallet">Wallet Address</Label>
                      <Input
                        type="text"
                        id="wallet"
                        value={wallet}
                        onChange={(e) => setWallet(e.target.value as `0x${string}`)}
                        placeholder={ADDRESS_ZERO}
                        required
                        className='rounded p-2'
                      />
                    </FormGroup>
                    <Button type="submit" className='mt-8 bg-primary text-white hover:bg-white hover:text-primary hover:border-2 border-primary' disabled={!isConnected || txStatus === "pending"}>
                      {txStatus === "pending" ? 'Registering...' : 'Register'}
                    </Button>
                  </Form>
                </>
              )
          }
        </div>
      </BgTemplate>
  );
};

export default RegisterCoach;
