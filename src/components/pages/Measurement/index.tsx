import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import gym from '../../../assets/gym.jpg';
import { useNavigate } from 'react-router-dom';
import { HOME, PROGRESS } from '../../../constants/routes';
import BgTemplate from '../../templates/BgTemplate';
import { useContract } from '../../../hooks/useContract';
import { useEffect, useState } from 'react';

const LogMeasurement = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [weight, setWeight] = useState<number>(0);
  const [bmi, setBMI] = useState<number>(0);
  const [bodyFat, setBodyFat] = useState<number>(0);
  const [visceralFat, setVisceralFat] = useState<number>(0);
  const [bodyWater, setBodyWater] = useState<number>(0);
  const [muscleMass, setMuscleMass] = useState<number>(0);

  const handleGoToDashboard = () => {
    navigate(HOME);
  };

  const handleGoToGoalsScreen = () => {
    navigate(PROGRESS);
  };

  const { getLatestMeasurement } = useContract();

  const measurementData = getLatestMeasurement();

  useEffect(() => {
    if (measurementData) {
      setLoading(false);
      setWeight(measurementData.weight);
      setBMI(measurementData.BMI);
      setBodyFat(measurementData.bodyFat);
      setVisceralFat(measurementData.visceralFat);
      setBodyWater(measurementData.bodyWater);
      setMuscleMass(measurementData.muscleMass);
    }
    else {
      setLoading(true);
    }
  }, [measurementData]);

  return (
    <BgTemplate bgImage={gym}>
      <div className="p-8 rounded-2xl w-fit bg-transparent-white flex flex-col gap-y-8 min-w-[calc(100%-2rem)] md:min-w-[500px] md:max-w-[50%]">
        {
          loading ? (
            <h1 className='text-primary text-center'>Loading...</h1>
          ) : (
            <>
              <h1 className="my-4 text-center font-black">My Data</h1>
              <Form className='flex flex-row flex-wrap gap-y-5 gap-x-8'>
                <FormGroup className='flex flex-col gap-y-2 w-[calc(50%-1rem)]'>
                  <Label for="weight">Weight (kg)</Label>
                  <Input
                    type="number"
                    id="weight"
                    value={weight}
                    disabled
                    className='rounded p-2 border border-primary'
                  />
                </FormGroup>
                <FormGroup className='flex flex-col gap-y-2 w-[calc(50%-1rem)]'>
                  <Label for="height">BMI</Label>
                  <Input
                    type="number"
                    id="height"
                    value={bmi}
                    disabled
                    className='rounded p-2 border border-primary'
                  />
                </FormGroup>
                <FormGroup className='flex flex-col gap-y-2 w-[calc(50%-1rem)]'>
                  <Label for="fat">Fat (%)</Label>
                  <Input
                    type="number"
                    id="fat"
                    value={bodyFat}
                    disabled
                    className='rounded p-2 border border-primary'
                  />
                </FormGroup>
                <FormGroup className='flex flex-col gap-y-2 w-[calc(50%-1rem)]'>
                  <Label for="visceralFat">Visceral Fat</Label>
                  <Input
                    type="number"
                    id="visceralFat"
                    value={visceralFat}
                    disabled
                    className='rounded p-2 border border-primary'
                  />
                </FormGroup>
                <FormGroup className='flex flex-col gap-y-2 w-[calc(50%-1rem)]'>
                  <Label for="bodyWater">Body Water (%)</Label>
                  <Input
                    type="number"
                    id="bodyWater"
                    value={bodyWater}
                    disabled
                    className='rounded p-2 border border-primary'
                  />
                </FormGroup>
                <FormGroup className='flex flex-col gap-y-2 w-[calc(50%-1rem)]'>
                  <Label for="muscleMass">Muscle mass (kg)</Label>
                  <Input
                    type="number"
                    id="muscleMass"
                    value={muscleMass}
                    disabled
                    className='rounded p-2 border border-primary'
                  />
                </FormGroup>
                <Button type="button" onClick={handleGoToGoalsScreen} className='mt-8 bg-primary text-white hover:bg-white hover:text-primary hover:border-2 border-primary w-full'>
                  See my progress
                </Button>
                <Button type="button" onClick={handleGoToDashboard} className='mt-8 bg-primary text-white hover:bg-white hover:text-primary hover:border-2 border-primary w-full'>
                  Go back
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
