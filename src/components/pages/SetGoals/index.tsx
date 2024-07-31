import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import workout from '../../../assets/workout-2.jpg';
import { useAccount } from 'wagmi';
import { useContract } from '../../../hooks/useContract';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../../constants/routes';
import BgTemplate from '../../templates/BgTemplate';

const SetGoals = () => {
  const { isConnected } = useAccount();
  const { saveGoal, txStatus } = useContract();
  const navigate = useNavigate();
  const [fatPercentage, setFatPercentage] = useState<number>(0);
  const [muscleMass, setMuscleMass] = useState<number>(0);
  const [user, setUser] = useState<`0x${string}`>('' as `0x${string}`);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await saveGoal(fatPercentage, muscleMass, user);
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
                <h1 className="text-center max-w-[300px] leading-[60px] mb-8 font-black">Goals set!</h1>
                <h2 className="text-center mb-8 font-medium text-2xl">The fitness journey begins!</h2>
                <Button className='text-center' onClick={handleGoToDashboard}>
                  Go Back
                </Button>
              </div>
            )
              : (
                <>
                  { (error || txStatus === "error") && (<div className='font-medium font-xl bg-danger p-4 text-white rounded'>Sorry! An error has occurred. Try again.</div>)}
                  <h1 className="my-4 text-center font-black">Set Goals</h1>
                  <Form onSubmit={handleSubmit} className='flex flex-col gap-y-5'>
                    <FormGroup className='flex flex-col gap-y-2'>
                      <Label for="fat">Fat %</Label>
                      <Input
                        type="number"
                        id="fat"
                        value={fatPercentage}
                        onChange={(e) => setFatPercentage(parseInt(e.target.value))}
                        placeholder="Enter body fat %"
                        required
                        className='rounded p-2'
                      />
                    </FormGroup>
                    <FormGroup className='flex flex-col gap-y-2'>
                      <Label for="muscleMass">Muscle mass (kg)</Label>
                      <Input
                        type="number"
                        id="muscleMass"
                        value={muscleMass}
                        onChange={(e) => setMuscleMass(parseInt(e.target.value))}
                        placeholder="Enter muscle mass in kg"
                        required
                        className='rounded p-2'
                      />
                    </FormGroup>
                    <FormGroup className='flex flex-col gap-y-2'>
                      <Label for="user">User</Label>
                      <Input
                        type="text"
                        id="user"
                        value={user}
                        onChange={(e) => setUser(e.target.value as `0x${string}`)}
                        placeholder="Enter user address"
                        required
                        className='rounded p-2'
                      />
                    </FormGroup>
                    <Button type="submit" className='mt-8 bg-primary text-white hover:bg-white hover:text-primary hover:border-2 border-primary' disabled={!isConnected || txStatus === "pending"}>
                      {txStatus === "pending" ? 'Saving...' : 'Save Goal'}
                    </Button>
                  </Form>
                </>
              )
          }
        </div>
      </BgTemplate>
  );
};

export default SetGoals;
