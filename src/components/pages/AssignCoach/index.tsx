import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import workout from '../../../assets/workout-2.jpg';
import { useAccount } from 'wagmi';
import { useContract } from '../../../hooks/useContract';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../../constants/routes';
import BgTemplate from '../../templates/BgTemplate';
import { ADDRESS_ZERO } from '../../../constants/common';

const AssignCoach = () => {
  const { isConnected } = useAccount();
  const { assignCoach, txStatus } = useContract();
  const navigate = useNavigate();
  const [walletCoach, setWalletCoach] = useState<`0x${string}`>('' as `0x${string}`);
  const [walletUser, setWalletUser] = useState<`0x${string}`>('' as `0x${string}`);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await assignCoach(walletUser, walletCoach);
    } catch (err) {
      setError('Failed to assign coach.');
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
                <h1 className="text-center max-w-[300px] leading-[60px] mb-8 font-black">Coach assigned!</h1>
                <h2 className="text-center mb-8 font-medium text-2xl">The fitness journey begins!</h2>
                <Button className='text-center' onClick={handleGoToDashboard}>
                  Go Back
                </Button>
              </div>
            )
              : (
                <>
                  { (error || txStatus === "error") && (<div className='font-medium font-xl bg-danger p-4 text-white rounded'>Sorry! An error has occurred. Try again.</div>)}
                  <h1 className="my-4 text-center font-black">Assign Coach</h1>
                  <Form onSubmit={handleSubmit} className='flex flex-col gap-y-5'>
                    <FormGroup className='flex flex-col gap-y-2'>
                      <Label for="walletCoach">Coach</Label>
                      <Input
                        type="text"
                        id="walletCoach"
                        value={walletCoach}
                        onChange={(e) => setWalletCoach(e.target.value as `0x${string}`)}
                        placeholder={ADDRESS_ZERO}
                        required
                        className='rounded p-2'
                      />
                    </FormGroup>
                    <FormGroup className='flex flex-col gap-y-2'>
                      <Label for="walletUser">User</Label>
                      <Input
                        type="text"
                        id="walletUser"
                        value={walletUser}
                        onChange={(e) => setWalletUser(e.target.value as `0x${string}`)}
                        placeholder={ADDRESS_ZERO}
                        required
                        className='rounded p-2'
                      />
                    </FormGroup>
                    <Button type="submit" className='mt-8 bg-primary text-white hover:bg-white hover:text-primary hover:border-2 border-primary' disabled={!isConnected || txStatus === "pending"}>
                      {txStatus === "pending" ? 'Assigning...' : 'Assign'}
                    </Button>
                  </Form>
                </>
              )
          }
        </div>
      </BgTemplate>
  );
};

export default AssignCoach;
