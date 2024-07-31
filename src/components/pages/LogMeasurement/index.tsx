import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import gym from '../../../assets/gym.jpg';
import { useAccount } from 'wagmi';
import { useContract } from '../../../hooks/useContract';
import { useNavigate } from 'react-router-dom';
import { HOME, SET_GOALS } from '../../../constants/routes';
import BgTemplate from '../../templates/BgTemplate';

const LogMeasurement = () => {
  const { isConnected } = useAccount();
  const { logMeasurement, txStatus } = useContract();
  const navigate = useNavigate();
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [fatPercentage, setFatPercentage] = useState<number>(0);
  const [visceralFat, setVisceralFat] = useState<number>(0);
  const [bodyWater, setBodyWater] = useState<number>(0);
  const [muscleMass, setMuscleMass] = useState<number>(0);
  const [user, setUser] = useState<`0x${string}`>('' as `0x${string}`);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const bmi = Math.round(weight / (height / 100) ** 2);
      await logMeasurement(weight, bmi, fatPercentage, visceralFat, bodyWater, muscleMass, user);
    } catch (err) {
      setError('Failed to assign coach.');
      console.error('Error:', err);
    }
  };

  const handleGoToDashboard = () => {
    navigate(HOME);
  };

  const handleGoToGoalsScreen = () => {
    navigate(SET_GOALS);
  };

  return (

      <BgTemplate bgImage={gym}>
        <div className="p-8 rounded-2xl w-fit bg-transparent-white flex flex-col gap-y-8 min-w-[calc(100%-2rem)] md:min-w-[500px] md:max-w-[50%]">
          {
            txStatus === "success" ? (
              <div className='flex flex-col justify-center items-center gap-y-4'>
                <h1 className="text-center max-w-[85%] leading-[60px] mb-8 font-black">Measurements logged!</h1>
                <h2 className="text-center mb-8 font-medium text-2xl">Wanna start setting up some goals?</h2>
                <Button className='text-center' onClick={handleGoToGoalsScreen}>
                  Set Goals
                </Button>
                OR
                <Button className='text-center' onClick={handleGoToDashboard}>
                  Go Back
                </Button>
              </div>
            )
              : (
                <>
                  { (error || txStatus === "error") && (<div className='font-medium font-xl bg-danger p-4 text-white rounded'>Sorry! An error has occurred. Try again.</div>)}
                  <h1 className="my-4 text-center font-black">Log Data</h1>
                  <Form onSubmit={handleSubmit} className='flex flex-row flex-wrap gap-y-5 gap-x-8'>
                    <FormGroup className='flex flex-col gap-y-2 w-[calc(50%-1rem)]'>
                      <Label for="weight">Weight (kg)</Label>
                      <Input
                        type="number"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(parseInt(e.target.value))}
                        placeholder="Enter weight (kg)"
                        required
                        className='rounded p-2'
                      />
                    </FormGroup>
                    <FormGroup className='flex flex-col gap-y-2 w-[calc(50%-1rem)]'>
                      <Label for="height">Heigth (cm)</Label>
                      <Input
                        type="number"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(parseInt(e.target.value))}
                        placeholder="Enter height (kg)"
                        required
                        className='rounded p-2'
                      />
                    </FormGroup>
                    <FormGroup className='flex flex-col gap-y-2 w-[calc(50%-1rem)]'>
                      <Label for="fat">Fat (%)</Label>
                      <Input
                        type="number"
                        id="fat"
                        value={fatPercentage}
                        onChange={(e) => setFatPercentage(parseInt(e.target.value))}
                        placeholder="Enter fat (%)"
                        required
                        className='rounded p-2'
                      />
                    </FormGroup>
                    <FormGroup className='flex flex-col gap-y-2 w-[calc(50%-1rem)]'>
                      <Label for="visceralFat">Visceral Fat</Label>
                      <Input
                        type="number"
                        id="visceralFat"
                        value={visceralFat}
                        onChange={(e) => setVisceralFat(parseInt(e.target.value))}
                        placeholder="Enter visceral fat"
                        required
                        className='rounded p-2'
                      />
                    </FormGroup>
                    <FormGroup className='flex flex-col gap-y-2 w-[calc(50%-1rem)]'>
                      <Label for="bodyWater">Body Water (%)</Label>
                      <Input
                        type="number"
                        id="bodyWater"
                        value={bodyWater}
                        onChange={(e) => setBodyWater(parseInt(e.target.value))}
                        placeholder="Enter body water (%)"
                        required
                        className='rounded p-2'
                      />
                    </FormGroup>
                    <FormGroup className='flex flex-col gap-y-2 w-[calc(50%-1rem)]'>
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
                    <FormGroup className='flex flex-col gap-y-2 w-full'>
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
                    <Button type="submit" className='mt-8 bg-primary text-white hover:bg-white hover:text-primary hover:border-2 border-primary w-full' disabled={!isConnected || txStatus === "pending"}>
                      {txStatus === "pending" ? 'Saving...' : 'Save'}
                    </Button>
                  </Form>
                </>
              )
          }
        </div>
      </BgTemplate>
  );
};

export default LogMeasurement;
